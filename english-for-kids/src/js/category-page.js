import styles from 'Styles/category-page.module';
import headerStyles from 'Styles/header.module';
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

function playAudio(event) {
  const word = event.target.closest('.card').id;
  const sound = new Audio(CARDS.find((el) => el.word === word).audio);
  sound.play();
}

function flipCard(event) {
  const clickedCard = event.target.closest('.card');
  clickedCard.classList.add(styles.flip);
}

function flipCardBack(event) {
  const card = event.target.closest('.card');
  card.classList.remove(styles.flip);
}

function createWordCard(word, translation, image, isPlayMode) {
  const card = createElement('div', ['card', styles.card]);
  if (isPlayMode) {
    card.classList.add('play');
  }
  card.setAttribute('id', word);
  const frontFace = createElement('div', styles['front-face']);
  addNewImageElement(frontFace, 'div', styles['card-img'], image);
  const div = createElement('div', styles['train-container']);
  const audio = createElement('div', styles.icon);
  audio.innerHTML = `${
    icon(faVolumeHigh, {
      styles: { color: '#f4f4f4' },
      transform: {
        size: 20,
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
        size: 20,
      },
    }).html
  }`;
  rotate.addEventListener('click', flipCard);
  div.appendChild(rotate);
  frontFace.appendChild(div);
  card.appendChild(frontFace);
  const backFace = createElement('div', styles['back-face']);
  addNewElement(backFace, 'h3', styles['card-title'], translation);
  card.appendChild(backFace);
  card.addEventListener('mouseout', flipCardBack);
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
  const isPlayMode = document.getElementsByClassName(headerStyles.input)[0]
    .checked;
  CARDS.filter((el) => el.categoryId === categoryId).forEach((el) =>
    container.appendChild(
      createWordCard(el.word, el.translation, el.image, isPlayMode),
    ),
  );
  categorySection.appendChild(container);
  const main = document.getElementsByClassName('main')[0];
  main.appendChild(categorySection);
}
