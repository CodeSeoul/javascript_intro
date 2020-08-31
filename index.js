// This is a single line comment and won't be run
/*
This is a multi-line comment that will not be run
*/
console.log('hello world!');
/*
x = 12
y = m*x + b
*/
const thisNewVariableName = 'this can\'t use single quotes';
let thisIsAVariableThatCanChange = 'this will change';
console.log(thisNewVariableName);

// This does not work. Cannot assign to constant.
// thisNewVariableName = 'some other text';
thisIsAVariableThatCanChange = 'some other text';
thisIsAVariableThatCanChange = thisIsAVariableThatCanChange + ' even more text!';
console.log(thisIsAVariableThatCanChange);

// This is the same as "thisIsAVariableThatCanChange = thisIsAVariableThatCanChange +"
thisIsAVariableThatCanChange += ' MOAR TEXT!';
console.log(thisIsAVariableThatCanChange);

// This will convert the number 1 to a string and add it to the end of the existing string
thisIsAVariableThatCanChange += 1;
console.log(thisIsAVariableThatCanChange);

// This produces NaN (Not a Number) -- this is bad and i hate it
thisIsAVariableThatCanChange *= 2;
console.log(thisIsAVariableThatCanChange);

/* More data types
'orgorbgd' string
124423 number
true
false
^ boolean ---- const myBool = true;
null
undefined
arrays
objects
*/

// Now for functions!
// function keyword
// function name
// parenthesis
// curly brackets
// inside curly brackets is the logic
function printHello() {
    console.log('hello');
}

printHello();

// in between parentheses are the inputs
// inputs are also parameters
function add(a, b) {
    // console.log('a: ' + a);
    // console.log('b: ' + b);
    return a + b;
}
// In between the curly brackets is called a block

// same as --- const sum = 2 + 3;
const sum = add(2, 3);
console.log('sum: ' + sum);

add(2);

/*
Different function syntaxes:
function name(param) {}
const name = function(param) {};
const name = (param) => {};
*/

// Conditions!
// If what's inside the parentheses is true, do what's inside the block
if (true) {
    console.log('true');
}
// this will do nothing
if (false) {
    console.log('false is true????');
}

let myNumber = 5;
const numberLimit = 10;
if (myNumber < numberLimit) {
    console.log('5 is less than 10');
}
/*
The above is called a comparison
There are multiple comparison "operators"
< less
> greater than
>= greater than or equivalent
<= less than or equivalent
!= not equivalent (fuzzy)
!== not equivalent (strict)
== equivalent (fuzzy)
=== equivalent (strict)
*/
if (5 == '5') {
    console.log('fuzzy matching');
}
if (5 === '5') {
    console.log('strict matching');
}
/*
Truthyness
Null false
Undefined false
Empty string false
0 false
NaN false
Empty array true -- but not when compared
Empty object true -- but not when compared
Everything else true (in my imperfect knowledge)
*/
if ('0') {
    console.log('non-empty string');
}
if (0.0) {
    console.log('0.0 is true????');
}
if (0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000001) {
    console.log('tiny non-zero value');
}

// && means "and"
if (true && false) {
    console.log('true and false is false');
}
// || means "or"
if (true || false) {
    console.log('testing or');
}
// ! means not
if (!true) {
    console.log('not true is false');
}
// ^ means XOR -- -this is more advanced
if (5 === 5 ^ null) {
    console.log('XOR?!?!?');
}

// You can use parentheses to group conjunctions
if (true && (false || true)) {
    console.log('compound conjunctions');
}

// Nifty trick
const myFalsyVariable = null;
const myVariableWithADefaultValue = myFalsyVariable || 5;
console.log('default variable: ' + myVariableWithADefaultValue);

if (false) {
    console.log('won\'t happen');
} else {
    console.log('demonstrating else');
}
if (true) {
    console.log('else not running');
} else {
    console.log('this will not run because the above was true');
}

if (false) {
    console.log('false');
} else if (true) {
    console.log('else if');
} else { 
    // we don't always need an else
    console.log('because at least one of the above was true, this will not run');
}

if (5 < 10) {
    if (5 > 2) {
        console.log('5 is less than 10 but greater than 2');
    } else {
        console.log('nested else');
    }
}

