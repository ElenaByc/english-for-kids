import styles from 'Styles/category-page.module';
import mainStyles from 'Styles/main-page.module';

import {
  faVolumeHigh,
  faArrowsRotate,
} from '@fortawesome/free-solid-svg-icons';
import { icon } from '@fortawesome/fontawesome-svg-core';

import {
  createElement,
  addNewImageElement,
  addNewElement,
} from './elements-utils';
import CARDS from './cards';
import CATEGORIES from './categories';

function playAudio() {
  console.log('Audio!');
}

function rotateCard() {
  console.log('Rotate!');
}

function createWordCard(id, word, image) {
  const card = createElement('div', ['card', styles.card]);
  card.setAttribute('id', `card${id}`);
  addNewImageElement(card, 'div', styles['card-img'], image);
  const div = createElement('div', styles['card-bottom']);
  const audio = createElement('div', styles.icon);
  audio.innerHTML = `${
    icon(faVolumeHigh, {
      styles: { color: '#f4f4f4' },
      transform: {
        size: 24,
      },
    }).html
  }`;
  audio.addEventListener('click', playAudio);
  div.appendChild(audio);
  addNewElement(div, 'h3', styles['card-title'], word);
  const rotate = createElement('div', styles.icon);
  rotate.innerHTML = `${
    icon(faArrowsRotate, {
      styles: { color: '#f4f4f4' },
      transform: {
        size: 24,
      },
    }).html
  }`;
  rotate.addEventListener('click', rotateCard);
  div.appendChild(rotate);
  card.appendChild(div);
  return card;
}

export default function createCategorySection(event) {
  const mainSection = document.getElementsByClassName(mainStyles.main)[0];
  let categorySection = document.getElementsByClassName(styles.category)[0];
  if (mainSection.classList.contains('hide')) {
    categorySection.innerHTML = '';
  } else {
    mainSection.classList.add('hide');
    if (!categorySection) {
      categorySection = createElement('section', ['section', styles.category]);
    }
  }
  let categoryId;
  if (event.target.tagName === 'LI') {
    categoryId = Number(event.target.id);
  } else {
    categoryId = event.target.closest('.card').id;
    categoryId = Number(categoryId.slice(-1));
  }
  addNewElement(
    categorySection,
    'h2',
    [],
    CATEGORIES.find((el) => el.id === categoryId).name,
  );
  const container = createElement('div', styles['card-container']);
  CARDS.filter((el) => el.categoryId === categoryId).forEach((el) =>
    container.appendChild(createWordCard(el.id, el.word, el.image)),
  );
  categorySection.appendChild(container);
  const main = document.getElementsByClassName('main')[0];
  main.appendChild(categorySection);
}
