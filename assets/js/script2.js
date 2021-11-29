// Global variables
let index = 0; // counter variable
const array = ["assets/images/chameleon1.png", "assets/images/chameleon2.png", "assets/images/chameleon3.png", 
"assets/images/chameleon4.png", "assets/images/chameleon5.png", "assets/images/chameleon6.png", 
"assets/images/chameleon7.png", "assets/images/chameleon8.png", "assets/images/chameleonfinal.png"]; // array of strings for your image paths

function changeColor() {
    // update your counter variable
        // make sure to check if you are at the end of your array and update accordingly
    // set your .src property of the image to array[index]
    // index ++ >8;
    // document.getElementById("changecolor").src = array[index];
    
    
    

    if (index == array.length - 1) { 
        index = 0;
    }
    else { 
       index++;
    }

    document.getElementById("changecolor").src = array[index];
}

document.getElementById("changecolor").onclick = changeColor;

