import rulesHtml from '../../data/local/rules.html?raw';

export class RulesPage {
    public render(onNavigate: (page: string) => void): HTMLElement {
        const container = document.createElement('div');
        container.className = 'rules-container';
        container.innerHTML = rulesHtml + '<button id="back">Back</button>';
        container.querySelector('#back')!.onclick = () => onNavigate('home');
        return container;
    }
}
