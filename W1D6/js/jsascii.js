window.onload = function () {
    "use strict"

    let txtShowAnimation;
    let btnStart;
    let btnStop;
    let selectAnimation;
    let selectFont;
    let chkSpeed;
    let currentAnimationText;
    let delay = 250;
    //had to make it global to stop it at anytime
    let animation = null;
    let timer = null;
    let indexFrame = 0;

    txtShowAnimation = document.getElementById("text-area");

    btnStart = document.getElementById("start");
    btnStart.onclick = startAnimation;

    btnStop = document.getElementById("stop");
    btnStop.onclick = stopAnimation;

    selectAnimation = document.getElementById("animation");
    selectAnimation.onchange = changeAnimationText;
    //selectAnimation.selectedIndex = 0;

    selectFont = document.getElementById("fontsize");
    selectFont.onchange = changeFontSize;
    //selectFont.selectedIndex = 2;

    chkSpeed = document.getElementById("turbo");
    chkSpeed.onchange = changeDelay;

    function okayClick() {
        alert("test");
    }

    function enabdisabControl(state) {
        if (state === 'start') {
            btnStart.disabled = true;
            btnStop.disabled = false;
            selectAnimation.disabled = true;
        } else if (state === 'stop') {
            btnStart.disabled = false;
            btnStop.disabled = true;
            selectAnimation.disabled = false;
        }
    }

    function changeAnimationText() {
        animation = ANIMATIONS[selectAnimation.value];
        txtShowAnimation.value = animation;
        currentAnimationText = txtShowAnimation.value;
    }

    function startAnimation() {
        enabdisabControl('start');
        if (timer === null) {
            timer = setInterval(changeFrame, delay);
        }
    }

    function changeFrame() {
        var animFrames = currentAnimationText.split('=====\n');
        txtShowAnimation.value = animFrames[indexFrame];
        indexFrame++;
        //infinite loop
        if (indexFrame === animFrames.length) {
            indexFrame = 0;
        }
    }

    function stopAnimation() {
        enabdisabControl('stop');
        if (timer !== null) {
            clearInterval(timer);
            timer = null;
        }
        indexFrame = 0;
        txtShowAnimation.value = currentAnimationText
    }


    function changeFontSize() {
        txtShowAnimation.style.fontSize = FONTSIZES[selectFont.value] + 'pt';
        //alert(selectFont.value + 'pt');
    }

    var FONTSIZES = [];
    FONTSIZES["Tiny"] = "7";
    FONTSIZES["Small"] = "10";
    FONTSIZES["Medium"] = "20";
    FONTSIZES["Large"] = "16";
    FONTSIZES["Extra Large"] = "24";
    FONTSIZES["XXL"] = "32";

    function changeDelay() {

        if (chkSpeed.checked) {
            delay = 50;
            clearInterval(timer);
            timer = setInterval(changeFrame, delay);
        } else {
            delay = 250;
            clearInterval(timer);
            timer = setInterval(changeFrame, delay);
        }
    }

};