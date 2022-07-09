import 'normalize.css';
import 'Styles/main';
import styles from 'Styles/app.module';
import happy from 'Images/happy.jpg';

const APP_CONTAINER = document.getElementById('app-container');
const DOC_FRAGMENT = document.createDocumentFragment();

const title = document.createElement('h1');
title.innerHTML = 'English for Kids';
DOC_FRAGMENT.appendChild(title);

console.log(APP_CONTAINER);

const happyChildrenImg = document.createElement('img');
happyChildrenImg.src = happy;
DOC_FRAGMENT.appendChild(happyChildrenImg);

const btn = document.createElement('button');
btn.classList.add(styles.btn);
btn.innerHTML = 'Start';
DOC_FRAGMENT.appendChild(btn);

APP_CONTAINER.appendChild(DOC_FRAGMENT);
