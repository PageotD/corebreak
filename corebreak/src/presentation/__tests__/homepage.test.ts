// src/presentation/__tests__/homepage.test.js
import { renderHomePage } from '../pages/homepage';
import { test, expect } from 'vitest';

test('homepage should render a title, a container, and a button container', () => {
    const page = renderHomePage();
    expect(page.querySelector('h1')).not.toBeNull();
    expect(page.classList.contains('homepage-container')).toBe(true);
    expect(page.querySelector('.homepage-button-container')).not.toBeNull();
    expect(page.querySelector('.homepage-button-container .button-group')).not.toBeNull();
});


test('homepage should have Play, Rules, and Credits buttons', () => {
    const page = renderHomePage();
    expect(page.querySelector('#play')).not.toBeNull();
    expect(page.querySelector('#rules')).not.toBeNull();
    expect(page.querySelector('#credits')).not.toBeNull();
});
