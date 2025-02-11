const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
let noScale =1;
let yesScale = 1;
const buttonContainer = document.querySelector(".buttons");
const yesButtonStyle = window.getComputedStyle(yesButton);


const buttonMessages = 
[
    "Are you sure?",
    "ill be sad:c",
    "ill be very sad:C",
    "ill be very very sad:c" ,
    "ill be very very very sad:c"
];

let noClicks = 1
const maxNo = 3
const minNo = 0.65;

const maxYesWidth = parseFloat(yesButtonStyle.maxWidth);

const gifs = 
[
    "./assets/catcryingWhileLayingDown.gif",
    "./assets/catcryingwithhandsonface.gif",
    "./assets/CatFullOnCrying.gif",
    ",./assets/smlingwhilecrying.gif",
];

const gifElement = document.getElementById("catpic");

const two = 2
noButton.addEventListener("click" , function(){
    console.log("No");
    if(noClicks<maxNo) {
        gifElement.src = gifs[noClicks];
    }

    
    if(two > 1){
        noButton.textContent = buttonMessages[noClicks % maxNo];
    }

    noButton.style.width = "auto";
    noButton.style.width = `${noButton.scrollWidth}px`;

    if (noScale > minNo) {
        noScale -= 0.1;
        noButton.style.transform = `scale(${noScale})`;
    }

    const baseWidth = parseFloat(yesButtonStyle.width);
    const scaledWidth = baseWidth * yesScale;//shows size of the button

    console.log(`Scaled Width: ${scaledWidth}, Max Width: ${maxYesWidth}`);

    if (scaledWidth < maxYesWidth) {
        yesScale += 0.5; 
        yesButton.style.transform = `scale(${yesScale})`;

        
        const rootStyles = getComputedStyle(document.documentElement);
        const gapScaleFactor = parseFloat(rootStyles.getPropertyValue("--gap-scale-factor")) || 250;

        
        const currentGap = parseFloat(buttonContainer.style.gap) || 20;
        const newGap = Math.sqrt(currentGap * gapScaleFactor); // Scale based on the factor
        buttonContainer.style.gap = `${newGap}px`;
    }

    noClicks++;
})