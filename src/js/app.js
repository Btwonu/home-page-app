// Firebase
import firebase from 'firebase/app';

// Auth
import auth from './services/auth';

// Styles
import '../css/style.scss';

// Router
import { Router } from '@vaadin/router';

// Declarations
const app = document.getElementById('app');
const router = new Router(app);

// Router
router.setRoutes([
  {
    path: '/',
    component: 'home-component',
  },
  {
    path: '/register',
    component: 'register-component',
  },
  {
    path: '/login',
    component: 'login-component',
  },
  {
    path: '/logout',
    action: (context, commands) => {
      auth.logout();
      return commands.redirect('/login');
    },
  },
  {
    path: '/details/:id',
    component: 'note-details',
  },
  {
    path: '/users',
    component: 'users-component',
  },
  {
    path: '/users/:user',
    component: 'user-specific-component',
  },
  {
    path: '(.*)',
    component: 'not-found',
  },
]);
