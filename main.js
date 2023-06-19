const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const flagbtn = document.getElementById("flag");
const resetBtn = document.getElementById("reset");

let millisecond = document.getElementById("milliseconds");
let second = document.getElementById("seconds");
let minute = document.getElementById("minutes");
let hour = document.getElementById("hours");

let startTime;
let elapsedTime = 0;
let intervalID;


let [ms, sec, min, hr] = [0, 0, 0, 0];


startBtn.addEventListener('click',startStopwatch);

stopBtn.addEventListener('click',stopStopwatch);

flagbtn.addEventListener('click',record);

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
    ms = Math.floor((elapsedTime % 1000)/10);
    sec = Math.floor((elapsedTime % 60000)/1000);
    min = Math.floor((elapsedTime % 3600000/60000));
    hr = Math.floor((elapsedTime / 3600000));

    millisecond.innerHTML = ms;
    second.innerHTML = sec;
    minute.innerHTML = min;
    hour.innerHTML = hr;
}

function record(){
    let tempMs = ms;
    let tempSec = sec;
    let tempMin = min;
    let tempHr = hr;


    let tempFlag = tempHr+"hr : "+tempMin+"min : "+tempSec+"sec : "+tempMs+"ms ";


    let flags = document.createElement('li');
    flags.appendChild(document.createTextNode(tempFlag));
    document.querySelector('ol').appendChild(flags);
}