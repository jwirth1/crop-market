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
        userId: Vue.$cookies.get('userId')
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
                    router.push('/');
                })
                .catch(() => {
                    alert('Signup failed, please try again.');
                });
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
        async removeUser(state) {
            Vue.$cookies.remove('user');
            state.user = null;
            Vue.$cookies.remove('userId');
            state.userId = null;
        }
    }
});
