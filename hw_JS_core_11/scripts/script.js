'use strict'

// -- ЗАВДАННЯ 1----------------------------------------------------------------
let nDate = new Date();

setInterval(() => {
    let nDate = new Date();
    let hh = nDate.getHours();
    let mm = nDate.getMinutes();
    let ss = nDate.getSeconds();
    if (hh < 10) hh = '0' + hh;
    if (mm < 10) mm = '0' + mm;
    if (ss < 10) ss = '0' + ss;
    document.querySelector('.row__time').innerHTML = `${hh} : ${mm} : ${ss}`;

    let nD = nDate.getDate();
    let nM = nDate.getMonth();
    let nY = nDate.getFullYear();
    if (nD < 10) nD = '0' + nD;
    if (nM < 10) nM = '0' + nM;
    if (nY < 10) nY = '0' + nY;
    document.querySelector('.row__date').innerHTML = `${nD} : ${nM + 1} : ${nY}`;
})

//-------------------------------------------------------------------------------

//--------------STOPWATCH--------------------------------------------------------

let stopWbtn = document.forms.stopwatch_btn;
let stopWotchID;

document.querySelector('.stw-dig').innerHTML = "00" + ":" + "00" + ":" + "00" + ":" + "00";

let msM = 0;
let minM = 0;
let secM = 0;
let hoursM = 0;

let pCount = 0;
let pCount1;

stopWbtn.st_start.addEventListener('click', () => {
    stopWbtn.st_start.disabled = true;
    stopWbtn.st_stop.disabled = false;

    let baseDate = new Date();
    let base = baseDate.getTime();

    if (pCount == 0) {
        stopWotchID = setInterval(() => {
            let countDate = new Date();
            let count = countDate.getTime();
            pCount = count - base;
            msM = (pCount) % 1000;
            minM = Math.trunc(pCount / (1000 * 60));
            secM = Math.trunc(pCount / 1000) - (minM * 60);
            hoursM = Math.trunc(minM / 60);
            if (minM < 10) minM = "0" + minM;
            if (secM < 10) secM = "0" + secM;
            if (hoursM < 10) hoursM = "0" + hoursM;
            document.querySelector('.stw-dig').innerHTML = hoursM + ":" + minM + ":" + secM + ":" + msM;
        })
    } else {
        stopWotchID = setInterval(() => {
            let countDate = new Date();
            let count = countDate.getTime();
            pCount = (count - base) + pCount1;
            msM = (pCount) % 1000;
            minM = Math.trunc((pCount) / (1000 * 60));
            secM = Math.trunc(((pCount) / 1000)) - (minM * 60);
            hoursM = Math.trunc(minM / 60);
            if (minM < 10) minM = "0" + minM;
            if (secM < 10) secM = "0" + secM;
            if (hoursM < 10) hoursM = "0" + hoursM;
            document.querySelector('.stw-dig').innerHTML = hoursM + ":" + minM + ":" + secM + ":" + msM;
        })
    }
})

function stopStopWatch() {
    clearTimeout(stopWotchID);
}

stopWbtn.st_stop.addEventListener('click', () => {
    stopWbtn.st_start.disabled = false;
    stopWbtn.st_stop.disabled = true;
    stopStopWatch();
    pCount1 = pCount;
})

stopWbtn.st_loop.addEventListener('click', () => {
    let p = document.createElement('p');
    p.textContent = hoursM + ":" + minM + ":" + secM + ":" + msM;
    if (msM != 0) document.querySelector('.row__loop').append(p);
})

stopWbtn.st_reset.addEventListener('click', () => {
    pCount = 0;
    msM = 0;
    minM = 0;
    secM = 0;
    hoursM = 0;
    document.querySelector('.stw-dig').innerHTML = "00" + ":" + "00" + ":" + "00" + ":" + "00";
    document.querySelector('.row__loop').innerHTML = '';
    stopWbtn.st_stop.disabled = false;
})

//---------------------------------------------------------

