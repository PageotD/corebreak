import './homepage.css';

export function renderHomePage(onNavigate: (page: string) => void) {
    // Create main container
    const container = document.createElement('div');
    container.className = 'homepage-container';

    // Main title
    const title = document.createElement('h1');
    title.textContent = 'CoreBreak';
    container.appendChild(title);

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

        if (id === 'rules') {
            btn.onclick = () => onNavigate('rules');
        }
        buttonGroup.appendChild(btn);
    });

    // Add buttons to container
    homepageButtonContainer.appendChild(buttonGroup);

    // Add button container to main container
    container.appendChild(homepageButtonContainer);

    // Create footer
    const homepageFooter = document.createElement('footer');
    homepageFooter.textContent = '© 2025 CoreBreak';
    container.appendChild(homepageFooter);

    return container;
}

// rules.js
export function renderRulesPage(onNavigate) {
    const container = document.createElement('div');
    container.className = 'rules-container';
    container.innerHTML = '<h1>Rules Page</h1><button id="back">Retour</button>';
    container.querySelector('#back').onclick = () => onNavigate('home');
    return container;
}