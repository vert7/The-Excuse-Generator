/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  let excuseDiv = document.querySelector("#excuse");
  excuseDiv.innerHTML = generateExcuse();
};
let generateExcuse = function() {
  let who = [
    " a dog",
    " the baby-sister",
    " a pet Python",
    " my roomates guests"
  ];
  let what = [
    " ATE my homework",
    " peed on my homework",
    " ravaged my homework",
    " owned my homework"
  ];
  let when = [
    " yesterday",
    " hours ago",
    " right before I got here",
    " last night"
  ];

  return (
    who[random(0, 4)] + "" + what[random(0, 4)] + "" + when[random(0, 4)] + ""
  );
};
function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
