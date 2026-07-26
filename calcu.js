const display = document.getElementById("display");

function appendValue(value) {
    if (display.value === "Error") {
        display.value = "";
    }

    display.value += value;
}

function clearScreen() {
    display.value = "";
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function toggleSign() {
    if (display.value === "") return;

    let value = parseFloat(display.value);

    if (!isNaN(value)) {
        display.value = value * -1;
    }
}

function calculate() {
    try {

        let expression = display.value
            .replace(/×/g, "*")
            .replace(/÷/g, "/");

        let result = eval(expression);

        if (result === Infinity || isNaN(result)) {
            display.value = "Error";
        } else {
            display.value = result;
        }

    } catch {
        display.value = "Error";
    }
}// Button Ripple Effect

document.querySelectorAll("button").forEach(button=>{

button.addEventListener("click",function(e){

const circle=document.createElement("span");

const size=Math.max(this.clientWidth,this.clientHeight);

circle.style.width=size+"px";
circle.style.height=size+"px";

const rect=this.getBoundingClientRect();

circle.style.left=e.clientX-rect.left-size/2+"px";
circle.style.top=e.clientY-rect.top-size/2+"px";

this.appendChild(circle);

setTimeout(()=>{
circle.remove();
},600);

});

});
let Theme=localStorage.getItem('theme') || 'calcu.css';
function chengTheme(){
    let link = document.querySelector('link');
    
    // localStorage.setItem('theme',Theme);
    if(Theme==='calcu.css'){
        // Light Theme
        link.setAttribute('href','calcu2.css');
        Theme='calcu2.css';
        localStorage.setItem('theme',Theme);
        console.log('first block run');
    } else {

        // Dark Theme
        link.setAttribute('href','calcu.css');
        Theme='calcu.css';
        localStorage.setItem('theme',Theme);
        console.log('2nd block run');

    }
console.log(Theme);
}
let link=document.querySelector('link');
link.setAttribute('href',Theme);
