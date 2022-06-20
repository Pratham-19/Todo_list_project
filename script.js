// document.getElementById("button").onclick = function () {
//     on()
// };

function signUpOn() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("signUpBox").style.display = "block";
}

function signUpOff() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("signUpBox").style.display = "none";
}

function loginOn() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("loginBox").style.display = "block";
}

function loginOff() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("loginBox").style.display = "none";
}