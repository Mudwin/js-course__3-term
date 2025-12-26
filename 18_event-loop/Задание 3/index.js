const cats = ["cat1.jpg", "cat2.jpg", "cat3.jpg"];
const dogs = ["dog1.jpg", "dog2.jpg", "dog3.jpg"];

const progress = (time, progressBarId, timerId) => {
  return new Promise((resolve) => {
    const progressBar = document.querySelector(
      `#${progressBarId} .progress-bar`
    );
    const timer = document.querySelector(`#${timerId}`);
    const duration = Math.max(time, 2);

    progressBar.style.transition = `transform ${duration}s linear`;

    setTimeout(() => {
      progressBar.style.transform = "scaleX(1)";
    });

    let secondPassed = 0;
    const interval = setInterval(() => {
      secondPassed++;

      timer.textContent = `${secondPassed} с.`;

      if (secondPassed >= duration) {
        clearInterval(interval);
        resolve();
      }
    }, 1000);
  });
};

const fetchData = (data, delay) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, delay * 1000);
  });
};

const showImages = (images, containerId) => {
  const container = document.querySelector(`.${containerId}`);

  images.forEach((src) => {
    const image = document.createElement("img");
    image.src = `./img/${src}`;
    image.style.width = "400px";

    container.append(image);
  });
};

const getRandomTime = () => {
  return Math.floor(Math.random() * (5 - 2 + 1)) + 2;
};

const init = () => {
  const timeForCats = getRandomTime();
  const timeForDogs = getRandomTime();

  Promise.all([
    fetchData(cats, timeForCats),
    progress(timeForCats, "progress-bar-1", "timer-1"),
  ])
    .then(([catImages]) => {
      showImages(catImages, "cats-container");

      return Promise.all([
        fetchData(dogs, timeForDogs),
        progress(timeForDogs, "progress-bar-2", "timer-2"),
      ]);
    })
    .then(([dogImages]) => {
      showImages(dogImages, "dogs-container");
    });
};

window.onload = init;
