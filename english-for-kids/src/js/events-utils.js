import headerStyles from 'Styles/header.module';
import sidebarStyles from 'Styles/sidebar.module';
import mainStyles from 'Styles/main-page.module';
import categoryStyles from 'Styles/category-page.module';

export function toggleSidebar() {
  const sidebar = document.getElementsByClassName(sidebarStyles.sidebar)[0];
  const burgerBtn = document.getElementsByClassName(headerStyles.burger)[0];
  const overlay = document.getElementsByClassName('overlay')[0];
  sidebar.classList.toggle(sidebarStyles.open);
  burgerBtn.classList.toggle(headerStyles.open);
  overlay.classList.toggle('open');
}

export function setActiveItem(event) {
  const prevActiveItem = document.getElementsByClassName(
    sidebarStyles.active,
  )[0];
  prevActiveItem.classList.remove(sidebarStyles.active);

  let activeItemId;
  if (event.target.tagName === 'LI') {
    activeItemId = event.target.id;
  } else {
    activeItemId = event.target.closest('.card').id;
    activeItemId = Number(activeItemId.slice(-1));
  }
  const newActiveItem = document.getElementById(activeItemId);
  newActiveItem.classList.add(sidebarStyles.active);
}

export function displayMainPage() {
  const mainSection = document.getElementsByClassName(mainStyles.main)[0];
  if (mainSection.classList.contains('hide')) {
    const categorySection = document.getElementsByClassName(
      categoryStyles.category,
    )[0];
    categorySection.innerHTML = '';
    mainSection.classList.remove('hide');
  }
}