// Arrays!
const myArray = [2, 5, true, 'lol', NaN, null];
console.log(myArray);

// in programming, we start counting at 0. 0 will give us the first item in the array
console.log(myArray[0]);

console.log(myArray[100]);
console.log(myArray.length);
myArray[0] = 10;
console.log('array update: ' + myArray);
myArray[100] = 'i hate you javascript';
console.log('100th value: ' + myArray.length);
myArray[100] = undefined;
console.log('array undefined value: ' + myArray.length);

const arr = ['a', 'b', 'c'];
// push adds to the end of the array and returns the new length
const arrNewLength = arr.push(10);
console.log('push 10: ' + arr);
console.log('new length: ' + arrNewLength);
// pop removes from the end of the array and returns the new value
const myPoppedValue = arr.pop();
console.log('popping: ' + arr);
console.log('popped value: ' + myPoppedValue);

let counter = 0;
// while (condition) { code to repeat }
// while the condition is true, the code inside the block will be repeated
while (counter < 5) {
    console.log('counter: ' + counter);
    counter += 1;
    // could also write counter++
}

// for (run before loop starts; condition for continuing running; what to do at the end of each run )
// i++ means increase i by 1
for (let i = 0; i < arr.length; i++) {
    console.log('i: ' + i + ' --- arr[i]: ' + arr[i]);
}

for (let myArrayItem of arr) {
    console.log('myArrayItem in arr: ' + myArrayItem);
}

// Objects
const myObject = {
    objectVariable: 'a',
    anotherVariable: 200,
    omgAFunction: function() { console.log('FUNCTION!'); }
};
console.log('my object');
console.log(myObject);

console.log('my object variable: ' + myObject.objectVariable);
myObject.omgAFunction();

const author = {
    name: 'Writer McWriteyFace',
    age: 45,
    introduceSelf: () => { console.log('Hi, I\m Writer McWriteyFace'); },
    sayBye: function() { console.log('kthxbye'); }
}

const favoriteAuthors = [author];
for(let favAuthor of favoriteAuthors) {
    if (favAuthor.age < 80) {
        favAuthor.introduceSelf();
    } 
}

// This is where the class ended. The following material is not in the video and is standalone.

// Errors
/*
This was actually missing from the outline, but it's very important.

Errors, believe it or not, are your friend. They help you find problems with your code.
They give you the chance to recognize something broke and to allow the program to 
recover from it. Good error handling is the sign of a skilled engineer. You want to
be one of those, right?
*/

const myError = new Error('it broke!');

/*
We're actually using a class here, but please ignore that for now. :) This is how to
create a generic error with a custom message. Creating errors is helpful if you want
to show that some input to your program is not right or if the user did something
out of order or basically any "exceptional" behavior. You'll find "exception" and
"error" are near-synonyms in programming. In this context, "exceptional" isn't a good
thing. It means it's an "exception" to the normal rules of the program running.

So how can we use this?

Errors are often meant to be "thrown". They can also be used in callback functions,
but we'll cover that later.

Throwing an error means that something is horribly wrong and that the program should
stop running along its normal path. It means something broke, we should stop what
we're doing, and handle what broke.
However, errors should be expected. We should anticipate them. 
That's where try/catch can help. If you think some code could throw an error,
you can put it inside a "try" block. Following the try block, you want a "catch" 
block that will be run if the error happened. Let's demonstrate.
*/

try {
    throw myError;
} catch (err) {
    console.log('error, but keep going -- ' + err);
}

/*
Above, we threw an error, which would normally cause the program to stop. 
However, we placed it inside a "try" block and handled it inside a 
"catch" block. We're then able to do whatever handling or cleanup
necessary inside the catch block. The error gets stored into a new 
variable that can be found inside the parentheses, in this case, "err".

There's also one more component to try/catch: finally. Catch only runs if 
there is an error. A "finally" block will run whether an error occurs or not.
*/

try {
    console.log('try nothing');
} catch (err) {
    console.log('no error');
} finally {
    console.log('finally')
}

try {
    throw myError;
} catch (err) {
    console.log('caught error');
} finally {
    console.log('finally with error');
}

