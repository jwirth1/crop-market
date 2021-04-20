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
        type: Vue.$cookies.get('type')
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
                );
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
                );
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
                );
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
                );
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
                );
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
                );
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
                );
        }
    },
    getters: {
        async GetUser({ userIdParam, type }) {
            let user;
            axios
                .get(
                    'http://localhost:3000/api/getUser',
                    {
                        params: {
                            userId: userIdParam,
                            type: type
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
        async getFarmers() {
            let farmersList = [];
            axios
                .get('http://localhost:3000/api/farmers')
                .then((response) => {
                    let res = [];
                    farmersList = response.data.farmers
                    alert(farmersList)
                    for (var i in farmersList) {
                        alert(farmersList[i].name);
                    }
                })
                .catch(() => {
                    alert('Error: No farmers available');
                    return null;
                });
                return farmersList;
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
        }
    }
});
