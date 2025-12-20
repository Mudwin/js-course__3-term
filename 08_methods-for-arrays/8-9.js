// 8.9 Тренажёр «Задача 2»

const users = [
  ["Alice", 25, true],
  ["Bob", 30, false],
  ["Charlie", 22, true],
  ["David", 27, true],
  ["Eve", 20, false],
];

const filterAndSortUsers = (users) => {
  return users
    .filter((user) => user[1] > 25 && user[2] == true)
    .sort((user1, user2) => user1[1] - user2[1])
    .map((user) => user[0]);
};
