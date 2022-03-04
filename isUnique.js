/*
Is Unique

create a function that determines whether all characters in a string
are unique or not. Make it case-sensitive.

input: string
output: boolean

*/


console.log(
  isUnique('abcdef'),
  isUnique('89%df#$'),
  isUnique('abAdef'), 
  isUnique('abcdaf'), // false
)


function isUnique(stringInQuest){
  // time to fully leverage Set class
  return new Set(stringInQuest).size === stringInQuest.length;
 
 
  /*
  const chars = new Set();

  for(let i = 0; i < stringInQuest.length; i++){
    const charCheck = stringInQuest[i]

    if(chars.has(charCheck)){
      return false;
    }

    chars.add(charCheck);
  }
  
  return true;
  */


  /*
  // there's no sorting which might be good if the string is long and complex
  const chars = {}

  for(let i = 0; i<stringInQuest.length; i++){
    const charCheck = stringInQuest[i]
    if(chars[charCheck] === undefined){
      chars[charCheck] = 1
    } else {
      return false;
    }
  }
  return true;
  */
  
  /*
  // wonder if you can do [...].sort() as well
  const chars_array = stringInQuest.split('').sort()

  for(let i = 1; i < chars_array.length; i++){
    if(chars_array[i] === chars_array[i-1]){
      return false;
    }
  }
  */

  /*
  for(let i = 0; i < stringInQuest.length; i++){
    // If lastIndexOf finds a match before spot being checked
    // we have a duplicate char.
    let charInQuest = stringInQuest[i]
    if(stringInQuest.lastIndexOf(charInQuest) !== i){
      return false;
    }
  }
  */

}