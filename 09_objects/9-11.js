// 9.11 Тренажёр «Задача 2»

const cars = {
  mercedes: {
    name: "Mercedes",
    doors: 4,
    wheel: 4,
    hp: 220,
    isStarted: false,
  },
  bmw: {
    name: "BMW",
    doors: 4,
    wheel: 4,
    hp: 330,
    isStarted: false,
  },
  audi: {
    name: "AUDI",
    doors: 4,
    wheel: 4,
    hp: 267,
    isStarted: false,
  },
};

const getName = () => {
  for (let key in cars) {
    console.log(key);
  }
};
