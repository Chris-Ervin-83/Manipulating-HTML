const newBtn = document.createElement("button");
newBtn.id = "btn-id";
document.body.appendChild(newBtn);
newBtn.textContent = "Ready for something nice?";

newBtn.addEventListener("click", function () {
  alert("Have A Great Day!");
});

const textBoxBtn = document.getElementById("text-button");
const textBox = document.getElementById("text-input");

textBoxBtn.addEventListener("click", function () {
  alert(textBox.value);
});

const hoverDiv = document.getElementById("hover-div");

function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

hoverDiv.addEventListener("mouseover", function () {
  this.style.backgroundColor = getRandomColor();
});

hoverDiv.addEventListener("mouseout", function () {
  this.style.backgroundColor = "grey";
});

const para = document.getElementById("paragraph");

para.addEventListener("click", function () {
  this.style.color = getRandomColor();
});

const divBtn = document.getElementById("div-btn");
const nameDiv = document.getElementById("name-div");

divBtn.addEventListener("click", function () {
  let newSpan = document.createElement("span");
  newSpan.textContent = "Chris Ervin";
  nameDiv.appendChild(newSpan);
});

const listBtn = document.getElementById("list-btn");
const ul = document.getElementById("list");
let friends = [
  "Ja",
  "LeBron",
  "Kevin",
  "Steph",
  "Luka",
  "Darius",
  "Zac",
  "Demar",
  "Joel",
  "Aaron",
];

listBtn.addEventListener("click", cycleList);
let i = 0;

function cycleList() {
  let newItem = document.createElement("li");
  i++;
  i %= friends.length;
  ul.appendChild(newItem);
  newItem.textContent = friends[i];
}
