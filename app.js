const infoBtn = document.querySelector("#openInfoCard");
const settingBtn = document.querySelector("#openModal");
const closeBtn = document.querySelector("#closeInfoCard");
const applyBtn = document.querySelector("#settings-apply");
const settingReset = document.querySelector("#settings-reset");
const infoCard = document.querySelector("#infoCard");
const modal = document.querySelector("#modal");
const playBtn = document.querySelector("#play-button");
const resetButton = document.querySelector("#reset-button");
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
    alt: 1,
  },
  {
    frontFace: "./images/1.png",
    backFace: "./images/back-face1.png",
    alt: 1,
  },
  {
    frontFace: "./images/2.png",
    backFace: "./images/back-face1.png",
    alt: 2,
  },
  {
    frontFace: "./images/2.png",
    backFace: "./images/back-face1.png",
    alt: 2,
  },
  {
    frontFace: "./images/3.png",
    backFace: "./images/back-face1.png",
    alt: 3,
  },
  {
    frontFace: "./images/3.png",
    backFace: "./images/back-face1.png",
    alt: 3,
  },
  {
    frontFace: "./images/4.png",
    backFace: "./images/back-face1.png",
    alt: 4,
  },
  {
    frontFace: "./images/4.png",
    backFace: "./images/back-face1.png",
    alt: 4,
  },
  {
    frontFace: "./images/5.png",
    backFace: "./images/back-face1.png",
    alt: 5,
  },
  {
    frontFace: "./images/5.png",
    backFace: "./images/back-face1.png",
    alt: 5,
  },
];
const images2 = [
  {
    frontFace: "./images/1.png",
    backFace: "./images/back-face1.png",
    alt: 1,
  },
  {
    frontFace: "./images/1.png",
    backFace: "./images/back-face1.png",
    alt: 1,
  },
  {
    frontFace: "./images/2.png",
    backFace: "./images/back-face1.png",
    alt: 2,
  },
  {
    frontFace: "./images/2.png",
    backFace: "./images/back-face1.png",
    alt: 2,
  },
  {
    frontFace: "./images/3.png",
    backFace: "./images/back-face1.png",
    alt: 3,
  },
  {
    frontFace: "./images/3.png",
    backFace: "./images/back-face1.png",
    alt: 3,
  },
  {
    frontFace: "./images/4.png",
    backFace: "./images/back-face1.png",
    alt: 4,
  },
  {
    frontFace: "./images/4.png",
    backFace: "./images/back-face1.png",
    alt: 4,
  },
  {
    frontFace: "./images/5.png",
    backFace: "./images/back-face1.png",
    alt: 5,
  },
  {
    frontFace: "./images/5.png",
    backFace: "./images/back-face1.png",
    alt: 5,
  },
  {
    frontFace: "./images/6.png",
    backFace: "./images/back-face1.png",
    alt: 6,
  },
  {
    frontFace: "./images/6.png",
    backFace: "./images/back-face1.png",
    alt: 6,
  },
  {
    frontFace: "./images/7.png",
    backFace: "./images/back-face1.png",
    alt: 7,
  },
  {
    frontFace: "./images/7.png",
    backFace: "./images/back-face1.png",
    alt: 7,
  },
];
const images3 = [
  {
    frontFace: "./images/1.png",
    backFace: "./images/back-face1.png",
    alt: 1,
  },
  {
    frontFace: "./images/1.png",
    backFace: "./images/back-face1.png",
    alt: 1,
  },
  {
    frontFace: "./images/2.png",
    backFace: "./images/back-face1.png",
    alt: 2,
  },
  {
    frontFace: "./images/2.png",
    backFace: "./images/back-face1.png",
    alt: 2,
  },
  {
    frontFace: "./images/3.png",
    backFace: "./images/back-face1.png",
    alt: 3,
  },
  {
    frontFace: "./images/3.png",
    backFace: "./images/back-face1.png",
    alt: 3,
  },
  {
    frontFace: "./images/4.png",
    backFace: "./images/back-face1.png",
    alt: 4,
  },
  {
    frontFace: "./images/4.png",
    backFace: "./images/back-face1.png",
    alt: 4,
  },
  {
    frontFace: "./images/5.png",
    backFace: "./images/back-face1.png",
    alt: 5,
  },
  {
    frontFace: "./images/5.png",
    backFace: "./images/back-face1.png",
    alt: 5,
  },
  {
    frontFace: "./images/6.png",
    backFace: "./images/back-face1.png",
    alt: 6,
  },
  {
    frontFace: "./images/6.png",
    backFace: "./images/back-face1.png",
    alt: 6,
  },
  {
    frontFace: "./images/7.png",
    backFace: "./images/back-face1.png",
    alt: 7,
  },
  {
    frontFace: "./images/7.png",
    backFace: "./images/back-face1.png",
    alt: 7,
  },
  {
    frontFace: "./images/8.png",
    backFace: "./images/back-face1.png",
    alt: 8,
  },
  {
    frontFace: "./images/8.png",
    backFace: "./images/back-face1.png",
    alt: 8,
  },
  {
    frontFace: "./images/9.png",
    backFace: "./images/back-face1.png",
    alt: 9,
  },
  {
    frontFace: "./images/9.png",
    backFace: "./images/back-face1.png",
    alt: 9,
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
    const img = document.createElement("img");
    img.setAttribute("id", `${i}`);
    img.classList.add("card");
    img.src = array[i].backFace;
    img.alt = array[i].alt;
    container.appendChild(img);
    img.dataset.clicked = true;
  }
}
createCards(images1, smallCardContainer);
createCards(images2, mediumCardContainer);
createCards(images3, largeCardContainer);

