$(document).ready(function () {
    let touchedWall = false;
    let startButtonClicked = false;

    $("#start").click(startGame);
    $("#end").mouseover(endGame);
    $('.boundary').mouseover(gameLost);

    function startGame() {
        $(".boundary").removeClass("youlose");
        touchedWall = false;
        startButtonClicked = true;
        $("#status").text("Move Toward E without touching maze !!");
        $("#maze").mouseleave(gameLost)
    }

    function endGame() {
        if (!touchedWall && startButtonClicked) {
            $("#status").text("Yahh , You Win !!")
        }
        if (touchedWall && startButtonClicked) {
            $("#status").text("Sorry , You  Lost!!!");
        }
        startButtonClicked = false;
    }

    function gameLost() {
        if (startButtonClicked) {
            $(".boundary").addClass("youlose");
            touchedWall = true;
            $("#status").text("Sorry , You  Lost!!!");
        }
    }

});
