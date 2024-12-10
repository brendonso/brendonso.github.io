document.getElementById('emailIcon').addEventListener('click', function () {
    const emailElement = document.getElementById('email');
    if (emailElement.style.display === 'none') {
        emailElement.style.display = 'block';
    } else {
        emailElement.style.display = 'none';
    }
});


let i = 0;

var intro = 'Hello I\'m Brendon';
var body = 'Computer Science student at the University of Massachusetts Lowell';
let speed = 110;

document.addEventListener("DOMContentLoaded", function () {
    typeWriter();
});

function typeWriter() {
    if (i < intro.length) {
        document.getElementById("typing").innerHTML += intro.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else if (i < intro.length + body.length) {
        speed = 25;
        document.getElementById("body").innerHTML += body.charAt(i - intro.length);
        i++;
        setTimeout(typeWriter, speed);
    }
}

