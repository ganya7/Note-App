var sqaure = (x) => {
    var result = x * x;
    return result;
};   //statemnet syntax of es6 arrow function
var sq = (x) => x * x;  //expression syntax of es6 arrow function when there is a single statement, no need {} and return statements
var sq_1 = x => x * x;  //if single argument no need paranthesis for parameters
console.log(sqaure(9));
console.log(sq(9));
console.log(sq_1(9));

var user = {
    name: 'Arvind',
    sayHi: () => {
        console.log(`Hi Im ${this.name}`);
        //arrow functions do not bind a this keyword, if you are using a this keyword inside of your function then its
        // not gonna work if you swap a normal es5 function with arrow function
        //the this binding refers to the parent binding and in this case there is no parent function and this will refer to parent this keyword
    },
    sayHiAlternate()/*this is a normal function but no need of the keyword 'function' as it is not an arrow function*/ {
        console.log(`Hi Im ${this.name}`);
        console.log(arguments);
    }
};
//it does not bind argument array

user.sayHiAlternate(1, 2, 3);