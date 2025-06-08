import { HomePage } from './presentation/pages/homepage.ts';
import { PlayPage } from './presentation/pages/play.ts';
import { RulesPage } from './presentation/pages/rules.ts';
import { RankingPage } from './presentation/pages/ranking.ts';

const app = document.getElementById('app');

function renderPage(page: string) {
    app.innerHTML = '';
    let view;

    switch (page) {
        case 'play':
            view = new PlayPage();
            break;
        case 'rules':
            view = new RulesPage();
            break;
        case 'ranking':
            view = new RankingPage();
            break;
        default:
            view = new HomePage();
    }

    app.appendChild(view.render(renderPage));
}

renderPage('home');
