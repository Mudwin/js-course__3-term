const cats = ["cat1.jpg", "cat2.jpg", "cat3.jpg"];
const dogs = ["dog1.jpg", "dog2.jpg", "dog3.jpg"];

const getRandomTime = () => {
  return Math.floor(Math.random() * (5000 - 2000 + 1)) + 2000;
};

const getCats = () => {
  return new Promise((resolve) => {
    const time = getRandomTime();

    setTimeout(() => {
      resolve(cats);
    }, time);
  });
};

const getDogs = () => {
  return new Promise((resolve) => {
    const time = getRandomTime();

    setTimeout(() => {
      resolve(dogs);
    }, time);
  });
};

const showAll = (images) => {
  const body = document.body;
  const row = document.createElement("div");
  row.style.marginBottom = "20px";

  images.forEach((src) => {
    const image = document.createElement("img");
    image.src = `./img/${src}`;
    image.style.width = "400px";

    row.append(image);
  });

  body.append(row);
};

getCats().then((data) => {
  showAll(data);
});

getDogs().then((data) => {
  showAll(data);
});
