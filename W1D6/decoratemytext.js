/*jshint esversion: 6 */
window.onload = function () {

    "use strict"
    let size = 12;
    let timer = null;

    const theBtn = document.getElementById('btnbig');
    theBtn.onclick = startBiggerEffect;

    const theblingCheck = document.getElementById('bling');
    theblingCheck.onchange = blingEffect;

    const thelatine = document.getElementById("piglatinBtn");
    thelatine.onclick = pigLatinEffect;

    const themalko = document.getElementById("malkovitchBtn");
    themalko.onclick = malkovitchEffect;

    const textContent = document.getElementById('mytext');

    function okayClick() {
        alert("test");
    }

    function biggerEffect() {
        size += 2;
        textContent.style.fontSize = size + 'pt';
    }

    function startBiggerEffect() {
        if (timer === null) {
            timer = setInterval(biggerEffect, 500);
        } else {
            clearInterval(timer);
            timer = null;
        }
    }

    function blingEffect() {
        var check = theblingCheck;
        if (check.checked) {
            textContent.style.color = 'green';
            textContent.style.fontWeight = 'bold';
            textContent.style.textDecoration = 'underline';
            document.body.style.backgroundImage = "url(http://oldcurrencyvalues.com/wp-content/uploads/2018/08/3-9T0B6-e1533461441779.jpeg)"
        } else {
            textContent.style.color = 'black';
            textContent.style.fontWeight = 'normal';
            textContent.style.textDecoration = 'none';
            document.body.style.backgroundImage = "url()"
        }
    }

    function malkovitchEffect() {
        let wordsArray = (textContent.value).split(' ');

        for (let i = 0; i < wordsArray.length; i++) {
            if (wordsArray[i].length >= 5) {
                wordsArray[i] = "Malkovitch";
            }
        }
        textContent.value = wordsArray.join(' ');
    }

    function pigLatinEffect() {

    }
};


