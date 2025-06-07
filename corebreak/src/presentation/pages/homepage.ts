export function renderHomePage() {
    // Create main container
    const container = document.createElement('div');
    container.className = 'homepage-container';

    // Main title
    const title = document.createElement('h1');
    title.textContent = 'CoreBreak';
    container.appendChild(title);

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

    container.appendChild(buttonGroup);

    return container;
}
