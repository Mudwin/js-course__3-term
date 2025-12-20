// 8.8 Тренажёр «Задача 1»

const countVowels = (word) => {
  const vowels = ["e", "u", "i", "o", "a"];

  return word
    .toLowerCase()
    .split("")
    .filter((letter) => vowels.includes(letter)).length;
};
