const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? O(n)

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(extraLargeArray);
let resultsAppend = perf.stop();  // Stops timer and save time results - 946.76672 ms
////space complexity = O(1)

// Try it with second function
perf.start();
doublerInsert(extraLargeArray);
let resultsInsert = perf.stop(); // - time complexity = 6.903729 ms
////space complexity = O(n)

//I believe that the reason the runtime on the second function going through the array was quick is because =>
// in the first function the results are being addded to the function at this point. In the second function, the results =>
//are being inserted in the function. The values in the first funciton are being taken and then inputed into the problem whereas =>
// in the second funciton the values are already present then just being inserted.
console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);
