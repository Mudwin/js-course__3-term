const progress = (time) => {
  const duration = Math.max(time, 2);

  const progressBar = document.querySelector("#progress-bar");
  const timer = document.querySelector(".timer");

  progressBar.style.transition = `transform ${duration}s linear`;

  setTimeout(() => {
    progressBar.style.transform = "scaleX(1)";
  });

  let secondPassed = 0;
  const interval = setInterval(() => {
    secondPassed++;

    if (timer) {
      timer.textContent = `${secondPassed} с.`;
    }

    if (secondPassed >= duration) {
      clearInterval(interval);
    }
  }, 1000);
};

progress(5);
