// 3.11 Тренажёр «Задача 2»

// let carPower = 110;

if (carPower < 100) {
  console.log(`Сумма налога: ${carPower * 12}`);
} else if (100 < carPower && carPower < 125) {
  console.log(`Сумма налога: ${carPower * 25}`);
} else if (125 < carPower && carPower < 150) {
  console.log(`Сумма налога: ${carPower * 35}`);
} else if (150 < carPower && carPower < 175) {
  console.log(`Сумма налога: ${carPower * 45}`);
} else if (175 < carPower && carPower < 200) {
  console.log(`Сумма налога: ${carPower * 50}`);
} else if (200 < carPower && carPower < 225) {
  console.log(`Сумма налога: ${carPower * 65}`);
} else if (225 < carPower && carPower < 250) {
  console.log(`Сумма налога: ${carPower * 75}`);
} else {
  console.log(`Сумма налога: ${carPower * 150}`);
}
