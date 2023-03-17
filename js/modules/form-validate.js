import { isEscapeKey } from './util.js';
import { MAX_HASHTAG_COUNT, HASHTAG_REGEX } from './variables.js';

const uploadFormNode = document.querySelector('.img-upload__form');
const fieldHashtagNode = uploadFormNode.querySelector('.text__hashtags');
const fieldDescrNode = uploadFormNode.querySelector('.text__description');

const hashtagPristine = new Pristine(uploadFormNode, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'form__item--invalid',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
  errorTextClass: 'text__hashtags-error',
});

const validateHashtag = (string) => HASHTAG_REGEX.test(string) || string === '';

const validateHashtagCount = (string) => string.split('').filter((tag) => tag === '#').length <= MAX_HASHTAG_COUNT;

const validateSimilarHashtags = (string) => {
  const stringArr = string.replaceAll(' ', '').toLowerCase().split('#');
  stringArr.shift();
  const unique = Array.from(new Set(stringArr));
  return stringArr.length === unique.length;
};

hashtagPristine.addValidator(
  fieldHashtagNode,
  validateHashtag,
  'Не верно введен хештег!'
);

hashtagPristine.addValidator(
  fieldHashtagNode,
  validateHashtagCount,
  'Максимальное количество хештегов: 5!'
);

hashtagPristine.addValidator(
  fieldHashtagNode,
  validateSimilarHashtags,
  'Одинаковые хештеги!'
);

uploadFormNode.addEventListener('sumbit', () => {
  hashtagPristine.validate();
});

fieldHashtagNode.addEventListener('keydown', (evt) => {
  if(isEscapeKey(evt)) {
    evt.stopPropagation();
    document.activeElement.blur();
  }
});

fieldDescrNode.addEventListener('keydown', (evt) => {
  if(isEscapeKey(evt)) {
    evt.stopPropagation();
    document.activeElement.blur();
  }
});