/*
So now you know how to create errors, how to throw them to interrupt 
the flow of the program, and how to catch them to handle when things go wrong.
*/

// Callbacks
/*
Functions can act similar to variables. They can be passed as parameters. 
In this way, we can provide custom functions to other functions to run whenever they want.
*/
const callbackFunction = () => {
    console.log('callback executed');
};

const countThenCallback = (callback) => {
    for (let i = 0; i < 3; i++) {
        console.log('count ' + i);
    }
    callback();
};

countThenCallback(callbackFunction);
/*
To trace the logic happening here...
We called countThenCallback. We gave callbackFunction to it as a parameter. 
This allows countThenCallback to execute the callbackFunction. 
This is useful due to flexibility. See below:
*/

const alternateCallback = () => {
    console.log('alternate callback');
};

countThenCallback(alternateCallback);

/*
This allows us to use countThenCallback with any other function we want. 
This is useful in cases where you want to execute something after a delayed operation.
A delayed operation could be opening a file or running a database query or
calling an API or even waiting for user input.

You can also setup callbacks with parameters. 
Often when we use callbacks, we use "anonymous functions". That is, we use
functions that are defined for only one use and not stored anywhere.

This is a common pattern:
*/

const generateData = (callback) => {
    const data = [10, 9, 6, 78, 45, 6234, 5, 45673, 457, 37];
    const error = null; // could do something like new Error('oh no!');
    callback(data, error);
};

/* Here, (data, error) => {} is an anonymous function. 
It's not named anything or stored anywhere. It's only used for this callback
*/
generateData((data, err) => {
    if (err) {
        throw err;
    }
    console.log('got data! ' + data);
});
/*
This pattern is used for most input/output operations,
like reading files or querying databases. It's often that you need
to use some data after some time, and you need to handle
an error if it happened. This pattern covers this case.
*/

// Promises
/*
A promise is like a callback but fancier. Like callbacks, they 
allow some code to be run at a later point in time. Really, they're
the same, but the syntax is just different. Promises allow you to do 
logic in a way without nesting blocks within blocks within blocks 
within blocks within..... you get it. This used to happen often and
even had a name: callback hell. Promises promise to keep you out of
callback hell. :)


When you run this, you may notice that a log statement you haven't
seen yet got printed... We'll explain why later. From now on, some
of your logging may be out of order, so please have some patience
*/

const returnPromise = () => {
    // This is a way to create a promise that finishes successfully
    return Promise.resolve('first promise');
}

/*
When a function returns a promise, we can use special functions
that promises have. Specifically, we can use "then" and "catch".
Using "then" will allow us to use data from the promise
when it finishes successfully. Using catch is for errors.
*/
returnPromise().then((data) => {
    console.log(data);
    return Promise.resolve('second promise');
}).then((data) => {
    console.log(data);
    throw new Error('Promise error!');
}).catch((err) => {
    console.log('promise catch --- ' + err);
});
/*
There's something really important to know about this.
The timing of "then" and "catch" is unknown. These will
execute whenever the promise finishes (resolves or rejects). 
This means that code after your promise/then/catch can 
execute BEFORE your promise finishes. This can lead to 
some very strange and nasty behavior if you're not careful.

Here's different example of using a promise.
*/

new Promise((resolve, reject) => {
    if (1 > 2) {
        return reject(new Error('1 is greater than 2?!'));
    }
    resolve(true);
}).then(data => {
    console.log('full promise result: ' + data);
});
/*
This pattern is useful if you're working with something that
uses callbacks, but you want to use a promise. You can put
the function call inside the Promise's anonymous function
above, then you can resolve or reject inside your callback.
Voila, your callback is now a promise.
*/

// Async / Await
/*
So wait if you want to the program to wait until your
promise finishes? That's what async / await is for.

If you use the "async" keyword before a function name
or parameters, the function will automatically return
a promise, and you can now use the "await" keyword
inside it.
*/

const asyncFunc = async () => {
    return await Promise.resolve('async/await');
};

