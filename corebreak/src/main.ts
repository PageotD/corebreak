import { renderHomePage } from './presentation/pages/homepage.js';

const app = document.getElementById('app');
app.innerHTML = ''; // Clean previous content
app.appendChild(renderHomePage());
