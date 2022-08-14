import styles from 'Styles/sidebar.module';
import { createElement } from './elements-utils';
import { toggleSidebar, setActiveItem, displayMainPage } from './events-utils';
import createCategorySection from './category-page';
import CATEGORIES from './categories';

function createMenuItem(name, id) {
  const menuItem = createElement('li', styles['menu-item'], name);
  menuItem.setAttribute('id', id);
  menuItem.addEventListener('click', toggleSidebar);
  menuItem.addEventListener('click', setActiveItem);
  menuItem.addEventListener('click', createCategorySection);
  return menuItem;
}

function calcSidebarWidth() {
  let width = window.innerWidth;
  if (width > 1440) {
    width = (width - 1440) / 2 + 360;
  } else if (width > 768) {
    width = 360;
  } else {
    width = 320;
  }
  width += 'px';
  return width;
}

export default function createSidebarMenu() {
  const sidebar = createElement('div', styles.sidebar);
  sidebar.style.width = calcSidebarWidth();
  const nav = createElement('nav', styles.nav);
  const list = createElement('ul', styles['menu-list']);
  const mainPageLink = createElement(
    'li',
    [styles.active, styles['menu-item']],
    'Main Page',
  );
  mainPageLink.setAttribute('id', 0);
  mainPageLink.addEventListener('click', toggleSidebar);
  mainPageLink.addEventListener('click', setActiveItem);
  mainPageLink.addEventListener('click', displayMainPage);
  list.appendChild(mainPageLink);
  CATEGORIES.forEach((el) => list.appendChild(createMenuItem(el.name, el.id)));
  nav.appendChild(list);
  sidebar.appendChild(nav);
  return sidebar;
}
