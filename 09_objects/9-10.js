// 9.10 Тренажёр «Задача 1»

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

const getCar = (carName) => {
  const keys = Object.keys(cars);

  return keys.includes(carName)
    ? console.log(cars[carName])
    : console.log("Авто не найдено");
};
