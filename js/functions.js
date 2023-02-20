// Функция для проверки длины строки
const formValidation = (string, n) => string.length === n;
formValidation();

// Функция для проверки, является ли строка палиндромом.
const checkPalindrome = (string) => {
  const normalStr = string.toLowerCase().split(' ').join('');
  const reverseStr = normalStr.split('').reverse().join('');
  return normalStr === reverseStr;
};
checkPalindrome();

// Функция, которая принимает строку, извлекает содержащиеся в
// ней цифры от 0 до 9 и возвращает их в виде целого положительного числа.
const returnNumber = (string) => {
  const numberToString = String(string).split('').join('');
  let result = '';
  for (let i = 0; i < numberToString.length; i++) {
    if (!isNaN(parseInt(numberToString[i], 10))) {
      result = result + parseInt(numberToString[i], 10);
    }
  }
  return result;
};
returnNumber();

// Функция, которая принимает три параметра: исходную строку,
// минимальную длину и строку с добавочными символами — и возвращает исходную строку,
// дополненную указанными символами до заданной длины.
const generationAddress = (strStart, minLen, strPad) => {
  let res = '';
  const diffLen = minLen - strStart.length;
  if (strStart.length >= minLen) {
    return strStart;
  }else if (strStart.length < minLen) {
    res = strPad.substring(0, diffLen) + strStart;
    while (res.length < minLen) {
      res = strPad.substring(0, minLen - res.length) + res;
    }
    return res;
  }
};
generationAddress();
