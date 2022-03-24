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

//----------------------------------------------------------------//
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

//----------------------------------------------------------------//
//Classes
class Truck{

    //by adding the public or private arguments, you don't need setters
    constructor(public color: string, public year: number){

    }

    drive(){
        console.log('Vroom');
    }
}

const myTruck = new Truck('red', 2000);

myTruck.drive();

console.log(myTruck.color); //initially undefined

//----------------------------------------------------------------//
//decorators:
const Component = (target: any) => {
    console.log(target);
}

@Component
class Vehicle{
}


//----------------------------------------------------------------//
//decorator factory, difference is the curved brackets:

// const decoratorFactoryExample = (target: any) => {
//     console.log(target);

//     return () => {
        
//     };
// };

// @Component()
// class Animal{
// }


//----------------------------------------------------------------
//imports / exports //
import {Car} from './Car'

const myCar = new Car();

//----------------------------------------------------------------
//Interfaces and classes used together
interface Driveable{
    speed: number;
    drive(): string;
}

class Motorcycle implements Driveable{
    speed = 10;

    drive(){
        return `I am driving at ${this.speed}`
    }
}

const myBike = new Motorcycle();

const startDriving = (vehicle: Driveable) => {
    vehicle.drive();
};

startDriving(myBike);

//----------------------------------------------------------------
//Generic Classes

class NumberHolder{
    value: number | undefined;
}

class StringHolder{
    value: string | undefined;
}

class BooleanHolder{
    value: boolean | undefined;
}

// const numberHolder = new NumberHolder();
// numberHolder.value = 10;

const stringHolder = new StringHolder();
stringHolder.value = 'a string';

//Instead of doing the above, can do this: generic class. On the fly provides the type for the value
class ValueHolder<T>{
    value: T | undefined;
}

const numberHolder = new ValueHolder<number>();

new ValueHolder<String>();
new ValueHolder<boolean>();

//----------------------------------------------------------------
//Generic Functions
//reuses Valuehulder class above

//function that returns an array of numbers
const numberWrapper = (value: number): number[] => {
    return [value];
};

const stringWrapper = (value: string): string[] => {
    return [value];
};

const booleanWrapper = (value: boolean): boolean[] => {
    return [value];
};

//instead of doing the above, can do this:
const valueWrapper = <T>(value: T): T[] => {
    return [value];
};

//typescript takes the number, looks at implementation and sets the type to number.
valueWrapper<number>(10);
valueWrapper<string>('a string');
valueWrapper<boolean>(true);

const value = valueWrapper<number>(10);