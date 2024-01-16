let h3 = document.querySelector("h3");

let colors = ["red", "yellow", "green", "orange"];
let level = 0;
let started = false;
let gameSeq = [];
let userSeq = [];

document.addEventListener("keypress", function () {
  if (started == false) {
    started = true;
    levelUp();
  }
});
function btnFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 350);
}
function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 350);
}
function checkAns(indx) {
  if (userSeq[indx] == gameSeq[indx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1200);
    }
  } else {
    h3.innerHTML = `GAME OVER! Your score <b>${level}</b><br> Press any key to try again`;
    reset();
    let body = document.querySelector("body");
    body.style.backgroundColor = "red";
    setTimeout(function () {
      body.style.backgroundColor = "";
    }, 200);
  }
}
function levelUp() {
  userSeq = [];
  level++;
  h3.innerText = `level ${level}`;

  let randomNum = Math.floor(Math.random() * 4);
  let randomColor = colors[randomNum];
  let randomBtn = document.querySelector(`.${randomColor}`);
  gameSeq.push(randomColor);
  console.log(gameSeq);
  btnFlash(randomBtn);
}
function btnClicked() {
  let btn = this;
  userFlash(btn);
  userColor = btn.getAttribute("id");
  userSeq.push(userColor);

  checkAns(userSeq.length - 1);
}
let btns = document.querySelectorAll(".btn");
for (btn of btns) {
  btn.addEventListener("click", btnClicked);
  let userselet = btn.getAttribute("id");
}
function reset() {
  level = 0;
  started = false;
  gameSeq = [];
  userSeq = [];
}
