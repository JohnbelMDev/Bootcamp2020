// Binary Search

// sorted array
let array = [1,2,3,5,8,13,21];
let findValueInArray=8;
//mininmum
let minIndex = 0;
// setting array negative 1 for matching the index in the array
let maxIndex = array.length -1;
// converting
let midIndex = Math.ceil((minIndex + maxIndex)/2);
console.log(midIndex);
console.log(array[midIndex]);

if(array[midIndex]< findValueInArray){
 minIndex = midIndex;

}
else{
   maxIndex = midIndex;
}
midIndex = Math.ceil((minIndex + maxIndex)/2);
console.log(midIndex);
console.log(array[midIndex]);

if(array[midIndex]< findValueInArray){
 minIndex = midIndex;

}
else{
   maxIndex = midIndex;
}
midIndex = Math.ceil((minIndex + maxIndex)/2);
console.log(midIndex);
console.log(array[midIndex]);


if(array[midIndex]< findValueInArray){
 minIndex = midIndex;

}
else{
   maxIndex = midIndex;
}
midIndex = Math.ceil((minIndex + maxIndex)/2);
console.log(midIndex);
console.log(array[midIndex]);
