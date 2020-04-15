import leftTitles from './leftTitles.js';
import rightTitles from './rightTitles.js';

let leftTitle = document.getElementById('left_title');
let rightTitle = document.getElementById('right_title');
let changeButton = document.getElementById('change');
let leftInfo = document.getElementById('left_info');
let rightInfo = document.getElementById('right_info');

 //Clears currently active titles
 const clearActive = () => {
    let activeTitles = document.getElementsByClassName('active');
    while (activeTitles.length > 0) {
        activeTitles[0].classList.remove('active');
    } 
}

//Picks a randomm title from each array
const randomizeTitle = (currLeft, currRight) => {
    //Pick a random index from each array
    let leftTitle = leftTitles[Math.floor(Math.random() * leftTitles.length)];
    let rightTitle = rightTitles[Math.floor(Math.random() * rightTitles.length)];
    
    //If left or right title matches previously active title, keep randomizing
    while (leftTitle.title === currLeft) {
        leftTitle = leftTitles[Math.floor(Math.random() * leftTitles.length)];
    }
    while (rightTitle.title === currRight) {
        rightTitle = rightTitles[Math.floor(Math.random() * rightTitles.length)];
    }
    return [leftTitle, rightTitle];
}

//Sets titles as active on the front-end
const setActive = (newLeft, newRight) => {
    //Find the titles in the list and set them active
    for (let i = 0; i < leftTitle.children.length; i++) {
        if (leftTitle.children[i].textContent === newLeft.title) {
            leftTitle.children[i].classList.add('active');
        }
    }

    for (let i = 0; i < rightTitle.children.length; i++) {
        if (rightTitle.children[i].textContent === newRight.title) {
            rightTitle.children[i].classList.add('active');
        }
    }
 }

//Scrolls active titles to the center
const centerActive = () => {
    let leftActive = leftTitle.getElementsByClassName('active')[0];
    let rightActive = rightTitle.getElementsByClassName('active')[0];  
    let isScrolling;

    leftTitle.addEventListener('scroll', function (event) {
        window.clearTimeout(isScrolling);
        isScrolling = setTimeout(function() {
            rightActive.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }, 66);
    }, false);

    leftActive.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });
}

//Set title info to new active titles
const updateTitleInfo = (newLeft, newRight) => {
    //Update left title info
    leftInfo.children[0].innerHTML = newLeft.task.name;
    leftInfo.children[1].innerHTML = newLeft.task.description;
    leftInfo.style.backgroundColor = newLeft.task.color;

    //Update right title info
    rightInfo.children[0].innerHTML = newRight.task.name;
    rightInfo.children[1].innerHTML = newRight.task.description;
    rightInfo.style.backgroundColor = newRight.task.color;
}

//Displays title info for the new active titles
const displayTitleInfo = () => {
    let isScrolling;
    rightTitle.addEventListener('scroll', function (event) {
        window.clearTimeout(isScrolling);
        isScrolling = setTimeout(function() {
            leftInfo.style.opacity = '1';
            leftInfo.style.setProperty('animation', 'pop 0.3s linear 1');
            rightInfo.style.opacity = '1';
            rightInfo.style.setProperty('animation', 'pop 0.3s linear 1');
        }, 66);
    }, false);

    leftInfo.style.removeProperty('animation');
    rightInfo.style.removeProperty('animation');
}

//Prevent manual scrolling through titles
window.addEventListener('wheel', function(e) { e.preventDefault(); }, { passive: false });
//leftTitle.addEventListener('wheel', function(e) { e.preventDefault(); }, { passive: false });
//rightTitle.addEventListener('wheel', function(e) { e.preventDefault(); }, { passive: false });

//Prepend lists with filler blanks
leftTitle.innerHTML += '<p class="filler"></p>';
rightTitle.innerHTML += '<p class="filler"></p>';

//Populate lists with titles
leftTitles.forEach(element => {
    leftTitle.innerHTML += '<div>' + element.title + '</div>';
});

rightTitles.forEach(element => {
    rightTitle.innerHTML += '<div>' + element.title + '</div>';
});

//Append lists with filler blanks
leftTitle.innerHTML += '<p class="filler"></p>';
rightTitle.innerHTML += '<p class="filler"></p>';

//Set initial active to first elemenets of each title list
setActive(leftTitles[0], rightTitles[0]);

//Clicking button will randomize title
changeButton.onclick = () => {
    //Check for currently active titles
    let currentTitles = document.getElementsByClassName('active');
    let currLeft = currentTitles[0].textContent;
    let currRight = currentTitles[1].textContent;

    //Clear the current active title
    clearActive();

    //Hide title info for previous titles
    leftInfo.style.opacity = 0;
    rightInfo.style.opacity = 0;
    
    //Grab new random titles that don't match the currently active
    let newTitles = randomizeTitle(currLeft, currRight);

    //Set the random titles as active
    setActive(newTitles[0], newTitles[1]);

    //Scroll active titles to the center
    centerActive();

    //Display new title info
    displayTitleInfo();
    
    //Update info cards with random titles
    updateTitleInfo(newTitles[0], newTitles[1]);
}

