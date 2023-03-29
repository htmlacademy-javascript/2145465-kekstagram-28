const EFFECTS_DATA = {
  chrome: {
    filter: 'grayscale',
    measurement: '',
  },
  sepia: {
    filter: 'sepia',
    measurement: '',
  },
  marvin: {
    filter: 'invert',
    measurement: '%',
  },
  phobos: {
    filter: 'blur',
    measurement: 'px',
  },
  heat: {
    filter: 'brightness',
    measurement: '',
  },
  none: {
    filter: '',
    measurement: '',
  },
};
const COMMENT_NUMBERS_TO_SHOW = 5;
const HASHTAG_REGEX = /#[a-zа-яё0-9]{1,19}$/i;
const MAX_HASHTAG_COUNT = 5;
const DEFAULT_SCALE_IMAGE = 100;
const STEP_SCALE_IMAGE = 25;
const RANDOM_PICS_COUNT = 10;
const RERENDER_DELAY = 500;
const MESSAGE_UPLOAD_SHOW_TIME = 1000;

const FILE_FORMATS = ['jpg', 'jpeg', 'png'];

export {
  COMMENT_NUMBERS_TO_SHOW,
  HASHTAG_REGEX,
  MAX_HASHTAG_COUNT,
  DEFAULT_SCALE_IMAGE,
  EFFECTS_DATA,
  STEP_SCALE_IMAGE,
  RANDOM_PICS_COUNT,
  RERENDER_DELAY,
  FILE_FORMATS,
  MESSAGE_UPLOAD_SHOW_TIME,
};
