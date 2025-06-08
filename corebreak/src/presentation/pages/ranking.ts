// src/presentation/pages/ranking.ts

export function renderRankingPage(onNavigate) {
    const container = document.createElement('div');
    container.innerHTML = '<p>Ranking</p>' + '<button id="back">Back</button > ';
    container.querySelector('#back').onclick = () => onNavigate('home');
    return container;
}
