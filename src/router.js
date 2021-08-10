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

    {
      path: '/courses',
      name: 'courses',
      component: () => import('./pages/Courses.vue')
    },
    // 帳號管理
    {
      path: '/account/add',
      name: 'account_add',
      component: () => import('./pages/Manage.vue')
    },
    {
      path: '/account/edit/:id',
      name: 'account_edit',
      component: () => import('./pages/Manage.vue')
    },
    {
      path: '/talk_class/add',
      name: 'addTalkClass',
      component: () => import('./pages/AddClass.vue')
    },
    {
      path: '/ctl_class/:type',
      name: 'ctl_class',
      component: () => import('./pages/AddPreReviewClass.vue')
    },
    {
      path: '/course_template',
      name: 'course_template',
      component: () => import('./pages/CourseTemplate.vue')
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