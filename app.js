const infoBtn = document.querySelector("#openInfoCard");
const settingBtn = document.querySelector("#openModal");
const closeBtn = document.querySelector("#closeInfoCard");
const applyBtn = document.querySelector("#settings-apply");
const infoCard = document.querySelector("#infoCard");
const modal = document.querySelector("#modal");
const playBtn = document.querySelector("#play-button");
const container = document.querySelector(".container");
const easyGame = document.querySelector(".easy-game");
const mediumGame = document.querySelector(".medium-game");
const hardGame = document.querySelector(".hard-game");
const easy = document.querySelector("#easy");
const medium = document.querySelector("#medium");
const hard = document.querySelector("#hard");
const smallCardContainer = document.querySelector(".sm-card-container");
const mediumCardContainer = document.querySelector(".md-card-container");
const largeCardContainer = document.querySelector(".lg-card-container");

infoBtn.addEventListener("click", openInfoCard);
settingBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeInfoCard);
applyBtn.addEventListener("click", closeModal);
playBtn.addEventListener("click", () => {
  if (easy.checked) {
    startEasyGame();
    for (i = 0; i < images1.length; i++) {
      cards[i].src = images1[i].frontFace;
    }
    setTimeout(() => {
      for (i = 0; i < images1.length; i++) {
        cards[i].src = images1[i].backFace;
      }
    }, 4000);
  } else if (medium.checked) {
    startMediumGame();
  } else if (hard.checked) {
    startHardGame();
  }
});
function openModal() {
  modal.style.display = "block";
}
function closeModal() {
  modal.style.display = "none";
}
function openInfoCard() {
  infoCard.style.display = "block";
}
function closeInfoCard() {
  infoCard.style.display = "none";
}
function startEasyGame() {
  container.style.display = "none";
  easyGame.style.display = "block";
}
function startMediumGame() {
  container.style.display = "none";
  mediumGame.style.display = "block";
}
function startHardGame() {
  container.style.display = "none";
  hardGame.style.display = "block";
}
