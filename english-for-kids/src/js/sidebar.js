import styles from 'Styles/sidebar.module';
import { createElement } from './elements-utils';
import toggleSidebar from './events-utils';
import CATEGORIES from './categories';

function createMenuItem(name) {
  const menuItem = createElement('li', styles['menu-item'], name);
  menuItem.addEventListener('click', toggleSidebar);
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
  const mainPageLink = createElement('li', styles['menu-item'], 'Main Page');
  mainPageLink.addEventListener('click', toggleSidebar);
  list.appendChild(mainPageLink);
  CATEGORIES.forEach((el) => list.appendChild(createMenuItem(el.name)));
  nav.appendChild(list);
  sidebar.appendChild(nav);
  return sidebar;
}
