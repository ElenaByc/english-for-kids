import styles from 'Styles/header.module';

function createrSwitcher() {
  const switcher = document.createElement('label');
  switcher.classList.add(styles.switcher);
  const input = document.createElement('input');
  input.setAttribute('type', 'checkbox');
  input.classList.add(styles.input);
  switcher.append(input);
  const trainSpan = document.createElement('span');
  trainSpan.innerText = 'Train';
  trainSpan.classList.add(styles.label);
  trainSpan.classList.add(styles.train);
  switcher.append(trainSpan);
  const playSpan = document.createElement('span');
  playSpan.innerText = 'Play';
  playSpan.classList.add(styles.label);
  playSpan.classList.add(styles.play);
  switcher.append(playSpan);
  const handleSpan = document.createElement('span');
  handleSpan.classList.add(styles.handle);
  switcher.append(handleSpan);
  switcher.addEventListener('click', () => {
    const body = document.getElementsByTagName('body')[0];
    console.log(body.classList);
    if (body.classList.contains('play')) {
      console.log('remove class PLAY');
      body.classList.remove('play');
    } else {
      console.log('add class PLAY');
      body.classList.add('play');
    }
  });
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
