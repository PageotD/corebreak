// src/presentation/pages/play.ts

export function renderPlayPage(onNavigate) {
    const container = document.createElement('div');
    container.innerHTML = '<p>Play</p>' + '<button id="back">Back</button>';
    container.querySelector('#back').onclick = () => onNavigate('home');
    return container;
}
