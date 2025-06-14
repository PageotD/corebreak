// src/presentation/__tests__/homepage.test.js
import { HomePage } from '../pages/homepage';
import { test, expect } from 'vitest';

test('homepage should render a title, a container, a footer and a button container', () => {
    const page = new HomePage().render();
    expect(page.querySelector('h1')).not.toBeNull();
    expect(page.querySelector('footer')).not.toBeNull();
    expect(page.classList.contains('homepage-container')).toBe(true);
    expect(page.querySelector('.homepage-button-container')).not.toBeNull();
    expect(page.querySelector('.homepage-button-container .button-group')).not.toBeNull();
    expect(page.querySelector('#play')).not.toBeNull();
    expect(page.querySelector('#rules')).not.toBeNull();
    expect(page.querySelector('#ranking')).not.toBeNull();
    expect(page.querySelector('#connect')).not.toBeNull();
});


test('homepage should have Play, Rules, and Ranking buttons', () => {
    const page = new HomePage().render();
    expect(page.querySelector('#play')).not.toBeNull();
    expect(page.querySelector('#rules')).not.toBeNull();
    expect(page.querySelector('#ranking')).not.toBeNull();
    expect(page.querySelector('#connect')).not.toBeNull();
});
