import styles from 'Styles/main-page.module';
import {
  createElement,
  addNewImageElement,
  addNewElement,
} from './elements-utils';
import CATEGORIES from './categories';

function createCategoryCard(id, name, image) {
  const card = createElement('div', ['card', styles.card]);
  card.setAttribute('id', `category${id}`);
  addNewImageElement(card, 'div', styles['card-img'], image);
  addNewElement(card, 'h3', styles['card-title'], name);
  return card;
}

export default function createMainSection() {
  const mainPage = createElement('section', ['section', styles.main]);
  addNewElement(mainPage, 'h2', [], 'Main Page');
  const container = createElement('div', styles['card-container']);
  CATEGORIES.forEach((el) =>
    container.appendChild(createCategoryCard(el.id, el.name, el.image)),
  );
  mainPage.appendChild(container);
  return mainPage;
}
