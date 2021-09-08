import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkExactActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/Users.vue')
    },

    {
      path: '/courses',
      name: 'courses',
      component: () => import('@/pages/Courses.vue')
    },
    // 帳號管理
    {
      path: '/account/add',
      name: 'account_add',
      component: () => import('@/pages/Manage.vue')
    },
    {
      path: '/account/edit/:id',
      name: 'account_edit',
      component: () => import('@/pages/Manage.vue')
    },
    {
      path: '/talk_class/add',
      name: 'addTalkClass',
      component: () => import('@/pages/AddClass.vue')
    },
    {
      path: '/ctl_class/:type',
      name: 'ctl_class',
      component: () => import('@/pages/AddPreReviewClass.vue')
    },
    // 模板
    {
      path: '/course_template',
      name: 'course_template',
      component: () => import('@/pages/CourseTemplate.vue')
    },
    {
      path: '/live_class',
      name: 'live_class',
      component: () => import('@/pages/Live_class.vue')
    },
    {
      path: '/classification',
      name: 'classification',
      component: () => import('@/pages/Classification.vue')
    },
    {
      path: '/learn_record',
      name: 'learn_record',
      component: () => import('@/pages/Learn_record.vue')
    },
    {
      path: '/learn_record/:id',
      name: 'learn_record_student',
      component: () => import('@/pages/Learn_record_student.vue')
    },
    {
      path: '/teach_record',
      name: 'teach_record',
      component: () => import('@/pages/Teach_record.vue')
    },
    {
      path: '/book_course',
      name: 'book_course',
      component: () => import('@/pages/Book_course.vue')
    },

    {
      path: '/point',
      name: 'point',
      component: () => import('@/pages/Point.vue')
    },
    {
      path: '/serial_number',
      name: 'serial_number',
      component: () => import('@/pages/Serial_number.vue')
    },
    {
      path: '/announce',
      name: 'announce',
      component: () => import('@/pages/Announce.vue')
    },
    {
      path: '/info',
      name: 'info',
      component: () => import('@/pages/Info.vue')
    },
    {
      path: '/myClass',
      name: 'myClass',
      component: () => import('@/pages/MyClass.vue')
    },
    {
      path: '/students',
      name: 'students',
      component: () => import('@/pages/Students.vue')
    },
    {
      path: '/students/add',
      name: 'studentsAdd',
      component: () => import('@/pages/ManageStudent.vue')
    },
    {
      path: '/branch',
      name: 'branch',
      component: () => import('@/pages/Branch.vue')
    },
    {
      path: '/sectional_drawing',
      name: 'SectionalDrawing',
      component: () => import('@/pages/Sectional_drawing.vue')
    },
    {
      path: '/booking/add',
      name: 'AddBooking',
      component: () => import('@/pages/AddBooking.vue')
    },
    {
        path: '/analytics',
        name: 'analytics',
        component: () => import('./pages/Analytics.vue')
    },
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