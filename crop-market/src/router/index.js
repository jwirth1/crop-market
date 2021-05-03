import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import store from '../store.js';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/log-in',
        name: 'Log-In',
        component: () => import('../views/Login.vue')
    },
    {
        path: '/sign-up',
        name: 'Sign-Up',
        component: () => import('../views/Signup.vue')
    },
    {
        path: '/profile',
        name: 'Profile',
        component: () => import('../views/Profile.vue')
    }, 
    {
        path: '/listings',
        name: 'Listings',
        component:() => import('../views/Listings.vue')
    },
    {
        path: '/farmers',
        name: 'Farmers',
        component:() => import('../views/Farmers.vue')
    },
    {
        path: '/service-providers',
        name: 'Service-Providers',
        component:() => import('../views/ServiceProviders.vue')
    },
    {
        path: '/viewed-profile',
        name: 'Viewed-Profile',
        component:() => import('../views/ViewedProfile.vue')
    },
    {
        path: '/search/:type/:param',
        name: 'Search-Item',
        component:() => import('../views/SearchItem.vue')
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

router.beforeEach((to, from, next) => {
    if (to.name == 'Home') {
        next();
    } else if (
        to.name !== 'Log-In' &&
        to.name !== 'Sign-Up' &&
        !store.state.user
    ) {
        next({ name: 'Log-In' });
    } else if (
        (to.name == 'Log-In' || to.name == 'Sign-Up') &&
        store.state.user
    ) {
        next({ name: '/home' });
    } else next();
});

export default router;
