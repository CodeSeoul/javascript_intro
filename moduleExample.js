/*
This is a module. You can write any code you like here, just like
any other JavaScript file. If you want to make variables or
objects or functions accessible from this file, you want to
export them like below.
*/

module.exports = {
    moduleItem: 'text',
    printFromModule: (text) => {
        console.log('from module: ' + text);
    }
}

/*
We're exporting an object containing a variable and a function.
There's actually two ways to export things. You can use 
"module.exports = " like above, or you can define your variable
or function as "exports.myVariable = "

Let's go back to index.js
*/