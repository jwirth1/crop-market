/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';
import router from '@/router';
import axios from 'axios';
import VueCookies from 'vue-cookies';

Vue.use(Vuex);
Vue.use(VueCookies);

export default new Vuex.Store({
    state: {
        user: Vue.$cookies.get('user'),
        userId: Vue.$cookies.get('userId'),
        type: Vue.$cookies.get('type'),
        viewedUserId: Vue.$cookies.get('viewedUserId'),
        viewedUserType: Vue.$cookies.get('viewedUserType')
    },
    actions: {
        async LogIn({ commit }, { email, password }) {
            axios
                .post(
                    'http://localhost:3000/api/login',
                    {
                        email: email,
                        password: password
                    }
                )
                .then((response) => {
                    commit('setUser', email);
                    commit('setUserId', response.data.userId);
                    commit('setType', response.data.type);
                    router.push('/');
                })
                .catch(() => {
                    alert('Username and/or password incorrect');
                    commit('removeUser');
                });
        },
        async LogOut({ commit }) {
            commit('removeUser');
            commit('removeViewedUser');
            router.push('/');
        },
        async SignUp({ commit }, { email, password, type, name }) {
            axios
                .post(
                    'http://localhost:3000/api/signup',
                    {
                        email: email,
                        password: password,
                        type: type,
                        name: name
                    }
                )
                .then((response) => {
                    commit('setUser', email);
                    commit('setUserId', response.data.userId);
                    commit('setType', response.data.type);
                    router.push('/');
                })
                .catch(() => {
                    alert('Signup failed, please try again.');
                });
        },
        async AddDesire({ desire }) {
            axios
                .post(
                    'http://localhost:3000/api/addDesire',
                    {
                        userId: this.state.userId,
                        type: this.state.type,
                        desire: desire
                    }
                )
                .catch(() => {
                    alert('Error adding desire');
                });
        },
        async UpdateDescription({ description }) {
            axios
                .post(
                    'http://localhost:3000/api/updateDescription',
                    {
                        userId: this.state.userId,
                        type: this.state.type,
                        description: description
                    }
                )
                .catch(() => {
                    alert('Error updating description');
                });
        },
        async UpdateLocation({ location }) {
            axios
                .post(
                    'http://localhost:3000/api/updateLocation',
                    {
                        userId: this.state.userId,
                        type: this.state.type,
                        location: location
                    }
                )
                .catch(() => {
                    alert('Error updating location');
                });
        },
        async UpdateContact({ contact }) {
            axios
                .post(
                    'http://localhost:3000/api/updateContact',
                    {
                        userId: this.state.userId,
                        type: this.state.type,
                        contact: contact
                    }
                )
                .catch(() => {
                    alert('Error updating contact info');
                });
        },
        async AddItem({ item }) {
            axios
                .post(
                    'http://localhost:3000/api/addItem',
                    {
                        userId: this.state.userId,
                        type: this.state.type,
                        item: item
                    }
                )
                .catch(() => {
                    alert('Error adding item');
                });
        },
        async RemoveItem({ itemId }) {
            axios
                .post(
                    'http://localhost:3000/api/removeItem',
                    {
                        userId: this.state.userId,
                        type: this.state.type,
                        itemId: itemId
                    }
                )
                .catch(() => {
                    alert('Error removing item');
                });
        },
        async RemoveDesire({ desire }) {
            axios
                .post(
                    'http://localhost:3000/api/removeDesire',
                    {
                        userId: this.state.userId,
                        type: this.state.type,
                        desire: desire
                    }
                )
                .catch(() => {
                    alert('Error removing desire');
                });
        },
        async ViewUser({ commit }, { userId, type }) {
            commit(setViewedUserId(userId));
            commit(setViewedUserType(type));
            router.push('/viewed-profile');
        },
        async AddReview({ rating, description }) {
            axios
                .post(
                    'http://localhost:3000/api/addReview',
                    {
                        userId: this.state.viewedUserId,
                        type: this.state.viewedUserType,
                        name: this.state.user.name,
                        rating: rating,
                        description: description
                    }
                )
                .catch(() => {
                    alert('Error adding review');
                });
        }
    },
    getters: {
        async getUser(state) {
            let user = null;
            await axios
                .get(
                    'http://localhost:3000/api/getUser',
                    {
                        params: {
                            userId: state.userId,
                            type: state.type
                        }
                    }
                )
                .then((response) => {
                    user = response.data.user;
                })
                .catch(() => {
                    alert('Error: user not found');
                    return null;
                });
            return user;
        },
        async getViewedUser(state) {
            let user = null;
            await axios
                .get(
                    'http://localhost:3000/api/getUser',
                    {
                        params: {
                            userId: state.viewedUserId,
                            type: state.viewedUserType
                        }
                    }
                )
                .then((response) => {
                    user = response.data.user;
                })
                .catch(() => {
                    alert('Error: user not found');
                    return null;
                });
            return user;
        },
        async getFarmers(location) {
            let farmersList = [];
            await axios
                .get('http://localhost:3000/api/farmers', 
                    {
                        params: {
                            location: location
                        }
                    }
                )
                .then((response) => {
                    farmersList = response.data.response;
                })
                .catch(() => {
                    alert('Error: No farmers available');
                    return null;
                });
            return farmersList;
        },
        async getServiceProviders(location) {
            let providersList = [];
            await axios
                .get('http://localhost:3000/api/service-providers',
                    {
                        params: {
                            location: location
                        }
                    }
                )
                .then((response) => {
                    providersList = response.data.response;
                })
                .catch(() => {
                    alert('Error: No service providers available');
                    return null;
                });
            return providersList;
        },
        async getItems(state) {
            let itemsList = [];
            await axios
                .get('http://localhost:3000/api/getItems',
                    {
                        params: {
                            userId: state.userId,
                            type: state.type
                        }
                    }
                )
                .then((response) => {
                    itemsList =  response.data.items;
                })
                .catch(() => {
                    alert('Error: user not found');
                    return null;
                });
            return itemsList;
        },
        async getViewedItems(state) {
            let itemsList = [];
            await axios
                .get('http://localhost:3000/api/getItems',
                    {
                        params: {
                            userId: state.viewedUserId,
                            type: state.viewedUserType
                        }
                    }
                )
                .then((response) => {
                    itemsList =  response.data.items;
                })
                .catch(() => {
                    alert('Error: user not found');
                    return null;
                });
            return itemsList;
        },
        async getDesires(state) {
            let desiresList = [];
            await axios
                .get('http://localhost:3000/api/getDesires',
                    {
                        params: {
                            userId: state.userId,
                            type: state.type
                        }
                    }
                )
                .then((response) => {
                    desiresList =  response.data.desires;
                })
                .catch(() => {
                    alert('Error: user not found');
                    return null;
                });
            return desiresList;
        },
        async getViewedDesires(state) {
            let desiresList = [];
            await axios
                .get('http://localhost:3000/api/getDesires',
                    {
                        params: {
                            userId: state.viewedUserId,
                            type: state.viewedUserType
                        }
                    }
                )
                .then((response) => {
                    desiresList =  response.data.desires;
                })
                .catch(() => {
                    alert('Error: user not found');
                    return null;
                });
            return desiresList;
        },
        async getCrops(crop) {
            let cropsList = [];
            await axios
                .get('http://localhost:3000/api/findCrops',
                    {
                        params: {
                            crop: crop
                        }
                    }
                )
                .then((response) => {
                    cropsList = response.data.crops;
                })
                .catch(() => {
                    alert('Error: no crops found');
                    return null;
                });
            return cropsList;
        },
        async getServices(service) {
            let servicesList = [];
            await axios
                .get('http://localhost:3000/api/findServices',
                    {
                        params: {
                            service: service
                        }
                    }
                )
                .then((response) => {
                    servicesList = response.data.services;
                })
                .catch(() => {
                    alert('Error: no crops found');
                    return null;
                });
            return servicesList;
        },
        async getReviews(state) {
            let reviewList = [];
            await axios
                .get('http://localhost:3000/api/getReviews',
                    {
                        params: {
                            userId: state.userId,
                            type: state.type
                        }
                    }
                )
                .then((response) => {
                    reviewList = response.data.reviews;
                })
                .catch(() => {
                    alert('Error: user not found');
                    return null;
                });
            return reviewList;
        },
        async getViewedReviews(state) {
            let reviewList = [];
            await axios
                .get('http://localhost:3000/api/getReviews',
                    {
                        params: {
                            userId: state.viewedUserId,
                            type: state.viewedUserType
                        }
                    }
                )
                .then((response) => {
                    reviewList = response.data.reviews;
                })
                .catch(() => {
                    alert('Error: user not found');
                    return null;
                });
            return reviewList;
        }

    },
    mutations: {
        async setUser(state, username) {
            Vue.$cookies.set('user', username);
            state.user = Vue.$cookies.get('user');
        },
        async setUserId(state, userId) {
            Vue.$cookies.set('userId', userId);
            state.userId = Vue.$cookies.get('userId');
        },
        async setType(state, type) {
            Vue.$cookies.set('type', type);
            state.type = Vue.$cookies.get('type');
        },
        async removeUser(state) {
            Vue.$cookies.remove('user');
            state.user = null;
            Vue.$cookies.remove('userId');
            state.userId = null;
            Vue.$cookies.remove('type');
            state.type = null;
        },
        async setViewedUser(state, viewedUserId) {
            Vue.$cookies.set('viewedUserId', viewedUserId);
            state.viewedUserId = Vue.$cookies.get('viewedUserId');
        },
        async setViewedUserType(state, viewedUserType) {
            Vue.$cookies.set('viewedUserType', viewedUserType);
            state.viewedUserType = Vue.$cookies.get('viewedUserType');
        },
        async removeViewedUser(state) {
            Vue.$cookies.remove('viewedUserId');
            state.viewedUserId = null;
            Vue.$cookies.remove('viewedUserType');
            state.viewedUserType = null;
        }
    }
});
