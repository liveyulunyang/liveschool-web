import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    linkExactActiveClass: 'is-active',
    routes: [
        {
            path: '/',
            name: 'home',
            // component: () => import('./pages/Home.vue')
            component: () => import('./pages/Users.vue')
        },

        // {
        //     path: '/users',
        //     name: 'users',
        //     component: () => import('./pages/Users.vue')
        // },

        {
            path: '/courses',
            name: 'courses',
            component: () => import('./pages/Courses.vue')
        },
        // 帳號管理
        {
            path: '/account_manage',
            name: 'account_manage',
            component: () => import('./pages/Manage.vue')
        }
        // {
        //     path: '/analytics',
        //     name: 'analytics',
        //     component: () => import('./pages/Analytics.vue')
        // },
        // {
        //     path: '/vehicles',
        //     name: 'vehicles',
        //     component: () => import('./pages/Vehicles.vue')
        // }
        // {
        //     path: '/service-reminders',
        //     name: 'serviceReminders',
        //     component: () => import('./pages/ServiceReminders.vue')
        // }
    ]
});

export default router;