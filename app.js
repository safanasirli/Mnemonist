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

//Fisher–Yates Shuffle method to randomly rearrange the array.
function shuffle(array) {
  let m = array.length,
    t,
    i;
  //   // While there remain elements to shuffle…
  while (m) {
    //     // Pick a remaining element…
    i = Math.floor(Math.random() * m--);
    //     // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}
shuffle(images1);
shuffle(images2);
shuffle(images3);

function createCards(array, container, classname) {
  for (i = 0; i < array.length; i++) {
    const img = document.createElement("img");
    img.setAttribute("id", `${i}`);
    img.classList.add(classname);
    img.alt = array[i].alt;
    container.appendChild(img);
    img.dataset.clicked = true;
  }
}
createCards(images1, smallCardContainer, "cards1");
createCards(images2, mediumCardContainer, "cards2");
createCards(images3, largeCardContainer, "cards3");

const cards1 = document.querySelectorAll(".cards1");
const cards2 = document.querySelectorAll(".cards2");
const cards3 = document.querySelectorAll(".cards3");
let lastClickedCardId = undefined;
let matching = false;
let match = 0;
let turns = 0;
let score = 0;
let time = 10;
console.log(cards1);
function startGame() {
  if (easy.checked) {
    startEasyGame();

    for (i = 0; i < images1.length; i++) {
      cards1[i].src = images1[i].frontFace;
    }
    setTimeout(() => {
      for (i = 0; i < images1.length; i++) {
        cards1[i].src = images1[i].backFace;
      }
    }, 2000);

    playGame(images1, cards1);
  } else if (medium.checked) {
    startMediumGame();

    for (i = 0; i < images2.length; i++) {
      cards2[i].src = images2[i].frontFace;
    }
    setTimeout(() => {
      for (i = 0; i < images2.length; i++) {
        cards2[i].src = images2[i].backFace;
      }
    }, 2000);
    playGame(images2, cards2);
  } else if (hard.checked) {
    startHardGame();

    for (i = 0; i < images3.length; i++) {
      cards3[i].src = images3[i].frontFace;
    }
    setTimeout(() => {
      for (i = 0; i < images3.length; i++) {
        cards3[i].src = images3[i].backFace;
      }
    }, 2000);
    playGame(images3, cards3);
  }
}
function countdown() {
  if (lastClickedCardId !== undefined) {
    time--;
    if (time >= 0) {
      document.querySelectorAll(".timer").forEach((element) => {
        element.innerText = ` Time: ${time}`;
      });
    } else {
      lostGame();
    }
  }
}

let timer = setInterval(countdown, 1000);
clearInterval(timer);

function playGame(array, cards) {
  console.log(cards);
  document.querySelectorAll(".timer").forEach((element) => {
    element.innerText = `Time: 1:00`;
  });
  time = 10;
  clearInterval(timer);
  timer = setInterval(countdown, 1000);
  for (i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", (e) => {
      let clicked = e.target.dataset.clicked;
      //firstClick
      if (!matching && lastClickedCardId === undefined && clicked == "true") {
        console.log(lastClickedCardId);
        e.target.dataset.clicked = "false";
        e.target.src = array[e.target.id].frontFace;
        lastClickedCardId = e.target.id;
        console.log(lastClickedCardId);
        turns++;
        document.querySelectorAll(".turns").forEach((element) => {
          element.innerText = `Turns: ${turns}`;
        });
        //secondClick
      } else if (
        !matching &&
        lastClickedCardId != undefined &&
        clicked == "true" &&
        e.target.id != lastClickedCardId
      ) {
        e.target.dataset.clicked = "false";
        e.target.src = array[e.target.id].frontFace;
        console.log(lastClickedCardId);
        turns++;
        document.querySelectorAll(".turns").forEach((element) => {
          element.innerText = `Turns: ${turns}`;
        });
        //match
        if (cards[lastClickedCardId].alt == cards[e.target.id].alt) {
          setTimeout(() => {
            document.getElementById(lastClickedCardId).style.display = "none";
            document.getElementById(e.target.id).style.display = "none";
            lastClickedCardId = undefined;
          }, 1000);
          match++;
          document.querySelectorAll(".match").forEach((element) => {
            element.innerText = `Match: ${match}`;
          });
          if (match === 1) {
            win();
          }
          //nomatch
        } else {
          matching = true;
          document.getElementById(lastClickedCardId).src =
            array[lastClickedCardId].frontFace;
          document.getElementById(e.target.id).src =
            array[e.target.id].frontFace;
          setTimeout(() => {
            document.getElementById(e.target.id).dataset.clicked = "true";
            document.getElementById(e.target.id).src =
              array[e.target.id].backFace;
            document.getElementById(lastClickedCardId).dataset.clicked = "true";
            document.getElementById(lastClickedCardId).src =
              array[lastClickedCardId].backFace;
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
  if (easy.checked) {
    easyGame.style.display = "none";
  } else if (medium.checked) {
    mediumGame.style.display = "none";
  } else if (hard.checked) {
    hardGame.style.display = "none";
  }
  score++;
  document.querySelectorAll(".score").forEach((element) => {
    element.innerText = `Score: ${score}`;
  });
  document.querySelector(".result-container").style.display = "block";
  document.querySelector(".result-text").innerText =
    "Congrats! You win the Game";
  resetButton.innerText = "Next";
}

function reset() {
  if (easy.checked) {
    console.log(images1);
    easyGame.style.display = "block";
    lastClickedCardId = undefined;
    matching = false;
    cards1.forEach((card) => {
      card.style.display = "block";
      card.dataset.clicked = true;
      lastClickedCardId = undefined;
      matching = false;
    });
  } else if (medium.checked) {
    mediumGame.style.display = "block";
    cards2.forEach((card) => {
      card.style.display = "block";
      card.dataset.clicked = true;
    });
  } else if (hard.checked) {
    hardGame.style.display = "block";
    cards3.forEach((card) => {
      card.style.display = "block";
      card.dataset.clicked = true;
    });
  }
  document.querySelector(".result-container").style.display = "none";
  turns = 0;
  match = 0;
  clearInterval(timer);
  lastClickedCardId = undefined;
  matching = false;
  console.log(lastClickedCardId);
  document.querySelectorAll(".turns").forEach((element) => {
    element.innerText = `Turns: ${turns}`;
  });
  document.querySelectorAll(".match").forEach((element) => {
    element.innerText = `Match: ${match}`;
  });
  document.querySelectorAll(".timer").forEach((element) => {
    element.innerText = `Time: 1:00`;
  });
  startGame();
}
function lostGame() {
  if (easy.checked) {
    easyGame.style.display = "none";
  } else if (medium.checked) {
    mediumGame.style.display = "none";
  } else if (hard.checked) {
    hardGame.style.display = "none";
  }

  document.querySelector(".result-container").style.display = "block";
  document.querySelector(".result-text").innerText = "Time Up. You Failed";
  resetButton.innerText = "Retry";
}

function openModal() {
  modal.style.display = "inline-block";
}
function closeModal() {
  modal.style.display = "none";
}
function openInfoCard() {
  infoCard.style.display = "inline-block";
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

document.querySelectorAll(".card-back-image").forEach((img) => {
  img.addEventListener("click", (e) => {
    for (i = 0; i < images1.length; i++) {
      images1[i].backFace = `${e.currentTarget.src}`;
    }
  });
});

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
