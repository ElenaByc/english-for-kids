import styles from 'Styles/header.module';

import { createElement, addNewElement } from './elements-utils';
import { toggleSidebar } from './events-utils';
import createSidebarMenu from './sidebar';

function createrSwitcher(appState) {
  const switcher = createElement('label', styles.switcher);
  const input = createElement('input', styles.input);
  input.setAttribute('type', 'checkbox');
  input.addEventListener('change', () => {
    const cards = document.getElementsByClassName('card');
    const startBtn = document.getElementsByTagName('button')[0];
    const header = document.getElementsByClassName(styles.header)[0];
    document.body.classList.toggle('play');
    Array.from(cards).forEach((card) => card.classList.toggle('play'));
    header.classList.toggle(styles.play);
    startBtn.classList.toggle('play');
    appState.togglePlay();
  });
  switcher.append(input);
  addNewElement(switcher, 'span', [styles.label, styles.train], 'Train');
  addNewElement(switcher, 'span', [styles.label, styles.play], 'Play');
  addNewElement(switcher, 'span', styles.handle);
  return switcher;
}

function createTitle() {
  const title = createElement('h1', styles['app-title']);
  addNewElement(title, 'span', [], 'English&nbsp;');
  addNewElement(title, 'span', [], 'for&nbsp;');
  addNewElement(title, 'span', [], 'kids');
  return title;
}

function createBurgerBtn() {
  const burgerBtn = createElement('div', styles.burger);
  for (let i = 0; i < 3; i += 1) {
    addNewElement(burgerBtn, 'span', styles.line);
  }
  burgerBtn.addEventListener('click', toggleSidebar);
  return burgerBtn;
}

function createOverlay() {
  const overlay = createElement('div', 'overlay');
  overlay.addEventListener('click', toggleSidebar);
  return overlay;
}

export default function createHeader(appState) {
  const header = createElement('header', styles.header);
  const container = createElement('div', styles.container);
  container.appendChild(createSidebarMenu());
  container.appendChild(createOverlay());
  container.appendChild(createBurgerBtn());
  container.appendChild(createTitle());
  container.appendChild(createrSwitcher(appState));
  header.appendChild(container);
  return header;
}
