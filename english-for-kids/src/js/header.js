import styles from 'Styles/header.module';

function createrSwitcher() {
  const switcher = document.createElement('label');
  switcher.classList.add(styles.switcher);
  return switcher;
}

function createBurgerBtn() {
  const burgerBtn = document.createElement('div');
  burgerBtn.classList.add(styles.burger);
  const line1 = document.createElement('span');
  line1.classList.add(styles.line);
  burgerBtn.append(line1);
  const line2 = document.createElement('span');
  line2.classList.add(styles.line);
  burgerBtn.append(line2);
  const line3 = document.createElement('span');
  line3.classList.add(styles.line);
  burgerBtn.append(line3);
  return burgerBtn;
}

export default function createHeader() {
  const header = document.createElement('header');
  header.classList.add(styles.header);
  const burgerBtn = createBurgerBtn();
  header.append(burgerBtn);
  const switcher = createrSwitcher();
  header.append(switcher);

  return header;
}
