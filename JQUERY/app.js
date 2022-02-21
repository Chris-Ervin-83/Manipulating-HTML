const newBtn = $('<button id="btn-id">Ready for something nice?</button>');
$("body").append(newBtn);

newBtn.click(function () {
  alert("Have A Great Day!");
});

$("#text-button").click(function () {
  alert($("#text-input").val());
});

function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

$("#hover-div").mouseover(function () {
  this.style.backgroundColor = getRandomColor();
});

$("#hover-div").mouseout(function () {
  this.style.backgroundColor = "grey";
});

$("#paragraph").click(function () {
  this.style.color = getRandomColor();
});

$("#div-btn").click(function () {
  $("#name-div").append("<span>Chris Ervin</span>");
});

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

$("#list-btn").click(cycleList);

let i = 0;

function cycleList() {
  i++;
  i %= friends.length;
  $("#list").append("<li>" + friends[i] + "</li>");
}
