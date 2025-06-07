import './homepage.css';

export function renderHomePage() {
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
        { id: 'credits', label: 'Credits' }
    ];

    const buttonGroup = document.createElement('div');
    buttonGroup.className = 'button-group';

    buttons.forEach(({ id, label }) => {
        const btn = document.createElement('button');
        btn.id = id;
        btn.textContent = label;
        buttonGroup.appendChild(btn);
    });

    // Add buttons to container
    homepageButtonContainer.appendChild(buttonGroup);

    // Add button container to main container
    container.appendChild(homepageButtonContainer);

    return container;
}
