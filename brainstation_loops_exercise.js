// exercise #1 //

for (var i = 1; i <= 100; i++) {
    if (i % 15 == 0) {
        console.log("fizzbuzz");
    }
    else if (i % 3 == 0) {
        console.log("buzz");
    }
    else if (i % 5 == 0) {
        console.log("fizz");
    }
    else {
        console.log(i);
    }
}

// exercise #2 //

var board = "";
var rows = 0;

while (rows < 8) {
    var cols = 0;
    var previoushash;

    if (rows % 2 === 0) {
        previoushash = false;
    }
    else {
        previoushash = true;
    }

    while (cols < 8) {
        
        if (previoushash) {
            board += " ";
        }
        else {
            board += "#";
        }

        previoushash = !previoushash;

        cols++;
    }

    board += "\n";

    rows++;
}

console.log(board);