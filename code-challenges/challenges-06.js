'use strict';

// -------------------------------------------------------------------------------------------------------
//  Challenge 01:
//  Required:
//
//  Write a function that takes an array and returns the maximum value in the provided array
//  without using build-in functions.
//  
// Input: [12, 32, 22, 45, 78, 12, 50]
// Output: 78
//  

const findMax = (arr) => {
    let max = arr[0];
    
    for (let x = 0; x < arr.length; x++) {
        if (arr[x] > max) {
            max = arr[x];
        }
    }
    return max;
}
let arr = [12, 32, 22, 45, 78, 12, 50]
findMax(arr);
    
    // write your code here
    

// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
//  Challenge 02:
//  Required:
//
//  Write a function that takes an arrays and returns the Sum of the numeric values
//  inside the array (there could be strings inside), without using built-in functions
//  
// Input: [20, '234', 'car', 41, 20, 'chair']
// Output: 81
//  

const sumNums = (arr) => {
    let sum = 0;
        for (let y = 0; y < arr.length; y++) {
            if (typeof arr[y]  == 'number')
                sum = sum + arr[y];
        }
    return sum;
}
sumNums(arr);
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
//  Challenge 03:
//  Required:
//
//  Write a function that takes an array and returns the array reversed
//  without using built-in functions
//  
// Input: ['C#', 'JS', 'Ruby','Python'] 
// Output: ['Python','Ruby','JS','C#']

const reverseArray = (arr) => {
    // write your code here
    let reversed=[]

    for(let s=arr.length-1; s>=0; s--){
      reversed.push(arr[s])  
    }
    return reversed
    
}
let arr1 = ['c#' , 'Js' , 'Ruby' , 'Python']
reverseArray(arr1);
// -------------------------------------------------------------------------------------------------------

module.exports = {findMax , sumNums, reverseArray};