import { UserManager } from '../../core/usecases/userManager';

export class LoginPage {
    private userManager = new UserManager();

    public render(onNavigate: (page: string) => void): HTMLElement {
        console.log('Rendering login page');

        const container = document.createElement('div');
        container.innerHTML = `
            <div style="max-width: 400px; margin: 0 auto; padding: 20px;">
                <h2>Login</h2>
                <div style="margin-bottom: 10px;">
                    <input id="username" placeholder="Username" style="width: 100%; padding: 8px; margin-bottom: 10px;" />
                </div>
                <div style="margin-bottom: 10px;">
                    <input id="password" placeholder="Password" type="password" style="width: 100%; padding: 8px; margin-bottom: 10px;" />
                </div>
                <div style="margin-bottom: 10px;">
                    <button id="login" style="width: 48%; padding: 8px; margin-right: 4%;">Login</button>
                    <button id="register" style="width: 48%; padding: 8px;">Register</button>
                </div>
                <p id="status" style="color: red; margin-top: 10px;"></p>
            </div>
        `;

        const status = container.querySelector('#status') as HTMLElement;

        // Login button
        container.querySelector('#login')!.addEventListener('click', () => {
            const username = (container.querySelector('#username') as HTMLInputElement).value.trim();
            const password = (container.querySelector('#password') as HTMLInputElement).value;

            if (!username || !password) {
                status.textContent = 'Please enter both username and password';
                return;
            }

            console.log('Attempting login for:', username);
            const success = this.userManager.login(username, password);

            if (success) {
                status.textContent = 'Login successful!';
                status.style.color = 'green';
                console.log('Login successful, navigating to home');
                setTimeout(() => onNavigate('home'), 1000);
            } else {
                status.textContent = 'Invalid username or password';
                status.style.color = 'red';
            }
        });

        // Register button
        container.querySelector('#register')!.addEventListener('click', () => {
            const username = (container.querySelector('#username') as HTMLInputElement).value.trim();
            const password = (container.querySelector('#password') as HTMLInputElement).value;

            if (!username || !password) {
                status.textContent = 'Please enter both username and password';
                return;
            }

            console.log('Attempting registration for:', username);
            const success = this.userManager.register(username, password);

            if (success) {
                status.textContent = 'Registration successful! Logging in...';
                status.style.color = 'green';
                console.log('Registration successful, navigating to home');
                setTimeout(() => onNavigate('home'), 1000);
            } else {
                status.textContent = 'User already exists';
                status.style.color = 'red';
            }
        });

        return container;
    }
}