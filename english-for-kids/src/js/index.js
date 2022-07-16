import 'normalize.css';
import 'Styles/global';

// import { faCirclePlay } from '@fortawesome/free-regular-svg-icons';
// import { icon } from '@fortawesome/fontawesome-svg-core';

import { createElement } from './elements-utils';
import createHeader from './header';

import createMainSection from './mainPage';

const APP_CONTAINER = document.getElementById('app-container');
const DOC_FRAGMENT = document.createDocumentFragment();

DOC_FRAGMENT.appendChild(createHeader());
const main = createElement('main', 'main');
main.append(createMainSection());
DOC_FRAGMENT.appendChild(main);
APP_CONTAINER.appendChild(DOC_FRAGMENT);

// const happyChildrenImg = document.createElement('img');
// happyChildrenImg.src = happy;
// main.appendChild(happyChildrenImg);

// const btn = document.createElement('button');
// btn.classList.add(styles.btn);
// btn.innerHTML = `${
//   icon(faCirclePlay, {
//     transform: {
//       size: 24,
//     },
//   }).html
// }&nbsp;&nbsp;&nbsp;Start`;
// main.appendChild(btn);
