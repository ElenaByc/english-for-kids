import styles from 'Styles/header.module';

import { createElement, addNewElement } from './elements-utils';

function createrSwitcher() {
  const switcher = createElement('label', styles.switcher);
  const input = createElement('input', styles.input);
  input.setAttribute('type', 'checkbox');
  input.addEventListener('change', () => {
    const cards = document.getElementsByClassName('card');
    document.body.classList.toggle('play');
    Array.from(cards).forEach((card) => card.classList.toggle('play'));
  });
  switcher.append(input);
  addNewElement(switcher, 'span', [styles.label, styles.train], 'Train');
  addNewElement(switcher, 'span', [styles.label, styles.play], 'Play');
  addNewElement(switcher, 'span', styles.handle);
  // switcher.addEventListener('click', () => {
  //   if (document.getElementsByClassName(styles.input)[0].checked) {
  //     document.body.classList.add('play');
  //   } else {
  //     document.body.classList.remove('play');
  //   }
  // });
  return switcher;
}

function createTitle() {
  const title = createElement('h1', styles['app-title']);
  addNewElement(title, 'span', [], 'English&nbsp;');
  addNewElement(title, 'span', [], 'for&nbsp;');
  addNewElement(title, 'span', [], 'kids&nbsp;');
  return title;
}

function createBurgerBtn() {
  const burgerBtn = createElement('div', styles.burger);
  for (let i = 0; i < 3; i += 1) {
    addNewElement(burgerBtn, 'span', styles.line);
  }
  return burgerBtn;
}

export default function createHeader() {
  const header = createElement('header', styles.header);
  header.append(createBurgerBtn());
  header.append(createTitle());
  header.append(createrSwitcher());
  return header;
}
