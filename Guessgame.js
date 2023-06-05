console.log("Guess Game console..!!")

const num_1_card = document.getElementById('num-1-content');
const num_open = document.getElementById('num-open-1');
const next_btn = document.getElementById('next');
const prev_btn = document.getElementById('prev');
const guess_question = document.querySelector('.guess-question');

//created card_1
const create_div_1 = document.createElement('div')
const create_h3_1 = document.createElement('h3')

create_div_1.className = 'card-div-1'
create_div_1.append(create_h3_1)



//hint cards data(details)
const hint_contents = [
    {
        hint: 'Called as Pearl of the Indian Ocean'
    },

    {
        hint: 'Heavy metal band in 90"s'
    },

    {
        hint: 'Balandeor 7 times winner'
    },

    {
        hint: 'Heavy metal song in 90"s'
    },

    {
        hint: 'Won the FIFA 1958'
    }
]



let hint_card_counter = 0;

//hint cards
const hint_cards = () => {
    console.log('Hint Cards')

    const hint_card_data = hint_contents[hint_card_counter]
    create_h3_1.innerHTML = hint_card_data.hint
}


//next hint card
const next_hint_card = () => {
    console.log('Next Hint Card..!!')

    hint_card_counter++;

    if(hint_card_counter > hint_contents.length - 1){
        hint_card_counter = 0;
    }

    hint_cards()
}

//prev hint card
const prev_hint_card = () => {
    console.log('Prev Hint Card..!!')

    hint_card_counter--;

    if(hint_card_counter < 0){
        hint_card_counter = hint_contents.length - 1
    }

    hint_cards()
}


//for card_1 open function
const card_open = () => {


    console.log('Card Opened..!!')

    num_1_card.replaceWith(create_div_1)

    

    

    
}


num_1_card.addEventListener('click', card_open)







//for card_1 close function
const card_close = () => {

    console.log('Card Closed..!!')

    create_div_1.replaceWith(num_1_card)

}


create_div_1.addEventListener('click', card_close)






//guess button
const guess_btn = document.getElementById('guess-btn');

//attempts box
const attempts = document.getElementById('attempts');

//guessing input
const guess_input = document.getElementById('guess-num');








//guessing questions data
const guess_questions = [

    {
        question: 'Guess the Country ?'
    },


    {
        question: 'Guess the Band ?'
    },

    {
        question: 'Guess the Player ?'
    }, 

    {
        question: 'Guess the Song ?'
    },


    {
        question: 'Guess the won Country ?'
    }
]



let question_counter = 0;





const already_loaded_questions = () => {
    question_data()
}

window.addEventListener('DOMContentLoaded', already_loaded_questions)

const already_loaded_hints = () => {
    hint_cards()
}

window.addEventListener('DOMContentLoaded', already_loaded_hints)



const question_data = () => {
    const q_data = guess_questions[question_counter]
    guess_question.innerHTML = q_data.question

    
}

const next_guess = () => {
    console.log('Next Guess..!!')

    console.log(question_counter++);

    if(question_counter > guess_questions.length - 1){
        question_counter = 0;
    }


    question_data()
    

    next_hint_card()

    next_answer()

    

    


    



    

    
}

next_btn.addEventListener('click', next_guess)



const prev_guess = () => {
    console.log('Prev Guess..!!')
    

    console.log(question_counter--);

    if(question_counter < 0){
        question_counter = guess_questions.length - 1;
    }

    question_data()

    prev_hint_card()
    

    prev_answer()

    





    
}


prev_btn.addEventListener('click', prev_guess)







//hiding answers
const hiding_answers = [
    {
        guesses: 'Sri lanka'

    },


    {
        guesses: 'Metallica'
    },


    {
        guesses: 'Lionel Messi'
    },

    

    {
        guesses: 'Nothing else matters'
    },



    {
        guesses: 'Brazil'
    }


]


let answer_counter = 0;

const next_answer = () => {
    console.log('Next Answer..!!')

    answer_counter++;

    if(answer_counter > hiding_answers.length - 1){
        answer_counter = 0;
    }

    

}

const prev_answer = () => {
    console.log('Prev Answer..!!')
    answer_counter--;

    if(answer_counter < 0){
        answer_counter = hiding_answers.length - 1
    }

    console.log(hiding_answers[answer_counter].guesses)
}





const main_content = document.getElementById('content');



//create new div(after won the game)
const create_content_div = document.createElement('div')
create_content_div.className = 'content-2'


const create_h2 = document.createElement('h2');
create_h2.innerHTML = 'You won the Game..!!'

const create_reset_button = document.createElement('button')
create_reset_button.innerHTML = 'Reset'
create_reset_button.className = 'reset'

create_content_div.append(create_h2)
create_content_div.append(create_reset_button)




//points counter
let point_counter = 0;

const count_points = () => {
    console.log('Count points..')


    
    console.log(point_counter+=10);

    if(point_counter >= 50){
        console.log('You get All the points')

        main_content.replaceWith(create_content_div)
    }else if(point_counter < 50){
        console.log('please try get maximum points..')

        


    }

    
}

let attempts_counter = 1;

//attempts counter function
const counts_attempts = () => {

    console.log('attempts counter..')

    
    attempts.innerHTML = attempts_counter++;


    if(attempts_counter > 4){
        console.log('You lose the game..!!')

        attempts.innerHTML = 'Your Attempts is over..'

        reset_game()

        reset_input()
        
        attempt_count_reset()

        

    }else{
        console.log('Continue game..!!')
    }

   

    
    
    
    


    
}


//reset input field
const reset_input = () => {
    return guess_input.value = ''
}


//reset attempt counter
const attempt_count_reset = () => {
    return attempts.innerHTML = ''
}

//restart game
const reset_game = () => {
    console.log('Game restarted..!!')

    location.reload()

}


create_reset_button.addEventListener('click', reset_game)


//guessing process
const guess_process = () => {
    console.log("Guess..")

    

    if(guess_input.value == ''){
        alert('Please Guess a Word..!!')
    }

    else if(guess_input.value == hiding_answers[answer_counter].guesses){
        alert('Guessed Correctly..!!')

        
        next_guess()

        count_points()
       
        reset_input()

        attempt_count_reset()
        

        
    }

    else{
        alert('Failed to Guess..!!')

        counts_attempts()
    }

    

    
}

guess_btn.addEventListener('click', guess_process)















//balance features(implemetations)

//change the hint card details(done)
//and change hide answers too
//and connect it to guess process and also 
//save to localstorage(already done guesses)
//calculate marks for each guess(point counter)
//alredy guessed items.