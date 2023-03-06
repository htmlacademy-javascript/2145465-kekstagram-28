import {COMMENT_ID_START, COMMENT_ID_STEP, TEXT_DESCRIPTION} from './variables.js';

const getRandomInteger = (min, max) => {
  if ((typeof min !== 'number' && typeof max !== 'number') || (min < 0 && max < 0)) {
    return null;
  }
  if (min < 0) {
    min = 0;
  }
  if (max < 0) {
    max = 0;
  }
  if (min === max) {
    return Math.floor(min);
  }
  if (min > max) {
    [min, max] = [max, min];
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(min + Math.random() * (max + 1 - min));
};

const getArrRandomElem = (arr) => arr[getRandomInteger(0, arr.length - 1)];

const shuffleArr = (arr) => [...arr].sort(() => Math.random() - 0.5);

const generateId = (start = 0, maxStep = 1) => {
  let id = start;
  const minStep = 1;
  return () => {
    id += getRandomInteger(minStep, maxStep);
    return id;
  };
};

const getCommentNextId = () => generateId(COMMENT_ID_START, COMMENT_ID_STEP);

const addDescription = () => {
  const descriptionCount = 1;
  return shuffleArr(TEXT_DESCRIPTION).slice(0, descriptionCount).join(' ');
};

const isEscapeKey = (evt) => evt.key === 'Escape';

export {getArrRandomElem, shuffleArr, generateId, getRandomInteger, getCommentNextId, addDescription, isEscapeKey};
