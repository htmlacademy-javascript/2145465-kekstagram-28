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

const TEXT_MESAGES = [
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

const USER_AVATAR_MIN_ID = 1;
const USER_AVATAR_MAX_ID = 6;
const POST_MIN_LIKES = 15;
const POST_MAX_LIKES = 200;
const COMMENT_MIN_COUNT = 1;
const COMMENT_MAX_COUNT = 5;
const COMMENT_ID_START = 10;
const COMMENT_ID_STEP = 5;


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

const generateId = function (start = 0, maxStep = 1) {
  let id = start;
  const minStep = 1;
  return () => {
    id += getRandomInteger(minStep, maxStep);
    return id;
  };
};

const addCommentMessage = function () {
  const commentMinCount = 1;
  const commentMaxCount = 2;
  const commentCount = getRandomInteger(commentMinCount, commentMaxCount);
  return shuffleArr(TEXT_MESAGES).slice(0, commentCount).join(' ');
};

const getCommentNextId = generateId (COMMENT_ID_START, COMMENT_ID_STEP);

function addComment() {
  return {
    id: getCommentNextId(),
    avatar: `img/avatar-${getRandomInteger(USER_AVATAR_MIN_ID, USER_AVATAR_MAX_ID)}.svg`,
    message: addCommentMessage(),
    name: getArrRandomElem(COMMENT_AUTHOR_NAMES),
  };
}

const addDescription = () => {
  const descriptionCount = 1;
  return shuffleArr(TEXT_DESCRIPTION).slice(0, descriptionCount).join(' ');
};

const addPost = function (_, index) {
  const id = index + 1;
  return {
    id,
    url: `photos/${id}.jpg`,
    description: addDescription(),
    likes: getRandomInteger(POST_MIN_LIKES, POST_MAX_LIKES),
    comments: Array.from({ length: getRandomInteger(COMMENT_MIN_COUNT, COMMENT_MAX_COUNT) }, addComment),
  };
};

const posts = () => Array.from({ length: 25 }, addPost);
posts();
