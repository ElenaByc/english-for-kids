import sidebarStyles from 'Styles/sidebar.module';
import headerStyles from 'Styles/header.module';

export default function toggleSideBar() {
  const sidebar = document.getElementsByClassName(sidebarStyles.sidebar)[0];
  const burgerBtn = document.getElementsByClassName(headerStyles.burger)[0];
  const shadow = document.getElementsByClassName('shadow')[0];
  sidebar.classList.toggle(sidebarStyles.open);
  burgerBtn.classList.toggle(headerStyles.open);
  shadow.classList.toggle('open');
  document.body.classList.toggle('scrollblock');
}
