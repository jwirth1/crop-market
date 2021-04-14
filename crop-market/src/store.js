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
        budget: Vue.$cookies.get('budget')
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
                .then(() => {
                    commit('setUser', email);
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
                .then(() => {
                    commit('setUser', email);
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
        async removeUser(state) {
            Vue.$cookies.remove('user');
            state.user = null;
        }
    }
});
