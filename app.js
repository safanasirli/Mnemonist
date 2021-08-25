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

const images1 = [
  {
    frontFace: "./images/1.png",
    backFace: "./images/back-face1.png",
  },
  {
    frontFace: "./images/1.png",
    backFace: "./images/back-face1.png",
  },
  {
    frontFace: "./images/2.png",
    backFace: "./images/back-face1.png",
  },
  {
    frontFace: "./images/2.png",
    backFace: "./images/back-face1.png",
  },
  {
    frontFace: "./images/3.png",
    backFace: "./images/back-face1.png",
  },
  {
    frontFace: "./images/3.png",
    backFace: "./images/back-face1.png",
  },
  {
    frontFace: "./images/4.png",
    backFace: "./images/back-face1.png",
  },
  {
    frontFace: "./images/4.png",
    backFace: "./images/back-face1.png",
  },
  {
    frontFace: "./images/5.png",
    backFace: "./images/back-face1.png",
  },
  {
    frontFace: "./images/5.png",
    backFace: "./images/back-face1.png",
  },
];
const images2 = [
  {
    frontFace: "./images/1.png",
    backFace: "./images/back-face1.png",
  },
  {
    frontFace: "./images/1.png",
    backFace: "./images/back-face1.png",
  },
  {
    frontFace: "./images/2.png",
    backFace: "./images/back-face1.png",
  },
  {
    frontFace: "./images/2.png",
    backFace: "./images/back-face1.png",
  },
  {
    frontFace: "./images/3.png",
    backFace: "./images/back-face1.png",
  },
  {
    frontFace: "./images/3.png",
    backFace: "./images/back-face1.png",
  },
  {
    frontFace: "./images/4.png",
    backFace: "./images/back-face1.png",
  },
  {
    frontFace: "./images/4.png",
    backFace: "./images/back-face1.png",
  },
  {
    frontFace: "./images/5.png",
    backFace: "./images/back-face1.png",
  },
  {
    frontFace: "./images/5.png",
    backFace: "./images/back-face1.png",
  },
  {
    frontFace: "./images/6.png",
    backFace: "./images/back-face1.png",
  },
  {
    frontFace: "./images/6.png",
    backFace: "./images/back-face1.png",
  },
  {
    frontFace: "./images/7.png",
    backFace: "./images/back-face1.png",
  },
  {
    frontFace: "./images/7.png",
    backFace: "./images/back-face1.png",
  },
];
const images3 = [
  {
    frontFace: "./images/1.png",
    backFace: "./images/back-face1.png",
  },
  {
    frontFace: "./images/1.png",
    backFace: "./images/back-face1.png",
  },
  {
    frontFace: "./images/2.png",
    backFace: "./images/back-face1.png",
  },
  {
    frontFace: "./images/2.png",
    backFace: "./images/back-face1.png",
  },
  {
    frontFace: "./images/3.png",
    backFace: "./images/back-face1.png",
  },
  {
    frontFace: "./images/3.png",
    backFace: "./images/back-face1.png",
  },
  {
    frontFace: "./images/4.png",
    backFace: "./images/back-face1.png",
  },
  {
    frontFace: "./images/4.png",
    backFace: "./images/back-face1.png",
  },
  {
    frontFace: "./images/5.png",
    backFace: "./images/back-face1.png",
  },
  {
    frontFace: "./images/5.png",
    backFace: "./images/back-face1.png",
  },
  {
    frontFace: "./images/6.png",
    backFace: "./images/back-face1.png",
  },
  {
    frontFace: "./images/6.png",
    backFace: "./images/back-face1.png",
  },
  {
    frontFace: "./images/7.png",
    backFace: "./images/back-face1.png",
  },
  {
    frontFace: "./images/7.png",
    backFace: "./images/back-face1.png",
  },
  {
    frontFace: "./images/8.png",
    backFace: "./images/back-face1.png",
  },
  {
    frontFace: "./images/8.png",
    backFace: "./images/back-face1.png",
  },
  {
    frontFace: "./images/9.png",
    backFace: "./images/back-face1.png",
  },
  {
    frontFace: "./images/9.png",
    backFace: "./images/back-face1.png",
  },
];
const backFaceArray = [
  { img: "./images/back-face.png" },
  { img: "./images/back-face1.png" },
  { img: "./images/back-face2.png" },
  { img: "./images/back-face3.png" },
  { img: "./images/back-face4.png" },
  { img: "./images/back-face5.png" },
  { img: "./images/back-face6.png" },
  { img: "./images/back-face7.png" },
  { img: "./images/back-face8.png" },
  { img: "./images/back-face9.png" },
];
//Fisher–Yates Shuffle method to randomly rearrange the array.
function shuffle(array) {
  let m = array.length,
    t,
    i;
  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);
    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}
shuffle(images1);
shuffle(images2);
shuffle(images3);

function createCards(array, container) {
    for (i = 0; i < array.length; i++) {
        const img = document.createElement('img');
        img.setAttribute('id', `${i}`);
        img.src = array[i].backFace;
        img.alt = array[i].alt
        container.appendChild(img);
        img.dataset.clicked = true
        //console.log(images1[i])
    }
}
createCards(images1, smallCardContainer);
createCards(images2, mediumCardContainer);
createCards(images3, largeCardContainer);

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
