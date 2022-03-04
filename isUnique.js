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

  for(let i = 0; i < stringInQuest.length; i++){
    // lastIndexOf starts at end of string and iterates
    // from there to position given looking for the index
    // of next matching value given.
    // If lastIndexOf finds a match before spot being checked
    // we have a duplicate char.
    let charInQuest = stringInQuest[i]
    if(stringInQuest.lastIndexOf(charInQuest) !== i){
      return false;
    }
  }
  return true;

}