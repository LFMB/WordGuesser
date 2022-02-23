
// word bank - likely will turn into a more complicated data structure
// heck, maybe its own app crawling twitter for word ideas?
const secret_words = ['hello', 'sheep', 'bling', 'sleep']

// Thinking of turning WordGuesser into a class
// with word_info becoming this in the constructor and taking secret_words as the param for init
// below is a reminder on class declarations in JS
/*
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // Getter
  get area() {
    return this.calcArea();
  }
  // Method
  calcArea() {
    return this.height * this.width;
  }
}

const square = new Rectangle(10, 10);

console.log(square.area); // 100

*/

// initial state 
const word_info = {
  selected_word: '',
  current_guess: '',
  guess_count: 0,
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
  const selected_word = word_list[rand_index].lower()

  // console.log('selected_word: ', selected_word)
  return word_info.selected_word = selected_word;

}

// get guess
// will need to create a UI for this?
// going to manually create guesses for now at bottom of app
const setGuess = (guess) => {
    // standardized case for guess - probably make into util function
    const cleaned_guess = guess.lower() 

    // update guess count
    word_info.guess_count =  word_info.guess_count + 1

    // standardized case for guess?
    word_info.rough_guess = guess
    word_info.formatted_guess = cleaned_guess

    // not happy about the nesting of checkGuess
    // maybe create an async/await?
    checkGuess()
}

// check guess - uses shared scope to access word_info object
// made into arrow function to prep for eventual transition to a class format
const checkGuess = () => {
  console.log('checkGuess guess: ', word_info.formatted_guess)
  


  // check guess against solution
}

// provide feed back

// should create constructor and set assignment there
randomWordPicker(secret_words)

// currently calls checkGuess in function
setGuess('joy')

setGuess('joyful')

console.log(word_info)