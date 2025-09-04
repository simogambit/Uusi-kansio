
alert("Hello world!"); // 
alert("Another hello world"); // 
alert("Still one more hello world"); // 

windows.alert()
documents.write()
console.log()

var x = 5;
var y = 6;
var z = x + y;
console.log(z);
alert(z);
document.write(z);

var x = 50; // 
var order = 'Beer'; // 
if (x > 50) {
document.write("He's over 50!" );
} else if (x <= 50 && x> 30){
document.write("Middle aged man, who ordered some "+order);
} else {
document.write("It seems you're bit underaged.");
}

var arr = [];
for (var i=0; i<15; i++) {
arr.push(Math.random());

}
console.log(arr);


function addNumbers(a, b) {
return a + b;

}
console.log(addNumbers(5, 10));


var person = {
firstName:"John",
lastName:"Doe",
age:50,
eyeColor:"blue"
};
console.log(person.age);