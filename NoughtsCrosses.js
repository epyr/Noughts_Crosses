/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var player1;
var player2;
var playingField;
var movesLeft;
var player1Won;
var player2Won;
var draw;


function setupGame(){

player1 = prompt("Kółko czy kRzyżyk? K/R");
if (player1 === "K"){
    
    player1 = "O";
    player2 = "X";
}

if (player1 === "R"){
    
    player1 = "X";
    player2 = "O";
}

playingField = new Array(3);

for (var i = 0; i < 3; i++){
    
    playingField[i] = new Array(3);
}


for (var i = 0; i < 3; i++){
    
    for (var j = 0; j < 3; j++){
        
        playingField[i][j] = ".";
        
        }
    }
    
    movesLeft = 9;
    player1Won = false;
    player2Won = false;
    draw = false;
}

function printField(){
    
    var printout = "";
    
    for( var i = 0; i < 3; i++ ){
        
        for (var j = 0; j < 3; j++){
            
            printout = printout + playingField[i][j];
        }
        
        document.write(printout);
        document.write("<br>");
        printout = "";
        
    }


}

    function makeMove(player){
        row = prompt("Podaj wiersz (1 - 3)");
        row--;
        column = prompt("Podaj kolumnę (1 - 3)");
        column--;
        if( playingField[row][column] !== "."){
            
            makeMove(player);
        }
        
        else{
            
        playingField[row][column] = player;
        movesLeft--;
        document.write("<br>");
        printField();
        document.write("<br>");
        document.write("<br>");
            
        }
        
    
    }



function checkDraw(){
    
    return (movesLeft === 0);
}

function checkVictory(player){
    
    

    var consecutive_marks = 0;
    win = false;
    
    //check horizontal
    
    
    for (var r = 0; r < 3; r++){
        
        for (var c = 0; c < 3; c++){
            
        
            if (playingField[r][c] === player){
            
                consecutive_marks++;
        
            }
            
        }
      
      
     if (consecutive_marks === 3){
          
          return true;
      } 
          
    else{ 
          consecutive_marks = 0;
      }
   }
   
   
   
   // chceck vertical
   
   consecutive_marks = 0;
   
   for (var c = 0; c < 3; c++){
       
       for (var r = 0; r < 3; r++){
           
           if (playingField[r][c] === player){
               
               consecutive_marks++;
           }
       }
       
       if(consecutive_marks === 3){
           
           return true;
       }
       
       else{
           
           consecutive_marks = 0;
       }
       
   }
   
   //check diagonal top left to right bottom
   
   consecutive_marks = 0;
   for(var d = 0; d < 3; d++){
       
       if (playingField[d][d] === player){
           
           consecutive_marks++;
       }
       
       if (consecutive_marks === 3){
           
            return true;
       }
       
   }
   
   consecutive_marks = 0;
   //check diagonal top right to bottom left
   for (var r = 0; r < 3; r++){
       
       for (var c = 2; c >= 0; c--){
           
           if(playingField[r][c] === player){
               
               consecutive_marks++;
           }
           
           if (consecutive_marks === 3){
               
               return true;
           }
       }
       
       consecutive_marks = 0;
   }
   return false;
}
  




setupGame();
// Game loop

while(true){
    
    makeMove(player1);
    
    if(checkVictory(player1)){
        player1Won = true;
        break;
    }
    
    if (checkDraw()){
        draw = true;
        break;
    }
    
    makeMove(player2);
    if(checkVictory(player2)){
        
        player2Won = true;
        break;
    }
    
    if (checkDraw()){
        draw = true;
        break;
    }
    
    
}


if(player1Won){
        
        document.write("Wygrał gracz pierwszy");
 }
 
 
 
if(player2Won){
        
        document.write("Wygrał gracz drugi");
 }
 
 
 
if(draw){
        
        document.write("Remis");
 }
 
    
    
    
//
//playingField = new Array(3);
//
//for (var i = 0; i < 3; i++){
//    
//    playingField[i] = new Array(3);
//}
//
//
//for (var i = 0; i < 3; i++){
//    
//    for (var j = 0; j < 3; j++){
//        
//        playingField[i][j] = ".";
//        
//        }
//    }
//    
//  
//  playingField[1][2] = "O";
//  playingField[1][1] = "O";
//  playingField[1][0] = "O";
//
//
// 
// player1 = "X";
// player2 = "O";
// document.write(checkVictory(player2));
 




 
 
 


