// "// text :" is how you leave a comment in Javascript: 
//Functions, Methods, and Varaibles:
console.log ("-All results will be seen in a browser-");
//function: basic output to console
    //console = function
console.log('-Hello World!-');

//Varaible:
// Basic Varaible Builds: 
    // Var | call sign for varaible: 
    // stringText | name of that varaible, use camelCase for names:
    // = 'text' | the items inside of a varaible:
    // define = declares a variable
var stringText  = "text";
console.log(stringText);

//Change varaible content basic:
    // Notes - Javascript acts inline so all functions happen in order:
        // This followin change is force on all items after but not before:
stringText = "Changed Text";
console.log(stringText);

// Other types of varaibles: Let, Const:
console.log('Let & Const');

// Let: Newest version of varaible : 
    // Use only with latest software, not good for old items:
    // The NEW standard: declares a block-scoped local variable
    // is camelCase
let lastName = 'Sizemore';
console.log(lastName)
// the blocked scope section allows the let to stay as it original vaule even after functions and computations add its work: 
//Allowing for continued use after items run.

// Const: unchanging varaibe
//use UPPER_CASE_SNAKE
const CONSTANT = 'This can not be changed';
console.log(CONSTANT);

// Primitive Data Types:
// Numbers, boolean,floating point number, null, character, strings
console.log( "integer, floating point number, null, character,  boolean, string, undefined");

// let number:
    //Notes: Otherwise known as an interger.
    // decimal numbers are know as floating-point numbers
let number = 25;
let float = 1.25;
console.log(number);
console.log(float);

// let Null:
    // Null is a non defined vaule
let null1 = null;
console.log(null1);
// let boolean:
    // These varaibles contian equations and can do things:
    //This boolean concatenates:
let boolean = (stringText + number);
console.log(boolean);
// let String:
// see the first var in this doc.
console.log(stringText);

// Complex data types:
// Array, objects
console.log( "Array, objects");
// let Array:
    // array is build with a 0 basic start: 
    // This case array1 is O in regards to how to call it for console:
    // To call out all items in the array simple call it forward:
    // to call out a specific item us the arrays name and the location it is in:
    // [] | the square brackets define array info, calls and tags
let basicArray =['array1','array2','array2','array2'];
console.log(basicArray);
console.log(basicArray[0]);
// let Object:
    // Objects hold many parts and each can be called out directly
    // to call parts use the name of the whole follewed by a "." and the next name:
    // Objects can hold other objects in them
let object = {
    name: 'object 1',
    type: 'Javascript',
    file: 'app.js',
};
// The following can be typed into an console and output is path: 
object.name
object.type
object.file
console.log(object);
console.log(object.name, object.type);
//Bigger objects inside of object:
    // objects can contain other objects over and over again:
    // console seems to re organize tags in alpha order:
    // {} | curly brackets, braces are used for object create and block code
let places = {
        state: 'GA',
        city: 'Atlanta',
        street: 'Peachtree',
        house:'123',
        residents: {
            pet1:'Susan',
            father:'Al',
            daughter:'Megan',
            son:'Paul',
            pets:{
                pet1: 'ralphie',
                pet2: 'tweedie',
            }
        }
    };
console.log(places)
console.log(places.city,places.residents.mother);

// Push and Pop: Functions 101:
    // Notes there are alot more functions:
    // unshift and slice or two options that need research:
console.log('-Push & Pop functions-');
// Push:
    // adds items to the end:
let push =['push0','push1','push2','push3'];
console.log(push);
console.log(push[5]);
push.push('push4');
console.log(push);
console.log(push[5]);
//Pop:
    // Pop removes an item  off from the end:
let pop =['pop1','pop2','pop3','pop4'];
let pop1 = pop.pop();
console.log(pop);
console.log(pop[3]);
console.log(pop1);
console.log(pop1[2]);

//Operator - equation based process:
    //Strings and Numbers can be used to together as long concat (join:
console.log('-Operators!-');
let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;
console.log(b)
console.log(c);
console.log(d);
console.log(e);
b+=a; //
c*=a;
d/=a;
e-=a;
console.log(b)
console.log(c);
console.log(d);
console.log(e);

b++;
console.log(b);

let name1 = 'blake ';
let name2 = 'sizemore';
let name3 = name1 + name2;
console.log(name3);
let name4 = name3 - name2;
console.log(name4);
let not = name3 == a;
console.log(not);
let is = name3 == name3;
console.log(is);
console.log('-end-');

//Conditional Statements;
console.log('-Conditional Statements-')
//if statment:
let val = 51;
    if(val == 51) {
        console.log('true');
    }
console.log('-end-, above output should read as true');
//if-else statement
let val2 = 51;
    if(val2 == 51) {
        console.log('true');
    }else if(val2>50 && val2 <100) {
        console.log('Between 50 and 100');
    }else {
        console.log('false');
    }
    console.log('-end-');
// If - else if - else
let val3 = 51;
    if(val3 == 51) {
        console.log('true');
    }else if(val3>50 && val3 <60) {
        console.log('Between 50 and 100');
    }else {
        console.log('false');
    }
    console.log('-end-')
// Switch - case - break:
let val4 =  52;
    switch (val4) {
        case 20: 
        case 53:
            console.log(53)
            break;
        default:
            console.log('default')
            break;
    }
console.log('-end-');

// Loops:
// Loops will run until they hit a limit of accurate balance:
let loops = ['loop0','loop1','loop2','loop3','loop4','loop5',]
for(let i = 0; i < 100; i++){
    console.log(i)
}
console.log('-end- for loop 100');
//for loops:
// break acts as an exit:
// this for loop runs through the array shows consoles each item until it hit the array item tallied "loop2";
for(let i = 0; i <= loops.length; i++){
    console.log(i);
    if(loops[i] == 'loop2') {
        console.log('found it!');
        break;
    }
}
console.log( '-end- for')
//while loop:
// runs as long as a specific condition is met.
// can go to infinity if built incorrectly:
//while ( condition ) {:
    // run code here:
//}:
    // as long as the lets vaule is less than the array length than it will console log each array item.:
    // This one runs till it reachs the arrays length.:

// let loops = ['loop0','loop1','loop2','loop3','loop4','loop5',]:    
let count = 0;
while(count < loops.length) {
    console.log(loops[count]);
    count++;
}
//do while loop:
//for ( init expression; condition ; increment Expression) {
// execute this code
//}
let number1 = 0;
do { console.log
} while (false) {
while(count < loops.length) {
    console.log(loops[count]);
    count++;
}
}
// Function:
// Most important part of Javascript:
    // function | function call tag:
    // add | name of function:
    // (num1, num2) | pereamiters:
    // { console}:

// Function declaration
function multiply(arg1, arg2) {
    return arg1 * arg2;
}
// Function usage
let result = multiply(2, 4);


console.log(add(5, 22));

function add(num1, num2) {
    return num1 + num2;
}
function sub(num1, num2) {
    return num1 - num2;
}
// Javascript works by hoisting first
    // hoisting is pulls all var and functions up first:
    // Process are run after hoisting and runs inside out:
    // functions are reusable even inside of them selves:

let example = sub(add(2,3), sub(5,3));
console.log(example);

