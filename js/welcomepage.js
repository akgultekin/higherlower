let logInButton = document.querySelector(".logInButton");

logInButton.addEventListener("click", logInButtonAction);


function logInButtonAction() {

    playBtnSound();
    changePlayerName();

}


function changePlayerName() {

    let pName = document.getElementById("pname").value;
    localStorage.setItem("textvalue", pName);

}

