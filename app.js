
// word bank - likely will turn into a more complicated data structure
// heck maybe its own app crawling twitter for word ideas?
const secret_words = ['hello', 'sheep', 'bling', 'sleep']

// Thinking of turning WordGuesser into a class
// with word_info becoming this in the constructor and taking secret_words as the param for init

// initial state 
const word_info = {
  selected_word: '',
  number_guesses: 0,
}

// get word of day
// assuming array for type in parameter
const randomWordPicker = (word_list) => {
  // randomly pick a number between 0 and 1 less the index length
  const max_options = word_list.length
  
  // use random selection to access key from array
  // assumes min is 0 so no need to do Math.floor(Math.random() * (max - min) + min)
  // the floor should handle the issue in the difference between length and index
  const rand_index = Math.floor(Math.random() * max_options)

  // some day add state that tracks if index/ word was already selected
  const selected_word = word_list[rand_index]

  // console.log('selected_word: ', selected_word)
  return word_info.selected_word = selected_word;

}

// get guess
// will need to create a UI for this?

// check guess
function checkGuess(guess, solution){
  // update guess count

  // check guess against solution
}

// provide feed back

randomWordPicker(secret_words)

console.log(word_info)