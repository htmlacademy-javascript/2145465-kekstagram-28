import {
  DEFAULT_SCALE_IMAGE,
  EFFECTS_DATA,
  STEP_SCALE_IMAGE,
} from './variables.js';

const imgControlSmallerNode = document.querySelector(
  '.scale__control--smaller'
);
const imgControlBiggerNode = document.querySelector('.scale__control--bigger');
const imgControlValueNode = document.querySelector('.scale__control--value');

const imgNode = document.querySelector('.img-upload__preview img');
const effectsRadioNodes = document.querySelectorAll('.effects__radio');
const imageUploadForm = document.querySelector('#upload-select-image');

const sliderNode = document.querySelector('.effect-level__slider');
const sliderDataNode = document.querySelector('.effect-level__value');

const sliderEffectValueNode = document.querySelector(
  '.img-upload__effect-level'
);

const clearEnterData = () => {
  imgControlValueNode.value = `${DEFAULT_SCALE_IMAGE}%`;
  imgNode.style = 'transform: scale(1)';

  imageUploadForm.reset();
  imgNode.style.filter = 'none';
  imgNode.src = '';
};

noUiSlider.create(sliderNode, {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value;
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

imgControlSmallerNode.addEventListener('click', () => {
  let value = parseInt(imgControlValueNode.value, 10);
  value -= STEP_SCALE_IMAGE;
  if (value <= STEP_SCALE_IMAGE) {
    value = STEP_SCALE_IMAGE;
  }
  imgNode.style.transform = `scale(${value / 100})`;
  imgControlValueNode.value = `${value}%`;
});

imgControlBiggerNode.addEventListener('click', () => {
  let value = parseInt(imgControlValueNode.value, 10);
  value += STEP_SCALE_IMAGE;
  if (value >= 100) {
    value = 100;
  }
  imgNode.style.transform = `scale(${value / 100})`;
  imgControlValueNode.value = `${value}%`;
});

effectsRadioNodes.forEach((elem) => {
  if (elem.checked && elem.id === 'effect-none') {
    sliderEffectValueNode.classList.add('hidden');
  }
  elem.addEventListener('change', () => {
    for (let i = 0; i < effectsRadioNodes.length; i++) {
      const iterableEffectName = effectsRadioNodes[i].id.replace('effect-', '');
      imgNode.classList.remove(`effects__preview--${iterableEffectName}`);
    }
    const currentEffectName = elem.id.replace('effect-', '');
    if (elem.checked) {
      if (elem.id !== 'effect-none') {
        sliderEffectValueNode.classList.remove('hidden');
      }
      imgNode.classList.add(`effects__preview--${currentEffectName}`);
      effectsRadioNodes[0].value = currentEffectName;
      if (currentEffectName === 'chrome') {
        sliderNode.noUiSlider.updateOptions({
          range: {
            min: 0,
            max: 1,
          },
          start: 1,
          step: 0.1,
        });
      } else if (currentEffectName === 'sepia') {
        sliderNode.noUiSlider.updateOptions({
          range: {
            min: 0,
            max: 1,
          },
          start: 1,
          step: 0.1,
        });
      } else if (currentEffectName === 'marvin') {
        sliderNode.noUiSlider.updateOptions({
          range: {
            min: 0,
            max: 100,
          },
          start: 100,
          step: 1,
        });
      } else if (currentEffectName === 'phobos') {
        sliderNode.noUiSlider.updateOptions({
          range: {
            min: 0,
            max: 3,
          },
          start: 3,
          step: 0.1,
        });
      } else if (currentEffectName === 'heat') {
        sliderNode.noUiSlider.updateOptions({
          range: {
            min: 1,
            max: 3,
          },
          start: 3,
          step: 0.1,
        });
      } else {
        imgNode.style.removeProperty('filter');
        document.querySelector('.effect-level__value').value = '';
        sliderEffectValueNode.classList.add('hidden');
      }
    }
  });
});

sliderNode.noUiSlider.on('update', () => {
  for (let i = 0; i < Object.keys(EFFECTS_DATA).length; i++) {
    const filterKey = Object.keys(EFFECTS_DATA)[i];
    sliderDataNode.value = sliderNode.noUiSlider.get();

    if (effectsRadioNodes[0].value === filterKey && filterKey !== 'none') {
      imgNode.style.filter = `${EFFECTS_DATA[filterKey].filter}(${sliderDataNode.value}${EFFECTS_DATA[filterKey].measurement})`;
    }
  }
});

export {clearEnterData};
