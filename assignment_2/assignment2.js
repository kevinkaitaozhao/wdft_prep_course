// Exercise #1
// Write your solution below

var triangle = "";

for (var i = 1; i <= 7; i++) {
    triangle += "#";
    console.log(triangle);
}

/* 
Write your explanation for Exercise #1 here
The main goal here is to create 7 rows of hashtags, with each row increasing by one hashtag as
you increase one row. To do this, I can first create 7 rows counting numerically 1-7 by setting
up a for loop, looping from 1-7. Then, to change those numbers to represent hashtags, I created
an empty triangle variable and additionally incremented with += "#".

Originally, I had the console.log(triangle) outside the for loop which was causing problems;
it created a single row of 7 hashtags. I later realized in order to increment from one row 
to the next, increasing by one hashtag each row, the console output has to be included in the
for loop.
*/





// Exercise #2
// Write your solution below

function isEven(number) {

    if (number % 2 == 0) {
        console.log('the number is even!')
    }
    else {
        console.log('the number is odd!')
    }
}

isEven(3);


/* 
Write your explanation for Exercise #2 here
I set up an if/else statement that shows if number is divided by 2 with no remainder, this
means the number must be even and isEven outputs 'the number is even!'. If the number
is divided by 2 with a remainder, this means the number must be odd and isEven function 
outputs 'the number is odd!'.
*/
