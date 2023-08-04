/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];
function getRandomNumber(a, b) {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}
const n1 = getRandomNumber(0, 3);
console.log(n1);
const n2 = getRandomNumber(0, 3);
console.log(n2);
const n3 = getRandomNumber(0, 2);
console.log(n3);
const n4 = getRandomNumber(0, 4);
console.log(n4);
let test = `${who[n1]} ${action[n2]} ${what[n3]} ${when[n4]}`;
window.onload = function() {
  //write your code here

  document.getElementById("test").innerHTML = test;
};