const cards = document.querySelectorAll(".card");
let lastClickedCardId = undefined;
let matching = false;
let match = 0;
let turns = 0;
let score = 0;
let time = 10;

setInterval(() => {
  time--;
  if (time >= 0) {
    document.querySelector(".timer").innerText = ` Time: ${time}`;
  } else {
    lostGame();
  }
}, 1000);
function playGame() {
  for (i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", (e) => {
      let clicked = e.target.dataset.clicked;
      //firstClick
      if (!matching && lastClickedCardId === undefined && clicked == "true") {
        console.log(lastClickedCardId);
        e.target.dataset.clicked = "false";
        e.target.src = images1[e.target.id].frontFace;
        lastClickedCardId = e.target.id;
        console.log(lastClickedCardId);
        turns++;
        document.querySelector(".turns").innerText = `Turns: ${turns}`;
        //secondClick
      } else if (
        !matching &&
        lastClickedCardId != undefined &&
        clicked == "true" &&
        e.target.id != lastClickedCardId
      ) {
        e.target.dataset.clicked = "false";
        e.target.src = images1[e.target.id].frontFace;
        console.log(lastClickedCardId);
        turns++;
        document.querySelector(".turns").innerText = `Turns: ${turns}`;
        //match
        if (cards[lastClickedCardId].alt == cards[e.target.id].alt) {
          setTimeout(() => {
            document.getElementById(lastClickedCardId).style.display = "none";
            document.getElementById(e.target.id).style.display = "none";
            lastClickedCardId = undefined;
          }, 1000);
          match++;
          document.querySelector(".match").innerText = `Match: ${match}`;
          if (match === 1) {
            win();
          }
          //nomatch
        } else {
          matching = true;
          document.getElementById(lastClickedCardId).src =
            images1[lastClickedCardId].frontFace;
          document.getElementById(e.target.id).src =
            images1[e.target.id].frontFace;
          setTimeout(() => {
            document.getElementById(e.target.id).dataset.clicked = "true";
            document.getElementById(e.target.id).src =
              images1[e.target.id].backFace;
            document.getElementById(lastClickedCardId).dataset.clicked = "true";
            document.getElementById(lastClickedCardId).src =
              images1[lastClickedCardId].backFace;
            document.getElementById(lastClickedCardId).dataset.clicked = "true";
            lastClickedCardId = undefined;
            turns !== 0;
            matching = false;
          }, 1000);
        }
      }
    });
  }
}

