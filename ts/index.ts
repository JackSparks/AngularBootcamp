console.log('Hi there!')

const myName: string = 'Stephen';

const ten: number = 10;
const negative: number = -10000;
const decimal: number = 10.000000001;

const yes: boolean = true;
const noDefinition: undefined = undefined;

let myName2 = 'Stephen'

const add = (a: number, b: number) => {
    return a + b;
};

const joinStrings = (a: string, b: string): string => {
    return a + b;
};

// Interface example to enforce object types

interface Post {
    title: string;
    daysOld: number;
    published: boolean;
}

const post = {
    title: 'Latest Typescript News',
    daysOld: 10,
    published: true
}

const printPost = (postToPrint: Post) => {
    return `${postToPrint.title} (${postToPrint.daysOld} days old)`;
};

printPost(post);

//Classes
class Car{

    //by adding the public or private arguments, you don't need setters
    constructor(public color: string, public year: number){

    }

    drive(){
        console.log('Vroom');
    }
}

const myCar = new Car('red', 2000);

myCar.drive();

console.log(myCar.color); //initially undefined