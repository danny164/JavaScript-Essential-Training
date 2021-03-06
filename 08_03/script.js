const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

var timer = [0, 0, 0, 0];
// Add leading zero to numbers 9 or below (purely for aesthetics):


// Run a standard minute/second/hundredths timer:
function runTimer() {
    let currentTime = timer[0] + ":" + timer[1] + ":" + timer[2];
    theTimer.innerHTML = currentTime;
    timer[3]++;

    timer[0] = Math.floor((timer[3]/100)/60);
    timer[1] = Math.floor((timer[3]/100) - (timer[0] * 60));
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));
}

// Match the text entered with the provided text on the page:
function spellCheck() {
    let textEntered = testArea.value;
    console.log(textEntered);
}

// Start the timer:
function start() {
    let textEnteredLength = testArea.value.length; // length này là độ dài của mảng
    if (textEnteredLength === 0){ // Text đươc lưu theo mảng[h,e,l,l,o, ,w,o,r,l,d,!], -> array length = 12
        // mỗi kí tự là 1 phần tử, phần tử đầu tiên nhập vào sẽ là mảng [0] = h
        setInterval(runTimer, 10) // 10 per 1000 miliseconds
    }
    console.log(textEnteredLength);
}

// Reset everything:
function reset() {
    console.log("reset button has been pressed!");
}


// Event listeners for keyboard input and the reset button:
testArea.addEventListener("keypress", start, false);
testArea.addEventListener("keyup", spellCheck, false);
resetButton.addEventListener("click", reset, false);
