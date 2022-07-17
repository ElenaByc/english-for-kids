import styles from 'Styles/category-page.module';
import mainStyles from 'Styles/main-page.module';
import {
  createElement,
  // addNewImageElement,
  addNewElement,
} from './elements-utils';
// import CARDS from './cards';
import CATEGORIES from './categories';

// function createWordCard(id, name, image) {
//   const card = createElement('div', ['card', styles.card]);
//   card.setAttribute('id', `card${id}`);
//   addNewImageElement(card, 'div', styles['card-img'], image);
//   addNewElement(card, 'h3', styles['card-title'], name);
//   return card;
// }

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
    categoryId = event.target.id;
  } else {
    categoryId = event.target.closest('.card').id;
    categoryId = Number(categoryId.slice(-1));
  }
  addNewElement(categorySection, 'h2', [], CATEGORIES[categoryId - 1].name);
  const container = createElement('div', styles['card-container']);
  // CARDS.forEach((el) =>
  //   container.appendChild(createWordCard(el.id, el.name, el.image)),
  // );
  categorySection.appendChild(container);
  const main = document.getElementsByClassName('main')[0];
  main.appendChild(categorySection);
}
