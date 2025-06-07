import './homepage.css';
import footerHTML from '../../data/local/footer.html?raw';

function createTitle() {
    const title = document.createElement('h1');
    title.textContent = 'CoreBreak';
    return title;
}

function createFooter() {
    const footer = document.createElement('footer');
    footer.className = 'footer';
    footer.innerHTML = footerHTML;
    return footer;
}

export function renderHomePage(onNavigate: (page: string) => void) {
    // Create main container
    const container = document.createElement('div');
    container.className = 'homepage-container';

    // Main title
    container.appendChild(createTitle());

    // Button container
    const homepageButtonContainer = document.createElement('div');
    homepageButtonContainer.className = 'homepage-button-container';

    // Create buttons
    const buttons = [
        { id: 'play', label: 'Play' },
        { id: 'rules', label: 'Rules' },
        { id: 'ranking', label: 'Ranking' }
    ];

    const buttonGroup = document.createElement('div');
    buttonGroup.className = 'button-group';


    buttons.forEach(({ id, label }) => {
        const btn = document.createElement('button');
        btn.id = id;
        btn.textContent = label;

        if (id === 'play') {
            btn.onclick = () => onNavigate('play');
        }
        if (id === 'rules') {
            btn.onclick = () => onNavigate('rules');
        }
        if (id === 'ranking') {
            btn.onclick = () => onNavigate('ranking');
        }
        buttonGroup.appendChild(btn);
    });

    // Add buttons to container
    homepageButtonContainer.appendChild(buttonGroup);

    // Add button container to main container
    container.appendChild(homepageButtonContainer);

    // Create footer
    container.appendChild(createFooter());

    return container;
}