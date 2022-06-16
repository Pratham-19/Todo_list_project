document.getElementById("button").onclick = function () {
    on()
};

function hello() {
    window.alert("Hi,You clicked");
}

function on() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("loginBox").style.display = "block";
}

// function off() {
//     document.getElementById("overlay").style.display = "none";
//     document.getElementById("loginBox").style.display = "none";
// }