import { leftTitles, rightTitles } from './titles.js';

let leftTitle = document.getElementById('left_title');
let rightTitle = document.getElementById('right_title');
let changeButton = document.getElementById('change');

 //Clears currently active titles
 const clearActive = () => {
    let activeTitles = document.getElementsByClassName('active');
    while (activeTitles.length > 0) {
        activeTitles[0].classList.remove('active');
    } 
}

//Picks a randomm title from each array
const randomizeTitle = () => {
    //Check for currently active titles
    let currentTitles = document.getElementsByClassName('active');
    let prevLeft = currentTitles[0];
    let prevRight = currentTitles[1];

    //Pick a random title from each array
    let leftTitle = leftTitles[Math.floor(Math.random() * leftTitles.length)];
    let rightTitle = rightTitles[Math.floor(Math.random() * rightTitles.length)];
    
    //If left or right title matches previously active title, randomize again
    while (leftTitle === prevLeft) {
        leftTitle = leftTitles[Math.floor(Math.random() * leftTitles.length)];
    }
    while (rightTitle === prevRight) {
        rightTitle = rightTitles[Math.floor(Math.random() * rightTitles.length)];
    }

    return [leftTitle, rightTitle];
}

//Sets titles as active on the front-end
const setActive = (currLeft, currRight) => {
    //Find the titles in the list and set them active
    for (let i = 0; i < leftTitle.children.length; i++) {
        if (leftTitle.children[i].textContent === currLeft) {
            leftTitle.children[i].className = 'active';
        }
    }

    for (let i = 0; i < rightTitle.children.length; i++) {
        if (rightTitle.children[i].textContent === currRight) {
            rightTitle.children[i].className = 'active';
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

//Prevent manual scrolling through titles
leftTitle.addEventListener('wheel', function(e) { e.preventDefault(); }, {passive: false} );
rightTitle.addEventListener('wheel', function(e) { e.preventDefault(); }, {passive: false} );

//Prepend lists with filler blanks
leftTitle.innerHTML += '<div class="filler"></div>';
rightTitle.innerHTML += '<div class="filler"></div>';

//Populate lists with titles
leftTitles.forEach(element => {
    leftTitle.innerHTML += '<div>' + element + '</div>';
});

rightTitles.forEach(element => {
    rightTitle.innerHTML += '<div>' + element + '</div>';
});

//Append lists with filler blanks
leftTitle.innerHTML += '<div class="filler"></div>';
rightTitle.innerHTML += '<div class="filler"></div>';

//Set initial active to first elemenets of each title list
setActive(leftTitles[0], rightTitles[0]);

//Clicking button will randomize title
changeButton.onclick = () => {
    //Clear the current active title
    clearActive();
    
    //Grab new random titles
    let newTitles = randomizeTitle();

    //Set the random titles as active
    setActive(newTitles[0], newTitles[1]);

    //Scroll active titles to the center
    centerActive();
}