// Firebase
import firebase from 'firebase/app';

// Auth
import auth from './services/auth';

// Styles
import '../css/style.scss';

// Router
import { Router } from '@vaadin/router';

import './components/home';
import './components/register';

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
    path: '/resources/overview',
    component: 'resource-page',
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

// {
//   "title": "Learn JS effectively",
//   "url": "https://www.learn-js.org/",
//   "img": "data:image/png;base64,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",
//   "category": "overview",
//   "tags": ["js", "how-to", "productivity"],
//   "goals": ["learn how to learn js", "get an overview of the language", "cover the basics of js"]
// }

// {
//   "title": "An intro to GitHub",
//   "url": "https://product.hubspot.com/blog/git-and-github-tutorial-for-beginners",
//   "img": "https://bsmedia.business-standard.com/media-handler.php?mediaPath=https://bsmedia.business-standard.com/_media/bs/img/article/2020-02/13/full/1581607900-9541.jpg&width=1200",
//   "category": "overview",
//   "tags": ["github", "version control", "beginner", "article"],
//   "goals": ["learn the basics of GitHub", "what is version control", "how to create a repository"]
// }
