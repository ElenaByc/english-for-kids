import "../styles/normalize.css";
import "../styles/main.scss";
import happy from "../assets/images/happy.jpg";

const APP_CONTAINER = document.getElementById("app-container");
const DOC_FRAGMENT = document.createDocumentFragment();

console.log(APP_CONTAINER);

const title = document.createElement("h1");
title.innerHTML = "English for Kids";
DOC_FRAGMENT.appendChild(title);

const happyChildrenImg = document.createElement("img");
happyChildrenImg.src = happy;
DOC_FRAGMENT.appendChild(happyChildrenImg);

const btn = document.createElement("button");
btn.classList.add("btn");
btn.innerHTML = "Start";
DOC_FRAGMENT.appendChild(btn);

APP_CONTAINER.appendChild(DOC_FRAGMENT);
