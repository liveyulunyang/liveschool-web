import Vue from 'vue';
import Router from 'vue-router';
import Footer from './components/modules/FooterSection.vue'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkExactActiveClass: 'is-active',
  routes: [
    {
      path: '/liveTalk',
      name: 'liveTalkFrontView',
      components: {
        default: () => import('@/views/Frontend.vue'),
        footer: Footer
      },
      children: [
        {
          path: '/startClass',
          name: 'startClass',
          component: () => import('@/pages/startClass.vue')
        }
      ]
    },
    {
      path: '/',
      name: '',
      components: {
        default: () => import('@/views/Backend.vue'),
        footer: Footer
      },
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('@/pages/Home.vue')
        },
        {
          path: '/register',
          name: 'register',
          component: () => import('@/pages/Register.vue')
        },
        {
          path: '/policy',
          name: 'policy',
          component: () => import('@/pages/Policy.vue')
        },
        {
          path: '/forget_password',
          name: 'forgetPwd',
          component: () => import('@/pages/ForgetPwd.vue')
        },
        {
          path: '/users',
          name: 'Users',
          // components: {
          //   default: () => import('@/pages/Users.vue')
          // },
          // children: [
          //   {
          //     path: 'users_recycle',
          //     name: 'usersRecycle',
          //     component: () => import('@/pages/UsersRecycle.vue')
          //   }
          // ]
          component: () => import('@/pages/Users.vue')
        },
        {
          path: '/users_recycle',
          name: 'usersRecycle',
          component: () => import('@/pages/UsersRecycle.vue')
        },
        {
          path: '/courses_talk',
          name: 'courses',
          component: () => import('@/pages/CoursesTalk.vue')
        },
        {
          path: '/RegistrationProgress',
          name: 'RegistrationProgress',
          component: () => import('@/pages/RegistrationProgress.vue')
        },
        {
          path: '/courses_teacher',
          name: 'CoursesTeacher',
          component: () => import('@/pages/CoursesTeacher.vue')
        },
        {
          path: '/CoursesTeacher_Audit',
          name: 'CoursesTeacher_Audit',
          component: () => import('@/pages/CoursesTeacher_Audit.vue')
        },
        {
          path: '/courses_class',
          name: 'CoursesClass',
          component: () => import('@/pages/CoursesClass.vue')
        },
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
          path: '/talk_class/:status',
          name: 'addTalkClass',
          component: () => import('@/pages/AddClassTalk.vue')
        },
        {
          path: '/teacher_class/:status',
          name: 'addTeacherClass',
          component: () => import('@/pages/AddClassTeacher.vue')
        },
        {
          path: '/live_class/:status',
          name: 'addLiveClassClass',
          component: () => import('@/pages/AddClassLiveClass.vue')
        },
        {
          path: '/ctl_class/:type',
          name: 'ctl_class',
          component: () => import('@/pages/AddPreReviewClass.vue')
        },
        // ??????
        {
          path: '/course_template',
          name: 'course_template',
          component: () => import('@/pages/CourseTemplate.vue')
        },
        {
          path: '/classification/:first?/:second?/:third?/:fourth?',
          name: 'classification',
          component: () => import('@/pages/Classification.vue')
        },
        {
          path: '/learn_record/list',
          name: 'learn_record_list',
          component: () => import('@/pages/Learn_recordList.vue')
        },
        {
          path: '/learn_record/student',
          name: 'learn_record_student',
          component: () => import('@/pages/Learn_record_student.vue')
        },
        {
          path: '/learn_record/teacher',
          name: 'Learn_record_teacher',
          component: () => import('@/pages/Learn_record_teacher.vue')
        },
        {
          path: '/learn_record/supervise',
          name: 'Learn_record_supervise',
          component: () => import('@/pages/Learn_record_supervise.vue')
        },
        {
          path: '/teach_record',
          name: 'teach_record',
          component: () => import('@/pages/Teach_record.vue')
        },
        {
          path: '/book_course_director',
          name: 'book_courseDirector',
          component: () => import('@/pages/Book_courseDirector.vue')
        },
        {
          path: '/book_course_Admin',
          name: 'book_courseAdmin',
          component: () => import('@/pages/Book_courseAdmin.vue')
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
          path: '/announce/:mode?',
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
          path: '/AddApply/add',
          name: 'AddApply',
          component: () => import('@/pages/AddApply.vue')
        },
        {
          path: '/account',
          name: 'account',
          component: () => import('@/pages/Account.vue')
        },
        {
          path: '/Course_setting',
          name: 'Course_setting',
          component: () => import('@/pages/Course_setting.vue')
        },
        {
          path: '/selectLesson',
          name: 'SelectLesson',
          component: () => import('@/pages/SelectLesson.vue')
        },
        {
          path: '/pointsTrading',
          name: 'PointsTrading',
          component: () => import('@/pages/PointsTrading.vue')
        },
        {
          path: '/meeting',
          name: 'meeting',
          component: () => import('@/pages/Meeting.vue')
        },
        {
          path: '/meeting/add',
          name: 'addMeeting',
          component: () => import('@/pages/AddMeeting.vue')
        },
        {
          path: '/index_manage',
          name: 'IndexManage',
          component: () => import('@/pages/IndexManage.vue')
        },
        {
          path: '/ads/add',
          name: 'AddBanner',
          component: () => import('@/pages/AddBanner.vue')
        },
        // ????????????
        {
          path: '/booking_class/:type',
          name: 'bookingClass',
          component: () => import('@/pages/booking/BookingClass.vue')
        },
        {
          path: '/booking_class/talk/:id',
          name: 'classPreviewTalk',
          component: () => import('@/pages/booking/ClassPreview.vue')
        },
        {
          path: '/booking_class/class/:id',
          name: 'classPreview',
          component: () => import('@/pages/booking/ClassPreview.vue')
        },
        {
          path: '/booking_class/teacher/:id',
          name: 'classPreviewTeacher',
          component: () => import('@/pages/booking/ClassPreview.vue')
        },

        // company
        {
          path: '/teachers',
          name: 'teachers',
          component: () => import('@/pages/company/teachers.vue')
        },
        {
          path: '/manual',
          name: 'manual',
          component: () => import('@/pages/company/manual.vue')
        },
        {
          path: '/qa',
          name: 'qa',
          component: () => import('@/pages/company/qa.vue')
        },
        {
          path: '/software',
          name: 'software',
          component: () => import('@/pages/company/software.vue')
        }
      ]
    }
  ]
});

export default router;