import { HomePage } from './presentation/pages/homepage.ts';
import { PlayPage } from './presentation/pages/play.ts';
import { RulesPage } from './presentation/pages/rules.ts';
import { RankingPage } from './presentation/pages/ranking.ts';
import { LoginPage } from './presentation/pages/login.ts';
import { UserManager } from './core/usecases/userManager';

const app = document.getElementById('app');
const userManager = new UserManager();

function renderPage(page: string) {
    app!.innerHTML = '';
    let view;

    switch (page) {
        case 'play':
            console.log('play page');
            view = new PlayPage();
            break;
        case 'rules':
            console.log('rules page');
            view = new RulesPage();
            break;
        case 'ranking':
            console.log('ranking page');
            view = new RankingPage();
            break;
        case 'connect':
            console.log('connect page');
            view = new LoginPage();
            break;
        default:
            console.log('home page');
            view = new HomePage();
            break;
    }

    app!.appendChild(view.render(renderPage));
}

// Check if user is logged in, if not show login page
function initializeApp() {
    const currentUser = userManager.getCurrentUser();

    if (!currentUser) {
        console.log('No user logged in, showing login page');
        renderPage('login');
    } else {
        console.log('User logged in:', currentUser.username);
        renderPage('home');
    }
}

// Initialize the app
initializeApp();