// src/presentation/__tests__/homepage.test.js
import { renderHomePage } from '../pages/homepage';
import { test, expect } from 'vitest';

test('homepage should render a title and a container', () => {
    const page = renderHomePage();
    expect(page.querySelector('h1')).not.toBeNull();
    expect(page.classList.contains('homepage-container')).toBe(true);
});

test('homepage should have Play, Rules, and Credits buttons', () => {
    const page = renderHomePage();
    expect(page.querySelector('#play')).not.toBeNull();
    expect(page.querySelector('#rules')).not.toBeNull();
    expect(page.querySelector('#credits')).not.toBeNull();
});
