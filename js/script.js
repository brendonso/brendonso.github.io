document.getElementById('emailIcon').addEventListener('click', function () {
    const emailElement = document.getElementById('email');
    if (emailElement.style.display === 'none') {
        emailElement.style.frontSize = "5px";
        emailElement.style.display = 'block';
        
    } else {
        emailElement.style.display = 'none';
    }
});

document.addEventListener("DOMContentLoaded", function () {
    clearText();
    titleWriter();


});

let i = 0;
let x = 0;
let speed = 120;


const intro_title = document.getElementById("intro").textContent;
const intro_body = document.getElementById("intro_body").textContent;
const lang_title = document.getElementById("title_langs").textContent;
const lang_body = document.getElementById("langs").textContent;
const courses_title = document.getElementById("title_course").textContent;
const courses_body = document.getElementById("courses").textContent;

const titles = [intro_title, lang_title, courses_title];
const bodies = [intro_body, lang_body, courses_body];
const titleIds = ["intro", "title_langs", "title_course"];
const bodyIds = ["intro_body", "langs", "courses"];

function titleWriter() {
    let typingComplete = true;
    var size = 100;
    for (let j = 0; j < titles.length; j++) {
        if (j === 0) {
            if (i < titles[0].length) {
                document.getElementById(titleIds[0]).innerHTML += titles[0].charAt(i);
                
                document.getElementById(titleIds[0]).style.fontSize = `${size-(i*2.7)}px`; 
                typingComplete = false;
                break;
            }
        } else {
            document.getElementById(titleIds[j]).innerHTML = titles[j];
            document.querySelector(".language-icons").style.visibility = 'visible';
            document.querySelector(".navbar").style.visibility = 'visible';
            document.querySelector(".sidebar").style.visibility = 'visible';
            document.querySelector(".email").style.visibility = 'visible';

        }
    }
    
    if (!typingComplete) {
        i++;
        setTimeout(titleWriter, speed);
    } else {
        speed = 60;
        i = 0;
        bodyWriter();

    }
}

function bodyWriter() {
    let typingComplete = true;
    for (let j = 0; j < bodies.length; j++) {
        if (i < bodies[j].length) {
            document.getElementById(bodyIds[j]).innerHTML += bodies[j].charAt(i);
            typingComplete = false;
            speed--;
        }
    }

    if (!typingComplete) {
        i++;
        setTimeout(bodyWriter, speed);
    }
}

function clearText() {
    document.getElementById("intro").textContent = "";
    document.getElementById("intro_body").textContent = "";
    document.getElementById("title_langs").textContent = "";
    document.getElementById("langs").textContent = "";
    document.getElementById("title_course").textContent = "";
    document.getElementById("courses").textContent = "";
}

