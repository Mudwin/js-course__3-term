// 9.12 Тренажёр «Задача 3»

const createCar = (newCar) => {
  const baseCar = {
    wheels: 4,
    doors: 4,
    isStarted: false,
  };

  return { ...baseCar, ...newCar };
};