//-----------TIMER----------------------------------

function stopTimer() {
    clearTimeout(stopTimerID);
}

let btnIncr = document.querySelector('.btn_incr');
let btnDecr = document.querySelector('.btn_decr');
document.querySelector('.row__settimer').innerHTML = "00";

let cDownSet = 0;
let msCountDown = 0;

btnIncr.addEventListener('click', () => {
    cDownSet++;
    msCountDown = cDownSet * 60 * 1000;
    if (cDownSet < 10) cDownSet = "0" + cDownSet;
    document.querySelector('.row__settimer').innerHTML = cDownSet;
})

btnDecr.addEventListener('click', () => {
    if (cDownSet > 0) {
        cDownSet--;
        msCountDown = cDownSet * 60 * 1000;
        if (cDownSet < 10) cDownSet = "0" + cDownSet;
        document.querySelector('.row__settimer').innerHTML = cDownSet;
    }
})

document.querySelector('.row__timer').innerHTML = "00" + ":" + "00";

let formTimerBtn = document.forms.timer_btn;

let countMsTimer = 0;
let minTimer;
let secTimer;
let baseTimer = 0;
let stopTimerID;
let startStopTimer = 0;



formTimerBtn.l_start.addEventListener('click', () => {

    if (msCountDown != 0) {
        btnDecr.disabled = true;
        btnIncr.disabled = true;
        formTimerBtn.l_start.disabled = true;
        formTimerBtn.l_stop.disabled = false;

        if (baseTimer == 0) {
            let timerD = new Date();
            baseTimer = timerD.getTime() + msCountDown;
            stopTimerID = setInterval(() => {
                if (countMsTimer >= 0) {
                    let countTimer = new Date();
                    countMsTimer = baseTimer - countTimer.getTime();
                    minTimer = Math.trunc((countMsTimer) / (1000 * 60));
                    secTimer = Math.trunc(((countMsTimer) / 1000)) - (minTimer * 60);
                    if (minTimer < 10) minTimer = "0" + minTimer;
                    if (secTimer < 10) secTimer = "0" + secTimer;
                    document.querySelector('.row__timer').innerHTML = minTimer + ":" + secTimer;
                }
            })

        } else {
            let timerD = new Date();
            baseTimer = timerD.getTime() + msCountDown;
            stopTimerID = setInterval(() => {
                if (countMsTimer > 0) {
                    let countTimer = new Date();
                    countMsTimer = baseTimer - countTimer.getTime();
                    minTimer = Math.trunc((countMsTimer) / (1000 * 60));
                    secTimer = Math.trunc(((countMsTimer) / 1000)) - (minTimer * 60);
                    if (minTimer < 10) minTimer = "0" + minTimer;
                    if (secTimer < 10) secTimer = "0" + secTimer;
                    document.querySelector('.row__timer').innerHTML = minTimer + ":" + secTimer;
                }
            })
        }
    }
})


formTimerBtn.l_reset.addEventListener('click', () => {
    stopTimer();
    btnIncr.disabled = false;
    btnDecr.disabled = false;
    formTimerBtn.l_start.disabled = false;
    formTimerBtn.l_stop.disabled = false;
    countMsTimer = 0;
    minTimer = 0;
    secTimer = 0;
    baseTimer = 0;
    startStopTimer = 0;
    cDownSet = 0;
    msCountDown = 0;
    document.querySelector('.row__settimer').innerHTML = "00";
    document.querySelector('.row__timer').innerHTML = "00" + ":" + "00";
})


formTimerBtn.l_stop.addEventListener('click', () => {
    stopTimer();
    msCountDown = countMsTimer;
    formTimerBtn.l_start.disabled = false;
    formTimerBtn.l_stop.disabled = true;
})


// -- ЗАВДАННЯ 2----------------------------------------------------------------



// -- ЗАВДАННЯ 3----------------------------------------------------------------


// -- ЗАВДАННЯ 4----------------------------------------------------------------