asyncFunc().then(data => {
    console.log(data);
});
/*
Be aware that I've actually done A Bad Thing™ here. Usually,
when you use "await" with a Promise, you should wrap it in
a try block. However, for purposes of clarity, I omitted it.
You should _always_ wrap it in a try block. I get very angry
with my team members when they don't do this. If a promise
rejects when awaited, the resulting error can be very difficult
to understand sometimes.
*/

// Modules
/*
Modules are an absolute must for any sufficiently complex program.
Essentially, modules are just separate files with JavaScript code
inside them. They allow you to split your program into multiple files,
making it easier to understand and organize things.

To see how it works, first, look at moduleExample.js
*/

/*
Welcome back! Let's bring our module into this file:
*/

const moduleExample = require('./moduleExample');
/*
The "require" keyword is one way we can pull in a function. This is
actually the older way, but it's arguably most compatible right now.
The text parameter given to require is the name of the module. In
this case, we're pulling in a module from the same folder, so we 
use a "./" before the name to indicate the current folder. Lastly,
we specify the module file's name without the .js extension.

Now, everything exported from the module is available here.
*/

moduleExample.printFromModule('required!');
/*
Note that this may appear in a strange place due to promise things.
We used the above function from the moduleExample module. You can
use this to keep your code separated and organized cleanly. 

You can also import directories if they contain an index.js file, 
but that's a little beyond what we'd like to do here.

Above, we used "require", but it's also possible to use "import".
It looks like this:
*/

// import moduleExample from './moduleExample';
/*
Except in this specific environment, you actually can't. NodeJS 
currently only supports "require" as of this writing. However, if you're
doing things using Babel (way out of scope for now, see our metaprogramming
class later on), imports should work cleanly.

*** I've since learned there are ways to use import with NodeJS. You can
look it up separately if desired :) ***

Last thing to note: modules are "hoisted" to the top. That is, no matter
where you write "require(...)", the statement will be executed as if it
was one of the first things to run. This is good to know if the module is
designed to do something when it's first pulled in. However, this is more 
of a gotcha, and you shouldn't need to think about it too often.
*/

// Classes
/*
Classes are kind of a pull-in from Java-land. Class here doesn't mean like
a lesson. It's more like a classification. You can think of classes kind
of like objects that you can clone and configure easily. In reality, they're
actually functions that create consistent objects for you, but we won't get
that deep. Let's take a look.
*/
class Car {
    constructor(color) {
        console.log('Building a car');
        this.countWheels = 4;
        this.color = color;
    }

    drive() {
        console.log('Vrooooom on ' + this.countWheels + ' wheels!');
    }
}
/*
This is a class definition. It starts with the "class" keyword
followed by the name of the class and then a block. Inside the
block, you can define functions. There's a special function called
"constructor". This is executed when you use the class. You can
think of a class like a blueprint. When you want to use it, you 
can create an object from it. The object is like a building constructed
from the blueprint. Let's try it.
*/

const myCar = new Car('red');
/*
Hey! That "new" word looks familiar. This is how we can create an
object from a class. This "new ClassName(params)" automatically
calls the constructor of the class and returns an object. If you
check your console, you should see that "Building a car" was 
printed. This shows that the constructor was called when we created
the car from the class.

Note in the constructor that we used "this"...
*/
console.log('car color: ' + myCar.color);
/*
When you use "this" inside a class, it most often refers to the object
being created. So in the constructor, when we wrote "this.color = color",
it took the "color" parameter given to the constructor, and set it on the
objected created by the class. We can also use those functions we defined:
*/

myCar.drive();

/*
You should see the text printed from the "drive" function inside the class 
definition. 

We can create any number of objects from our class:
*/

const carInventory = [];
for (let i = 0; i < 3; i++) {
    carInventory.push(new Car('shiny'));
}

carInventory[2].drive();
/*
Instead of needing to define each car object individually, we can just define
a class and create new objects from that class anytime we want. So shiny.
*/

// Wrap-up
/*
I hope this was helpful for you! We weren't able to cover quite everything
here, but this should be enough to help you get started writing simple
toy programs. If you check out our class on NodeJS and/or metaprogramming,
you'll be more prepared to start full projects, building your own servers
or websites.

If you have more questions, need more support, or would like to give feedback,
join us on Discord at https://discord.gg/HFknCs8

Thanks for your time
*/
