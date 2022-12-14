// "// text :" is how you leave a comment in Javascript: 
//Functions, Methods, and Varaibles:
console.log ("-All results will be seen in a browser-");
//Method: basic out put to console
console.log('-Hello World!-');

//Varaible:
// Basic Varaible Builds: 
    // Var | call sign for varaible: 
    // stringText | name of that varaible, use camelCase for names:
    // = 'text' | the items inside of a varaible:
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
let lastName = 'Sizemore';
console.log(lastName)

// Const: unchanging varaibe
const constant = 'This can not be changed';
console.log(constant);

// Other var/let/const content:
// Numbers, boolean, Array, objects:
console.log( "Numbers, boolean, Array, objects:");

// Var number:
    //Notes: 
var number = 25;
console.log(number);

// Var boolean:
    // These varaibles contian equations and can do things:
    //This boolean concatenates:
var boolean = (stringText + number);
console.log(boolean);

// Var Array:
    // array is build with a 0 basic start: 
    // This case array1 is O in regards to how to call it for console:
    // To call out all items in the array simple call it forward:
    // to call out a specific item us the arrays name and the location it is in:
    // [] | the square brackets define array info, calls and tags
var basicArray =['array1','array2','array2','array2'];
console.log(basicArray);
console.log(basicArray[0]);

// Var Object:
    // Objects hold many parts and each can be called out directly
    // to call parts use the name of the whole follewed by a "." and the next name:
    // Objects can hold other objects in them
var object = {
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
    var places = {
        state: 'GA',
        city: 'Atlanta',
        street: 'Peachtree',
        house:'123',
        residents: {
            mother:'Susan',
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
var push =['push0','push1','push2','push3'];
console.log(push);
console.log(push[5]);
push.push('push4');
console.log(push);
console.log(push[5]);

//Pop:
    // Pop removes an item  off from the end:
var pop =['pop1','pop2','pop3','pop4'];
var pop1 = pop.pop();
console.log(pop);
console.log(pop[3]);
console.log(pop1);
console.log(pop1[2]);

//Operator - equation based process:
    //Strings and Numbers can be used to together as long concat (join:
console.log('-Operators!-');
var a = 1;
var b = 2;
var c = 3;
var d = 4;
var e = 5;
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

var name1 = 'blake ';
var name2 = 'sizemore';
var name3 = name1 + name2;
console.log(name3);
var name4 = name3 - name2;
console.log(name4);
var not = name3 == a;
console.log(not);
var is = name3 == name3;
console.log(is);
console.log('-end-');
//Conditional Statements;
console.log('-Conditional Statements-')
//if statment:
var val = 51;
    if(val == 51) {
        console.log('true');
    }
console.log('-end-, above output should read as true');

//if-else statement
    var val2 = 51;
    if(val2 == 51) {
        console.log('true');
    }else if(val2>50 && val2 <100) {
        console.log('Between 50 and 100');
    }else {
        console.log('false');
    }
    console.log('-end-');
// If - else if - else
    var val3 = 51;
    if(val3 == 51) {
        console.log('true');
    }else if(val3>50 && val3 <60) {
        console.log('Between 50 and 100');
    }else {
        console.log('false');
    }
    console.log('-end-')
// Switch - case - break:
    var val3 =  52;
    switch (val3) {
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

var loops = ['loop0','loop1','loop2','loop3','loop4','loop5',]
for(var i = 0; i < 100; i++){
    console.log(i)
}
console.log('-end-');
//for loops:
// break acts as an exit:
for(var i = 0; i <= loops.length; i++){
    console.log(i);
    if(loops[i] == 'loop2') {
        console.log('found it!');
        break;
    }
}
//while loop:
var count = 0;
while(count < loops.length) {
    console.log(loops[count]);
    count++;
}
//do while loop:
var number = 0;
do { console.log
} while (false) {}
while(count < loops.length) {
    console.log(loops[count]);
    count++;
}

// Function:
// Most important part of Javascript
    // function | function call tag
    // add | name of function
    // (num1, num2) | pereamiters
    // { console}
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

var example = sub(add(2,3), sub(5,3));
console.log(example);