const sliderContainer = document.querySelector(".slider-container");
const sliderBlocks = document.querySelectorAll(".slider-block");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

const bottomSliderContainer = document.querySelector(
  ".bottom-slider-container"
);
const rewardSlider = document.querySelectorAll(".reward-slider");
const bottomNextBtn = document.querySelector(".next-btn-bottom");
const bottomPrevBtn = document.querySelector(".prev-btn-bottom");

let currentIndex = 0;
let sliderBlockSize = sliderBlocks[0].offsetWidth;
let bottomSliderBlockSize = rewardSlider[0].offsetWidth;

function handleSlider(container, size) {
  container.style.transform = `translateX(-${currentIndex * (size + 29)}px)`;
}

nextBtn.addEventListener("click", () => {
  if (currentIndex < sliderBlocks.length - 3) {
    currentIndex++;
    handleSlider(sliderContainer, sliderBlockSize);
  }
});
prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    handleSlider(sliderContainer, sliderBlockSize);
  }
});

bottomNextBtn.addEventListener("click", () => {
  if (currentIndex < rewardSlider.length - 3) {
    currentIndex++;
    handleSlider(bottomSliderContainer, bottomSliderBlockSize);
  }
});

bottomPrevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    handleSlider(bottomSliderContainer, bottomSliderBlockSize);
  }
});
