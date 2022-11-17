var player = "o";

function changePlayer(){
    if(player == "o"){
        player = "x";
    }else{
        player = "o";
    }
}

function checkCells(cell1, cell2, cell3){
    if(cell1 == cell2 && cell2 == cell3 && cell1 != null){
        return true;
    }
    return false;
}

function checkWin(columns, rows, diagonals){
    for(const column of columns){
        if(checkCells(column[0], column[1], column[2])){
            return true;
        }
    }
    for(const row of rows){
        if(checkCells(row[0], row[1], row[2])){
            return true;
        }
    }
    for(const diagonal of diagonals){
        if(checkCells(diagonal[0], diagonal[1], diagonal[2])){
            return true;
        }
    }
}

function isWinning(){
    let cells = document.getElementsByClassName("cell");
    let game = [];
    for(const cell of cells){
        let cellChild = cell.firstChild;
        if(cellChild != null){
            game.push(cellChild.className);
        } else {
            game.push(null);
        }
    }
    let rows = [[game[0], game[1], game[2]],
                [game[3], game[4], game[5]],
                [game[6], game[7], game[8]]]
    let columns = [[game[0], game[3], game[6]],
                [game[1], game[4], game[7]],
                [game[2], game[5], game[8]]]
    let diagonals = [[game[0], game[4], game[8]],
                    [game[2], game[4], game[6]]];
    
    return checkWin(columns, rows, diagonals);
}

function play(div){
    if(player == "o"){
        div.innerHTML = "<span class='circle'></span>";
    } else {
        div.innerHTML = "<span class='cross'><span class='crossLeft'></span><span class='crossRight'></span></span>";
    }
    if(isWinning()){
        let winParagraph = document.getElementById("win");
        let restartButton = document.getElementById("restart");
        winParagraph.innerHTML = "Le joueur " + player + " a gagné !";
        restartButton.innerHTML = "Recommencer";
    }
    changePlayer();
}