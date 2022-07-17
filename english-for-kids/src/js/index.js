import 'normalize.css';
import 'Styles/global';

import { createElement } from './elements-utils';
import createHeader from './header';
import createMainSection from './main-page';
import AppState from './AppState';

const APP_CONTAINER = document.getElementById('app-container');
const DOC_FRAGMENT = document.createDocumentFragment();

const appState = new AppState();

DOC_FRAGMENT.appendChild(createHeader(appState));
const main = createElement('main', 'main');
main.append(createMainSection());
DOC_FRAGMENT.appendChild(main);
APP_CONTAINER.appendChild(DOC_FRAGMENT);
