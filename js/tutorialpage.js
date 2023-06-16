let nextButton1 = document.getElementById("nextButton1");
let nextButton2 = document.getElementById("nextButton2");
let nextButton3 = document.getElementById("nextButton3");
let nextButton4 = document.getElementById("nextButton4");
let nextButton5 = document.getElementById("nextButton5");
let playButton = document.getElementById("playButton");

nextButton1.addEventListener("click", Img1);
nextButton2.addEventListener("click", Img2);
nextButton3.addEventListener("click", Img3);
nextButton4.addEventListener("click", Img4); 
nextButton5.addEventListener("click", Img5);
playButton.addEventListener("click", playButtonAction) 


nextButton2.style.display = "none";
nextButton3.style.display = "none";
nextButton4.style.display = "none";
nextButton5.style.display = "none";
playButton.style.display = "none";


function Img1() {

    document.getElementById("theImage").src = "img/presstheplaybutton.png"
    nextButton1.style.display = "none";
    nextButton2.style.display = "block";

}


function Img2() {

    document.getElementById("theImage").src = "img/choosehigherorlower.png"
    nextButton2.style.display = "none";
    nextButton3.style.display = "block";

}


function Img3() {

    document.getElementById("theImage").src = "img/resultscomehere.png"
    nextButton3.style.display = "none";
    nextButton4.style.display = "block";

}


function Img4() {

    document.getElementById("theImage").src = "img/pressthethrowbutton.png"
    nextButton4.style.display = "none";
    nextButton5.style.display = "block"

}


function Img5() {

    document.getElementById("theImage").src = "img/gamegoesonuntil5scores.png"
    nextButton5.style.display = "none";
    playButton.style.display = "block"

}


function playButtonAction() {

    window.location.href = "index.html"

}