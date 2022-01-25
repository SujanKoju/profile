$(document).ready(function () {
    let emptySquare = {row: 300, column: 300}

    $("#puzzlearea div").click(puzzleClickHandler);
    $("#puzzlearea div").hover(hoverHandler);
    $("#puzzlearea div").mouseleave(mouseOverHandler);
    $("#shufflebutton").click(shuffleClickHandler)

    function shuffleClickHandler() {
       $("puzzlearea div").each(function (index,element){

       })
    }

    function mouseOverHandler() {
        $(this).removeClass("movablepiece");
    }

    function hoverHandler() {
        let tempX = $(this).data("x");
        let tempY = $(this).data("y");
        if (currentBlockIsNeighbourToEmptyBlock(tempX, tempY)) {
            $(this).addClass("movablepiece");
        }
    }

    function currentBlockIsNeighbourToEmptyBlock(tempX, tempY) {
        if (tempX === emptySquare.row && (tempY + 100 === emptySquare.column || tempY - 100 === emptySquare.column)) return true;
        else if (tempY === emptySquare.column && (tempX + 100 === emptySquare.row || tempX - 100 === emptySquare.row)) return true;
        else return false;
    }

    function puzzleClickHandler() {
        let tempX = $(this).data("x");
        let tempY = $(this).data("y");
        if (currentBlockIsNeighbourToEmptyBlock(tempX, tempY)) {
            $(this).css("left", emptySquare.row + "px");
            $(this).css("top", emptySquare.column + "px");
            $(this).data("x", emptySquare.row);
            $(this).data("y", emptySquare.column);
            emptySquare.row = tempX;
            emptySquare.column = tempY;
        }
    }

    let init = function () {
        // initialize each piece
        $("#puzzlearea div").each(function (index, element) {
            // calculate x and y for this piece
            const x = ((index % 4) * 100);
            const y = (Math.floor(index / 4) * 100);
            // set basic style and background
            element.className = "puzzlepiece";
            element.style.left = x + 'px';
            element.style.top = y + 'px';
            element.style.backgroundImage = 'url("../resources/img/background.jpg")';
            element.style.backgroundPosition = -x + 'px ' + (-y) + 'px';
            // store x and y for later
            $(this).data("x", x);
            $(this).data("y", y);
        })
    };
    init();


});
