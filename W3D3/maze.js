$(document).ready(function () {
    "use strict";

    let touch = false;
    let playing = false;

    $("#maze .boundary").off();
    $("#end").off();
    $("#start").click(play);

    function play() {
        playing=true;
        $(".boundary").mouseover(fault);
        $("#maze").mouseleave(fault);
        $("#end").mouseover(endGame);
        $("#start").click(reset);
    }

    function fault() {
        if(playing) {
            touch = true;
            $(".boundary").addClass("youlose");
        }
    }

    function endGame() {
        if (playing) {
            let ms = "";
            if (!touch) {
                ms = "You win! :3";
            } else {
                ms = "Sorry, you lost :[";
            }
            $("#status").text(ms);
            $("#maze").off();
            playing=false;
        }
    }

    function reset(){
        touch = false;
        $(".boundary").removeClass("youlose");
        $("#status").text("Click the S to begin");
        playing();
    }
});