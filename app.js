
//
const filterOutOdds = (...argNumber) => argNumber.filter((value) => value % 2 === 0);


// min easyway
const findmin = (...argNumber) => Math.min(...argNumber);

//min with reduce

const findmin2 = (...argNumber) => argNumber.reduce((min,nextVal) => {return min < nextVal ? min : nextVal});

//merge object:

const mergeObjects = (firstObj, secondObj) => {return {...firstObj,...secondObj}};

//doubleAndReturnArgs


const doubleAndReturnArgs = (arr,...args) => [...arr,...args.map((val) => val *2)];


//remove random

let items = [1,2,3,4,5,6,7,8]

const removeRandom = items => {
    const indexRemove = Math.floor(Math.random() * items.length);
    return [...items.slice(0,indexRemove),...items.slice(indexRemove + 1)];
}


// every item from 2 array:

const everyItem = (firstArr,secondArr) => [...firstArr,...secondArr];


//add key and value to object

let obj = {name:"ben", last:"saba"}


const addKeyVal = (obj, key, val) => {
    let newObj = {...obj};
    newObj[key] = val;
    return newObj;
}


//remove key

const removeKey =  (obj, key) => {
    delete obj[key];
    const newObj = {...obj}
    return newObj;
}


//extend obj

const extend = (firstObj, secondObj) => ({...firstObj,...secondObj});

// modified

function update(obj, key, val) {
    let newObj = { ...obj }
    newObj[key] = val;
    return newObj;
}

