import { renderHomePage } from './presentation/pages/homepage.ts';
import { renderPlayPage } from './presentation/pages/play.ts';
import { renderRulesPage } from './presentation/pages/rules.ts';
import { renderRankingPage } from './presentation/pages/ranking.ts';

const app = document.getElementById('app');

function renderPage(page) {
    app.innerHTML = ''; // Vide le conteneur
    switch (page) {
        case 'play':
            app.appendChild(renderPlayPage(renderPage));
            break;
        case 'rules':
            app.appendChild(renderRulesPage(renderPage));
            break;
        case 'ranking':
            app.appendChild(renderRankingPage(renderPage));
            break;
        default:
            app.appendChild(renderHomePage(renderPage));
    }
}

// Affiche la page d’accueil au chargement
renderPage('home');
