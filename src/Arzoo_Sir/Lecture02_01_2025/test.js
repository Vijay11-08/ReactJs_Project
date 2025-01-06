console.log("Hi Vijay");

console.log("-------------------");


var arr =[ 1,5,6];
const multifun = (arr) => {
    return arr.map((e)=>(e%2==0 ? e*2 : e*3));
}
console.log(multifun(arr));

console.log("-------------------");

//task 2
// form  the given array create even aaray ,  array mathi careate even array elements.

const arr1 = [1,2,3,4,5,6];
const evens = arr1.filter(e => e%2 === 0);
console.log(evens);


console.log("-------------------");


// task 3