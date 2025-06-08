import './homepage.css';
import footerHTML from '../../data/local/footer.html?raw';

type NavigateFn = (page: string) => void;

function createTitle(): HTMLElement {
    const title = document.createElement('h1');
    title.textContent = 'CoreBreak';
    return title;
}

function createFooter(): HTMLElement {
    const footer = document.createElement('footer');
    footer.className = 'footer';
    footer.innerHTML = footerHTML;
    return footer;
}

function createButton(id: string, label: string, onNavigate: NavigateFn): HTMLButtonElement {
    const button = document.createElement('button');
    button.id = id;
    button.textContent = label;
    button.onclick = () => onNavigate(id);
    return button;
}

function createButtonContainer(onNavigate: NavigateFn): HTMLElement {
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'homepage-button-container';

    const buttonGroup = document.createElement('div');
    buttonGroup.className = 'button-group';

    const buttons = [
        { id: 'play', label: 'Play' },
        { id: 'rules', label: 'Rules' },
        { id: 'ranking', label: 'Ranking' }
    ];

    buttons.map(({ id, label }) =>
        buttonGroup.appendChild(createButton(id, label, onNavigate))
    );

    buttonContainer.appendChild(buttonGroup);
    return buttonContainer;
}

export function renderHomePage(onNavigate: NavigateFn): HTMLElement {
    const container = document.createElement('div');
    container.className = 'homepage-container';

    container.appendChild(createTitle());
    container.appendChild(createButtonContainer(onNavigate));
    container.appendChild(createFooter());

    return container;
}
