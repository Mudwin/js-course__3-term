const miniImageElements = document.querySelectorAll(".mini-image");
const bigImageContainerElement = document.querySelector(".big-image");

const handleMiniImageClick = (e) => {
  bigImageContainerElement.innerHTML = "";
  let bigImage = document.createElement("img");
  bigImage.src = e.target.src;
  bigImageContainerElement.append(bigImage);
};

for (let i = 0; i < miniImageElements.length; i++) {
  miniImageElements[i].addEventListener("click", handleMiniImageClick);
}
