import { leftTitles, rightTitles } from "./titles.js";

let leftTitle = document.getElementById('left_title');
let rightTitle = document.getElementById('right_title');
let changeButton = document.getElementById('change');

leftTitle.innerHTML = leftTitles.join('<br>');
rightTitle.innerHTML = rightTitles.join('<br>');