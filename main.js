import { leftTitles, rightTitles } from "./titles.js";

let leftTitle = document.getElementById('left_title');
let rightTitle = document.getElementById('right_title');
let changeButton = document.getElementById('change');

leftTitles.forEach(element => {
    leftTitle.innerHTML += '<div>' + element + '</div>';
});

rightTitles.forEach(element => {
    rightTitle.innerHTML += '<div>' + element + '</div>';
});

const setActive = (currLeft, currRight) => {
    for (let i = 0; i < leftTitle.children.length; i++) {
        if (leftTitle.children[i].textContent == currLeft) {
            leftTitle.children[i].className = 'active';
        }
    }

    for (let i = 0; i < rightTitle.children.length; i++) {
        if (rightTitle.children[i].textContent == currRight) {
            rightTitle.children[i].className = 'active';
        }
    }
 }

 const clearActive = () => {
    let actives = document.getElementsByClassName("active");
    while (actives.length > 0) {
        actives[0].classList.remove('active');
    } 
 }

 const centerLeftActive = () => {
    let leftActive = leftTitle.getElementsByClassName('active')[0];

    leftActive.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
 }

 const centerRightActive = () => {
    let rightActive = rightTitle.getElementsByClassName('active')[0];

    rightActive.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
 }

 changeButton.onclick = () => {
     clearActive();

     let currLeft = leftTitles[Math.floor(Math.random() * leftTitles.length)];
     let currRight = rightTitles[Math.floor(Math.random() * rightTitles.length)];

     setActive(currLeft, currRight);
     centerLeftActive();
     setTimeout(centerRightActive, 2000);
 }

 