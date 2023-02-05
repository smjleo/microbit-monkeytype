// load in https://github.com/bsiever/microbit-pxt-blehid

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function countdown() {
    for (let i=3; i>0; i--) {
        console.log("Countdown:", i)
        await sleep(1000)
    }
}

function convertToWord(word) {
    let res = ""
    for (let c of Array.from(word.children)) {
        res += c.innerText
    }
    return res
}

var cont = true

async function start() {
    await countdown();
    let words = document.getElementsByClassName("word");
    words = Array.from(words).map(convertToWord);

    for (let word of words) {
        if (!cont) break;
        fetch(`http://127.0.0.1:5000/?text=${word}`);
        await sleep(150);
    }

    console.log(words);
} 
