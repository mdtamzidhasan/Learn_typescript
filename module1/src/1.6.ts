//learning function

//Normal function

function add(num1: number, num2: number = 10):number{
    return num1 + num2;
}
add(5, 10);
add(5); //10 is default value

//Arrow function
const addArrow = (num1: number, num2: number): number => num1 + num2;


//objects-->function-->methods

const user = {
    id: 1,
    name: 'korimerma',
    age: 25,
    balance: 1000,
    newBalance: function (balance: number):string{
        return "My new balance is " + (this.balance + balance); //"My new balance is ${this.balance + balance}"
    }
    
}

//Array map

let num: number[] = [1, 2, 3, 4, 5];

let numSquare: number[] = num.map((elem:number):number => elem * elem);