// src/presentation/pages/rules.ts
import rulesHtml from '../../data/local/rules.html?raw';

export function renderRulesPage(onNavigate) {
    const container = document.createElement('div');
    container.className = 'rules-container';
    container.innerHTML = rulesHtml + '<button id="back">Retour</button>';
    container.querySelector('#back').onclick = () => onNavigate('home');
    return container;
}
