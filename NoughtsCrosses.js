var player1 = {};
var player2 = {};
var playingField;
var movesLeft;
var imgBlank;
var imgNought;
var imgCross;
var currentPlayer;
var gameWon;

function setupGame() {

    movesLeft = 9;
    player1Won = false;
    player2Won = false;
    draw = false;
    imgBlank = new Image();
    imgBlank.src = "BlankTile.JPG";
    imgCross = new Image();
    imgCross.src = "Cross.JPG";
    imgNought = new Image();
    imgNought.src = "Nought.JPG";
    gameWon = false;
    var p1mark = prompt("Kółko czy kRzyżyk? K/R");

    if (p1mark === "K") {
        player1.mark = "O";
        player2.mark = "X";
        player1.imgSrc = imgNought.src;
        player2.imgSrc = imgCross.src;
    }

    if (p1mark === "R") {
        player1.mark = "X";
        player2.mark = "O";
        player1.imgSrc = imgCross.src;
        player2.imgSrc = imgNought.src;
    }
    
    player1.winValue = 3;
    player2.winValue = 30;
    player1.val = 1;
    player2.val = 10;
    currentPlayer = player1;
    
    playingField = new Array(3);
    for (var i = 0; i < 3; i++) {
        playingField[i] = new Array(3);
    }

    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {

            playingField[i][j] = 0;
        }
    }
}

function printField() {

    var printout = "";
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            printout = printout + playingField[i][j] + "   ";
        }
        document.write("<br>");
        document.write(printout);
        document.write("<br>");
        printout = "";
    }
}

function handleDraw() {
    alert("Remis");
}

function handleVictory(player) {
    gameWon = true;
    alert("Wygrały " + player.mark);
}

function makeMove(row, column, DOMelement) {

    if (playingField[row][column] === 0) {

        playingField[row][column] = currentPlayer.val;
        DOMelement.src = currentPlayer.imgSrc;
        checkVictory();
        if(gameWon){
            
            return;
        }
        movesLeft--;
        
        if (movesLeft === 0) {
            handleDraw();
        }
    }

    if (currentPlayer === player1) {
        currentPlayer = player2;
        return;
    }
    if (currentPlayer === player2) {
        currentPlayer = player1;
        return;
    }
}

function checkVictory() {

    var sum = 0;
    for (var r = 0; r < 3; r++) {
        for (var c = 0; c < 3; c++) {
            sum += playingField[r][c];
        }
        
        if (sum === currentPlayer.winValue) {
            handleVictory(currentPlayer);
            return;
        }
            
        else{
            sum = 0;
        }
    }
        sum = 0;

    for (var c = 0; c < 3; c++) {
        for (var r = 0; r < 3; r++) {
            sum += playingField[r][c];
            }
            
            if (sum === currentPlayer.winValue) {
            
            handleVictory(currentPlayer);
            return;      
            }
            
            else{
                sum = 0;
            }       
        }
        
        sum = 0;
        
        for(var d = 0; d < 3; d++){
            
            sum += playingField[d][d];
        }
        
        if (sum === currentPlayer.winValue){
            
            handleVictory(currentPlayer);  
            return;
        }
        else{
            
            sum = 0;
        }  
        sum = 0;
        sum = playingField[0][2] + playingField[1][1] + playingField[2][0];
        
        if (sum === currentPlayer.winValue){
            
            handleVictory(currentPlayer);
            return;
        }
        return;
 }

function onTileClick(element) {

    var id = element.getAttribute("id");
    var row = id.substring(3, 4);
    var col = id.substring(4);
    row = Number(row);
    col = Number(col);
    makeMove(row, col, element);
}

setupGame();

