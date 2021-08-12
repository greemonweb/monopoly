//Variables
var board, squareDimension, squares, squaresLength, posTop, posLeft, questionsBox, treasuresBox
//Methods
$(window).on('load', () => {
    console.log("Game laoding...")
    board = $("#board")
    squareDimension=50
    squares = new Array(40)
    squaresLength = squares.length
    posTop = 500
    posLeft = 500
    createSquares()
})

function createSquares() {
    let actualSquare
    for (let i = 0; i < squaresLength; i++) {
        actualSquare = `<div id="${i}" class="square">${i}</div>`
        squares[i] = actualSquare
        board.append(actualSquare)
    }
    questionsBox = `<div id="questions-box" class="central-boxes"></div>`
    board.append(questionsBox)
    treasuresBox = `<div id="treasures-box" class="central-boxes"></div>`
    board.append(treasuresBox)
    questionsBox=$("#questions-box")
    questionsBox.css('top',365+"px")
    questionsBox.css('left',345+"px")
    questionsBox.css('transform','rotate(-45deg)')
    treasuresBox = $("#treasures-box")
    treasuresBox.css('top',115+"px")
    treasuresBox.css('left',100+"px")
    treasuresBox.css('transform','rotate(-45deg)')
    positionSquares()
}

function positionSquares() {
    let pos
    console.log(squaresLength);
    for (let i = 1; i < squaresLength; i++) {
        pos = Math.floor((i-1) / 10)
        console.log("pos:" + pos);
        switch (pos) {
            case 0:
                posTop-=squareDimension
                posLeft-=squareDimension
                break;
            case 1:
                posTop-=squareDimension*2
                break;
            case 2:
                posTop-=squareDimension
                posLeft+=squareDimension
                break;
        }
        $(`#${i}`).css('top', posTop+"px")
        $(`#${i}`).css('left', posLeft + "px")
    }
}