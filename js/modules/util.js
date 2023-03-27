const ALERT_SHOW_TIME = 5000;
const MESSAGE_UPLOAD_SHOW_TIME = 1000;

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

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.down = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '30px 5px';
  alertContainer.style.fontSize = '40px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = '#fd2951';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

const showMessageUpload = () => {
  const messageContainer = document.createElement('div');
  messageContainer.style.zIndex = '100';
  messageContainer.style.position = 'absolute';
  messageContainer.style.left = '50%';
  messageContainer.style.transform = 'translateX(-50%)';
  messageContainer.style.top = '0';
  messageContainer.style.borderRadius = '50px';
  messageContainer.style.padding = '30px 30px';
  messageContainer.style.fontSize = '40px';
  messageContainer.style.textAlign = 'center';
  messageContainer.style.backgroundColor = '#4178f4c2';

  messageContainer.textContent = 'Фото успешно загружено!😸😸😸';

  document.body.append(messageContainer);

  setTimeout(() => {
    messageContainer.remove();
  }, MESSAGE_UPLOAD_SHOW_TIME);
};

function debounce (callback, timeoutDelay) {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

export { getRandomInteger, isEscapeKey, showAlert, showMessageUpload, debounce, shuffleArr};
