// exercise #1 //
var name = "Kevin Zhao";
console.log("Hello " + name);

// exercise #2 //
var x = 1125;
var answer = x%2;
console.log(answer);

// exercise #3 //
var a = 5>3;
var b = 5<3;
var c = 7>3;
console.log(a);

// exercise #4 //
var aa = 5>3;
var bb = 5<3;
var cc = 7>3;
console.log(aa,bb,cc);

// exercise #5 //
var answer1 = 10 - 3 * 5/4 + 202 % 3;
var answer2 = 10 - ((3 * 5/4) + (202 % 3));
console.log(answer1);
console.log(answer2);

// exercise #6 //
var x = parseInt("Hello World");
console.log(x);

// diving deeper .match //
var re = "Brainstation"
var str1 = "I am a great Brainstation student";
var str2 = "I am a student";
console.log(str1.search(re));
console.log(str2.search(re));

// diving deeper .replace //
var string1 = "I am a Brainstation student";
var newstr = string1.replace(/Brainstation student/i, "Javascript Student");
console.log(newstr);

console.log('34' + 5);