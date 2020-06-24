const myTestArray = [1, 2, 3];

let myNewArray = [2, 3, 4];

const checkMe = (element) => {    
    return element === 2;
}

console.log(myNewArray.every(checkMe));