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

const isEscapeKey = (evt) => evt.key === 'Escape';

const shuffleArr = (arr) => [...arr].sort(() => Math.random() - 0.5);

function debounce (callback, timeoutDelay) {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

export { getRandomInteger, isEscapeKey, debounce, shuffleArr};