function win() {
  score++;
  document.querySelector(".score").innerText = `Score: ${score}`;
  document.querySelector(".easy-game").style.display = "none";
  document.querySelector(".result-container").style.display = "block";
  document.querySelector(".result-text").innerText =
    "Congrats You win the Game";
}
function reset() {
  document.querySelector(".result-container").style.display = "none";
  document.querySelector(".easy-game").style.display = "block";
  cards.forEach((card) => {
    card.style.display = "block";
    card.dataset.clicked = true;
  });
  turns = 0;
  match = 0;
  time = 10;
  lastClickedCardId = undefined;
  matching = false;
  document.querySelector(".turns").innerText = `Turns: ${turns}`;
  document.querySelector(".match").innerText = `Match: ${match}`;
  document.querySelector(".timer").innerText = `Time: 1:00`;
  startGame();
}
function lostGame() {
  document.querySelector(".easy-game").style.display = "none";
  document.querySelector(".result-container").style.display = "block";
  document.querySelector(".result-text").innerText = "Time Up. Game Over";
}
function startGame() {
  if (easy.checked) {
    startEasyGame();
    for (i = 0; i < images1.length; i++) {
      cards[i].src = images1[i].frontFace;
    }
    setTimeout(() => {
      for (i = 0; i < images1.length; i++) {
        cards[i].src = images1[i].backFace;
      }
    }, 2000);
    playGame();
  } else if (medium.checked) {
    startMediumGame();
  } else if (hard.checked) {
    startHardGame();
  }
}

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

resetButton.addEventListener("click", reset);
infoBtn.addEventListener("click", openInfoCard);
settingBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeInfoCard);
applyBtn.addEventListener("click", closeModal);
playBtn.addEventListener("click", startGame);

document.querySelector(".blue").addEventListener("click", () => {
  document.querySelector(".container").style.backgroundColor = "#54acf3";
  easyGame.style.backgroundColor = "#54acf3";
});
document.querySelector(".green").addEventListener("click", () => {
  document.querySelector(".container").style.backgroundColor = "#bcf7a1";
  easyGame.style.backgroundColor = "#bcf7a1";
});
document.querySelector(".white").addEventListener("click", () => {
  document.querySelector(".container").style.backgroundColor = "white";
  easyGame.style.backgroundColor = "white";
});
document.querySelector(".orange").addEventListener("click", () => {
  document.querySelector(".container").style.backgroundColor = "#f7d9a1";
  easyGame.style.backgroundColor = "#f7d9a1";
});
document.querySelector(".yellow").addEventListener("click", () => {
  document.querySelector(".container").style.backgroundColor = "#eeeea0";
  easyGame.style.backgroundColor = "#eeeea0";
});
document.querySelector(".purple").addEventListener("click", () => {
  document.querySelector(".container").style.backgroundColor = "#f3acf3";
  easyGame.style.backgroundColor = "#f3acf3";
});
document.querySelector(".grey").addEventListener("click", () => {
  document.querySelector(".container").style.backgroundColor = "#dfdfdf";
  easyGame.style.backgroundColor = "#dfdfdf";
});
document.querySelector(".pink").addEventListener("click", () => {
  document.querySelector(".container").style.backgroundColor = "#f797b4";
  easyGame.style.backgroundColor = "#f797b4";
});
document.querySelector(".red").addEventListener("click", () => {
  document.querySelector(".container").style.backgroundColor = "#f39797";
  easyGame.style.backgroundColor = "#f39797";
});
document.querySelector(".violet").addEventListener("click", () => {
  document.querySelector(".container").style.backgroundColor = "#f8abf8";
  easyGame.style.backgroundColor = "#f8abf8";
});
settingReset.addEventListener("click", () => {
  document.querySelector(".container").style.backgroundColor = "#f3c7db";
  easyGame.style.backgroundColor = "#f3c7db";
  modal.style.display = "none";
});
