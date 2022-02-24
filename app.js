
// word bank - likely will turn into a more complicated data structure
// heck, maybe its own app crawling twitter for word ideas?
// const secret_words = ['hello', 'sheep', 'bling', 'sleep']
const secret_words = ['hello']

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
  guess_count: 0,
  max_guesses: 5,
  status: 'open',
  // maybe turn into an array or empty obj
  current_guess: '',
  rough_guess: '',
  formatted_guess: '',
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
  const selected_word = word_list[rand_index].toLowerCase()

  // console.log('selected_word: ', selected_word)
  return word_info.selected_word = selected_word;

}

// get guess
// will need to create a UI for this?
// going to manually create guesses for now at bottom of app
const setGuess = (guess) => {
    // update guess count
    word_info.guess_count =  word_info.guess_count + 1

    if (word_info.guess_count <= word_info.max_guesses) {
      // standardized case for guess - probably make into util function
      const cleaned_guess = guess.toLowerCase()
      // standardized case for guess?
      word_info.rough_guess = guess
      word_info.formatted_guess = cleaned_guess

      // not happy about the nesting of checkGuess
      // maybe create an async/await?
      checkGuess()
    
    } else {
      console.log(`Sorry! You're now over the limit of ${word_info.max_guesses} with ${word_info.guess_count} guesses`)
      word_info.status = 'failed'
    }
}

// check guess - uses shared scope to access word_info object
// made into arrow function to prep for eventual transition to a class format
// currently returns the word_info object
const checkGuess = () => {
  
  const guess = word_info.formatted_guess
  const correct_answer = word_info.selected_word

  if(guess === correct_answer){
    console.log(`Congrats! Your guess: ${guess} matches the mystery word: ${correct_answer}`)
    word_info.status = 'solved'

  }  else {
    // destructuring strings into arrays for easier comparison 
    const guess_array = [...guess],
          answer_array = [...correct_answer];

    // looping through guess 'bonds'
    // should produce one item in results array 
    const results = guess_array.filter((guessed_letter, guess_index) => {
      console.log('guess_index: ', guess_index)
      let letter_in_answer = answer_array.find((letter_in_answer, answer_index) =>  {
        if(guessed_letter === letter_in_answer){
          console.log(`guessed_letter: ${guessed_letter} === letter_in_answer: ${letter_in_answer}` )
          // considering this structure for none complete failures: 
          // {match_type: partial | full, letter: letter, position: guess_index}
          return guessed_letter 
        }
      }) 

    })

    console.log('results array: ', results)
    console.log('results.length: ', results.length)

  }

  return word_info

}

// provide feed back

// should create constructor and set assignment there
randomWordPicker(secret_words)

// currently calls checkGuess in function
// setGuess('joy')
// setGuess('joyful')

// sticking to 5 letter words for now
// currently no controller logic to enforce guess input same length as correct answer
// so manually making the assumption
setGuess('bonds')
setGuess('hello')

console.log(word_info)