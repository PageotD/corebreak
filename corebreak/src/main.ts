import { renderHomePage } from './presentation/pages/homepage.ts';
import { renderRulesPage } from './presentation/pages/rules.ts';

const app = document.getElementById('app');

function renderPage(page) {
    app.innerHTML = ''; // Vide le conteneur
    switch (page) {
        case 'rules':
            app.appendChild(renderRulesPage(renderPage));
            break;
        default:
            app.appendChild(renderHomePage(renderPage));
    }
}

// Affiche la page d’accueil au chargement
renderPage('home');
