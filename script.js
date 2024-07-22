const scrollContainer = document.querySelector(".slider-container");
const scrollLeftButton = document.getElementById("prev-btn");
const scrollRightButton = document.getElementById("next-btn");
const sliderBlock = document.querySelectorAll(".slider-block");

const bottomSliderContainer = document.querySelector(
  ".bottom-slider-container"
);
const rewardSlider = document.querySelectorAll(".reward-slider");
const bottomNextBtn = document.querySelector(".next-btn-bottom");
const bottomPrevBtn = document.querySelector(".prev-btn-bottom");

const bottomSliderBlockSize = rewardSlider[0].offsetWidth;

const sliderBlockSize = sliderBlock[0].offsetWidth;

bottomNextBtn.addEventListener("click", () => {
  bottomSliderContainer.scrollBy({
    left: bottomSliderBlockSize + 30,
    behavior: "smooth",
  });
});

bottomPrevBtn.addEventListener("click", () => {
  bottomSliderContainer.scrollBy({
    left: -bottomSliderBlockSize - 30,
    behavior: "smooth",
  });
});
scrollLeftButton.addEventListener("click", () => {
  scrollContainer.scrollBy({ left: -sliderBlockSize - 15, behavior: "smooth" });
});

scrollRightButton.addEventListener("click", () => {
  scrollContainer.scrollBy({ left: sliderBlockSize + 15, behavior: "smooth" });
});

function dropDown(classList, arrowClass) {
  const dropDownButton = document.getElementById(classList);
  dropDownButton.classList.toggle("show");
  if (dropDownButton.classList.contains("show")) {
    document.getElementById(arrowClass).style.rotate = "-90deg";
  } else {
    document.getElementById(arrowClass).style.rotate = "+90deg";
  }
}

function dropdDownHeader(classList) {
  const dropDownBtn = document.getElementById(classList);
  if (!dropDownBtn.classList.contains("hidden-responsive")) {
    document
      .querySelector(".padding-main")
      .classList.remove("hidden-responsive");
    dropDownBtn.classList.toggle("hidden-responsive");
    document
      .querySelector(".responsive-policy")
      .classList.add("hidden-responsive");
    document
      .querySelector(".responsive-policy-container")
      .classList.add("hidden-responsive");
  } else {
    document.querySelector(".padding-main").classList.add("hidden-responsive");
    document.getElementById("header-arrow").classList.remove("hidden");
    document.getElementById("header-arrow-1").classList.remove("hidden");
    document.getElementById("header-arrow-2").classList.remove("hidden");
    document
      .querySelector(".responsive-policy")
      .classList.remove("hidden-responsive");
    document
      .querySelector(".responsive-policy-container")
      .classList.remove("hidden-responsive");
    dropDownBtn.classList.toggle("hidden-responsive");
  }
}
