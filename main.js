const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

let millisecond = document.getElementById("milliseconds");
let second = document.getElementById("seconds");
let minute = document.getElementById("minutes");
let hour = document.getElementById("hours");

let startTime;
let elapsedTime = 0;
let intervalID;


startBtn.addEventListener('click',startStopwatch);

stopBtn.addEventListener('click',stopStopwatch);

resetBtn.addEventListener('click',resetStopwatch);


function startStopwatch(){
    startTime = Date.now() - elapsedTime;
    intervalID = setInterval(updateStopwatch, 10);
    startBtn.disabled = true;
}

function stopStopwatch(){
    clearInterval(intervalID);
    startBtn.disabled = false;
}

function resetStopwatch(){
    stopStopwatch();
    elapsedTime = 0;
    updateDisplay();
}

function updateStopwatch(){
    elapsedTime = Date.now() - startTime;
    updateDisplay();
}

function updateDisplay(){
    let ms = Math.floor((elapsedTime % 1000)/10);
    let sec = Math.floor((elapsedTime % 60000)/1000);
    let min = Math.floor((elapsedTime % 3600000/60000));
    let hr = Math.floor((elapsedTime / 3600000));

    millisecond.innerHTML = ms;
    second.innerHTML = sec;
    minute.innerHTML = min;
    hour.innerHTML = hr;
}