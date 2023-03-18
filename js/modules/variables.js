const COMMENT_AUTHOR_NAMES = [
  'Илья',
  'Михаил',
  'Елена',
  'Софья',
  'Татьяна',
  'Кекс',
  'Рудольф',
  'Александр',
  'Саня',
  'Илюха',
  'Денис',
  'Даниил',
  'Иван',
  'Ольга',
  'Алексей',
  'Инокентий',
];

const TEXT_MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const TEXT_DESCRIPTION = [
  'Горы Кавказа',
  'Фотография меня с котом',
  'Подскользнулся))',
  'Красивые водопады',
  'Сердце замерло',
  'Красота',
  'На чилле, на расслпбоне',
  'Работаем братья',
  'Санечка снимает',
  'Ой',
  'Милый котик',
  'Гроза района',
  'Папина дочка',
  'Дома',
  'С собакой на прогулке',
  ')))))',
  'Вид из окна',
  'Как-то так',
  '...',
  'На концерте'
];


const EFFECTS_DATA = {
  'chrome': {
    filter: 'grayscale',
    measurement: '',
  },
  'sepia': {
    filter: 'sepia',
    measurement: '',
  },
  'marvin': {
    filter: 'invert',
    measurement: '%',
  },
  'phobos': {
    filter: 'blur',
    measurement: 'px',
  },
  'heat': {
    filter: 'brightness',
    measurement: '',
  },
  'none': {
    filter: '',
    measurement: ''
  }
};

const USER_AVATAR_MIN_ID = 1;
const USER_AVATAR_MAX_ID = 6;
const POST_MIN_LIKES = 15;
const POST_MAX_LIKES = 200;
const COMMENT_MIN_COUNT = 1;
const COMMENT_MAX_COUNT = 15;
const COMMENT_ID_START = 10;
const COMMENT_ID_STEP = 5;
const POSTS_PHOTO_COUNT = 25;
const COMMENT_NUMBERS_TO_SHOW = 5;
const HASHTAG_REGEX = /#[a-zа-яё0-9]{1,19}$/i;
const MAX_HASHTAG_COUNT = 5;
const DEFAULT_SCALE_IMAGE = 100;
const STEP_SCALE_IMAGE = 25;


export {COMMENT_AUTHOR_NAMES, TEXT_MESSAGES, TEXT_DESCRIPTION, USER_AVATAR_MIN_ID, USER_AVATAR_MAX_ID, POST_MIN_LIKES, POST_MAX_LIKES, COMMENT_MIN_COUNT, COMMENT_MAX_COUNT, COMMENT_ID_START, COMMENT_ID_STEP, POSTS_PHOTO_COUNT, COMMENT_NUMBERS_TO_SHOW, HASHTAG_REGEX, MAX_HASHTAG_COUNT, DEFAULT_SCALE_IMAGE, EFFECTS_DATA, STEP_SCALE_IMAGE};
