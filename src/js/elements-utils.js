export function createElement(elemType, classNames, innerText) {
  const elem = document.createElement(elemType);
  if (Array.isArray(classNames)) {
    elem.classList.add(...classNames);
  } else {
    elem.classList.add(classNames);
  }
  if (innerText) {
    elem.innerHTML = innerText;
  }
  return elem;
}

export function createImageElement(elemType, classNames, image) {
  const elem = createElement(elemType, classNames);
  elem.style.backgroundImage = `url( ${image} )`;
  return elem;
}

export function addNewElement(parentElem, elemType, classNames, innerText) {
  parentElem.appendChild(createElement(elemType, classNames, innerText));
}

export function addNewImageElement(parentElem, elemType, classNames, image) {
  parentElem.appendChild(createImageElement(elemType, classNames, image));
}
