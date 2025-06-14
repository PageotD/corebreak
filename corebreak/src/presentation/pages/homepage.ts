import './homepage.css';
import footerHTML from '../../data/local/footer.html?raw';

type NavigateFn = (page: string) => void;

export class HomePage {

    private createConnectionButton(): HTMLElement {
        const button = document.createElement('button');
        button.className = 'connection-button';
        button.id = 'connection-button';
        if (window.localStorage.getItem('token')) {
            button.textContent = 'Log out';
        } else {
            button.textContent = 'Log in';
        }
        return button;
    }

    private createTitle(): HTMLElement {
        const title = document.createElement('h1');
        title.textContent = 'CoreBreak';
        return title;
    }

    private createFooter(): HTMLElement {
        const footer = document.createElement('footer');
        footer.className = 'footer';
        footer.innerHTML = footerHTML;
        return footer;
    }

    private createButton(id: string, label: string, onNavigate: NavigateFn): HTMLButtonElement {
        const button = document.createElement('button');
        button.id = id;
        button.textContent = label;
        button.onclick = () => onNavigate(id);
        return button;
    }

    private createButtonContainer(onNavigate: NavigateFn): HTMLElement {
        const buttonContainer = document.createElement('div');
        buttonContainer.className = 'homepage-button-container';

        const buttonGroup = document.createElement('div');
        buttonGroup.className = 'button-group';

        const buttons = [
            { id: 'play', label: 'Play' },
            { id: 'connect', label: 'Connect' },
            { id: 'rules', label: 'Rules' },
            { id: 'ranking', label: 'Ranking' }
        ];

        buttons.forEach(({ id, label }) =>
            buttonGroup.appendChild(this.createButton(id, label, onNavigate))
        );

        buttonContainer.appendChild(buttonGroup);
        return buttonContainer;
    }

    public render(onNavigate: NavigateFn): HTMLElement {
        const container = document.createElement('div');
        container.className = 'homepage-container';
        container.id = 'homepage';

        //container.appendChild(this.createConnectionButton());
        container.appendChild(this.createTitle());
        container.appendChild(this.createButtonContainer(onNavigate));
        container.appendChild(this.createFooter());

        return container;
    }
}
