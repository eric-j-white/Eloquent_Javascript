var board = "";
size = 4;

for (var rows = 0; rows <= size; rows += 1) {
    board = "";
    for (var columns = 0; columns <= size; columns += 1) {
        if (rows % 2 != 0) 
            if (columns % 2 != 0) 
                board = "#" + board;
            else
                board = " " + board;
        else 
            if (columns % 2 != 0) 
                board = " " + board;
            else
                board = "#" + board;
    }        
    console.log(board);
}