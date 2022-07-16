import sidebarStyles from 'Styles/sidebar.module';
import headerStyles from 'Styles/header.module';

export default function toggleSidebar() {
  const sidebar = document.getElementsByClassName(sidebarStyles.sidebar)[0];
  const burgerBtn = document.getElementsByClassName(headerStyles.burger)[0];
  const overlay = document.getElementsByClassName('overlay')[0];
  sidebar.classList.toggle(sidebarStyles.open);
  burgerBtn.classList.toggle(headerStyles.open);
  overlay.classList.toggle('open');
  // document.body.classList.toggle('scrollblock');
}
