function findOdd(A) {
  var obj_of_numbers = {} //have an empty object to store the key:value -- the number: number of occurances
  A.forEach(function(number){
    console.log(number);
    if(number.toString() in obj_of_numbers){ //check if there is an existing number in object already
      console.log(`INSIDE object ${obj_of_numbers[number.toString()]}`)
        obj_of_numbers[number.toString()] = obj_of_numbers[number.toString()] + 1 //add 1 more to the count
    }else{ //if number does not exist yet
        obj_of_numbers[number.toString()] =  1
    }
  })
  console.log(obj_of_numbers);
  return findNumberWithOddOccurances(obj_of_numbers); //pass in the object
}

function findNumberWithOddOccurances(theObj){ // function to find the number inside the object <number : occurances> with the odd number of occurances
  for(const key in theObj){
    if(!(theObj[key] % 2 == 0)){ //check if the occurances of that number is an odd number
      console.log(`NUMBER THAT IS ODD : ${key}`); //print the number that is ODD
      return key;
    }
  }
  return null; // if all is even return null
}
