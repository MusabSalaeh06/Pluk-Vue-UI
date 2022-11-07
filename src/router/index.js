import { createRouter, createWebHistory } from 'vue-router'
import InDex from '../components/auth/Index.vue';
import LogIn from '../components/auth/Login.vue';
import ReGisTer from '../components/auth/Register.vue';
import ProFile from '../components/main menu/Profile.vue';
import DashBoard from '../components/main menu/Dashboard.vue';
import My_Org from '../components/main menu/My_org.vue'; 
import Org_Detail from '@/components/org/Org_detail.vue';
import Org_Myjoin from '../components/main menu/Org_myjoin.vue';
import Org_Myjoin_Detail from '../components/main menu/Org_myjoin_detail.vue';
import Cocate_Show from '../components/course/Cocate_show.vue';
import My_Opencourse from '../components/main menu/My_opencourse.vue'; 
import Course_Detail  from '../components/course/Course_detail.vue';
import Lesson_Page from '../components/main menu/Lesson_page.vue';
import Quest_Quiz from '../components/main menu/Quest_quiz.vue';
import My_Course from '../components/main menu/My_course.vue';
import My_Course_Detail from '../components/main menu/My_course_detail.vue';
import Learning_Page from '../components/main menu/Learning_page.vue';
import Ans_Quiz from '../components/main menu/Ans_quiz.vue';
import Set_Score from '../components/main menu/Set_score.vue';
import SCore from '../components/main menu/Score.vue';
import Invite_Org from '../components/main menu/Invite_org.vue';
import Book_Ancm from '../components/main menu/Book_ancm.vue';
import Org_Show from '../components/org/Org_show.vue';
import Member_Show from '../components/main menu/Member_show.vue';
import Course_Show from '../components/course/Course_show.vue'; 

const routes = [

  {
    name: 'InDex',
    path: '/',
    component: InDex
  },
  {
    name: 'LogIn',
    path: '/login',
    component: LogIn
  },
  {
    name: 'ReGisTer',
    path: '/register',
    component: ReGisTer
  },
  {
    name: 'ProFile',
    path: '/profile',
    component: ProFile
  },
  
  {
    path: '/dashboard',
    name: 'DashBoard',
    component: DashBoard 
  },

  {
    path: '/my_org',
    name: 'My_Org',
    component: My_Org
  },
  {
    name: 'Org_Detail',
    path: '/org_detail/:id',
    component: Org_Detail
  },
  //{path: '/org_detail',name: 'org_detail',component: () => import('../components/org/org_detail.vue') },
  {
    name: 'Org_Myjoin',
    path: '/org_myjoin',
    component: Org_Myjoin
  },
  {
    name: 'Org_Myjoin_Detail',
    path: '/org_myjoin_detail/:id',
    component: Org_Myjoin_Detail
  },

  {
    name: 'Cocate_Show',
    path: '/cocate_show',
    component: Cocate_Show
  },

  {
    name: 'My_Opencourse',
    path: '/my_opencourse',
    component: My_Opencourse 
  },
  {
    name: 'Course_Detail',
    path: '/course_detail/:id',
    component:Course_Detail
  },
  {
    name: 'Lesson_Page',
    path: '/lesson_page/:id',
    component: Lesson_Page
  },
  {
    name: 'Quest_Quiz',
    path: '/quest_quiz/:id',
    component: Quest_Quiz
  },
  {
    name:'My_Course',
    path: '/my_course',
    component:My_Course
  },
  {
    name: 'My_Course_Detail',
    path: '/my_course_detail/:id',
    component: My_Course_Detail
  },
  {
    name: 'Learning_Page',
    path: '/learning_page/:id',
    component:Learning_Page
  },
  {
    name:'Ans_Quiz',
    path: '/ans_quiz/:id',
    component:Ans_Quiz
  },
  {
    name: 'Set_Score',
    path: '/set_score',
    component:Set_Score
  },
  {
    name: 'SCore',
    path: '/score/:id',
    component:SCore
  },

  {
    name: 'Invite_Org',
    path: '/invite_org',
    component:Invite_Org
  },

  {
    name: 'Book_Ancm',
    path: '/book_ancm',
    component:Book_Ancm
  },
  
  {
    name: 'Org_Show',
    path: '/org_show',
    component:Org_Show
  },
  {
    name: 'Member_Show',
    path: '/member_show',
    component:Member_Show
  },
  {
    name: 'Course_Show',
    path: '/course_show',
    component:Course_Show
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
