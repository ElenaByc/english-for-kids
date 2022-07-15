import styles from 'Styles/sidebar.module';
import { createElement } from './elements-utils';
import toggleSideBar from './events-utils';
import CATEGORIES from './categories';

function createMenuItem(name) {
  const menuItem = createElement('li', styles['menu-item'], name);
  menuItem.addEventListener('click', toggleSideBar);
  return menuItem;
}

export default function createSideBarMenu() {
  const aside = createElement('aside', styles.sidebar);
  const nav = createElement('nav', styles.nav);
  const list = createElement('ul', styles['menu-list']);
  const mainPageLink = createElement('li', styles['menu-item'], 'Main Page');
  mainPageLink.addEventListener('click', toggleSideBar);
  list.appendChild(mainPageLink);
  CATEGORIES.forEach((el) => list.appendChild(createMenuItem(el.name)));
  nav.appendChild(list);
  aside.appendChild(nav);
  return aside;
}
