import { isEscapeKey } from './util.js';
import { onDocumentKeydown } from './form.js';

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '1';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '20px';
  alertContainer.style.lineHeight = '20px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);
};

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const successFragment = document.createDocumentFragment();
const bodyElement = document.querySelector('body');

const openUploadSuccess = () => {
  const successElement = successTemplate.cloneNode(true);
  document.addEventListener('keydown', onDocumentWithUploadSuccessClickAndKeydown);
  document.addEventListener('click', onDocumentWithUploadSuccessClickAndKeydown);
  successFragment.append(successElement);
  bodyElement.append(successFragment);
};


const closeUploadSuccess = () => {
  document.querySelector('.success').remove();
  document.removeEventListener('keydown', onDocumentWithUploadSuccessClickAndKeydown);
  document.removeEventListener('click', onDocumentWithUploadSuccessClickAndKeydown);
};

const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const errorFragment = document.createDocumentFragment();

const openUploadError = () => {
  const errorElement = errorTemplate.cloneNode(true);
  document.addEventListener('keydown', onDocumentWithUploadErrorClickAndKeydown);
  document.addEventListener('click', onDocumentWithUploadErrorClickAndKeydown);
  document.removeEventListener('keydown', onDocumentKeydown);
  errorFragment.append(errorElement);
  bodyElement.append(errorFragment);
};

const closeUploadError = () => {
  document.querySelector('.error').remove();
  document.removeEventListener('keydown', onDocumentWithUploadErrorClickAndKeydown);
  document.removeEventListener('click', onDocumentWithUploadErrorClickAndKeydown);
  document.addEventListener('keydown', onDocumentKeydown);
};

function onDocumentWithUploadSuccessClickAndKeydown(evt) {
  if (isEscapeKey(evt) || evt.target.className === 'success' || evt.target.className === 'success__button') {
    evt.preventDefault();
    closeUploadSuccess();
  }
}

function onDocumentWithUploadErrorClickAndKeydown(evt) {
  if (isEscapeKey(evt) || evt.target.className === 'error' || evt.target.className === 'error__button') {
    evt.preventDefault();
    closeUploadError();
  }
}

export {openUploadSuccess, openUploadError, showAlert};
