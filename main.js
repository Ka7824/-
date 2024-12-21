const timer = document.getElementById('timer');
const start = document.getElementById('buttonA');
const stop = document.getElementById('buttonB');
const reset = document.getElementById('buttonC');

let startTime;
let elapsedTime = 0;
let intervalTime;


function updateTime() {
    //時間の定義
    const h = Math.floor(elapsedTime / 1000 / 60 / 60);
    const m = Math.floor((elapsedTime / 1000 / 60) % 60);
    const s = Math.floor((elapsedTime / 1000) % 60);
    const ms = Math.floor((elapsedTime % 1000) /100);
    
    //0パディングで埋める
    let hours = h.toString().padStart(2,'0');
    let minutes = m.toString().padStart(2,'0');
    let seconds = s.toString().padStart(2,'0');
    let milliseconds = ms.toString().padStart(1,'0');

    //時刻をHTMLに反映させる
    timer.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;

    
}

// スタートボタン押下時のアクション
start.addEventListener('click',function(){
    start.disabled = true;
    stop.disabled = false;
    reset.disabled = true;

    //初期値となる時間の代入
    startTime = Date.now();
    intervalTime = setInterval(function(){
        //現在時刻と初期値の時間の差分から経過時刻を足し上げる
        elapsedTime += Date.now() - startTime;
        //初期値を更新
        startTime = Date.now();

        updateTime();
        
    },100);
})

stop.addEventListener('click',function(){
    start.disabled = false;
    stop.disabled = true;
    reset.disabled = false;

    //setIntervalを止める
    clearInterval(intervalTime);
})

reset.addEventListener('click',function(){
    start.disabled = false;
    stop.disabled = true;
    reset.disabled = true;

    //経過時刻を初期値に戻す
    elapsedTime = 0;
    timer.textContent = "00:00:00:0";
})

