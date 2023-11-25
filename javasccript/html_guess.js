// javascript for guess the number 

// function to return random number between a range
function generateRandom(min, max) {
    let rand = Math.random();
    rand = rand * (max - min);
    rand = rand + min;
    return Math.floor(rand);
}


// Acessing the dom of the content 
let subtitle = document.getElementById('subtitle');
let guess_number_user = document.getElementById('total_guess');
let total_num_guess = document.getElementById("no_guess");
let result = document.getElementById("result_title");
let input_field = document.getElementById('text_id');

// funtion to return number entered by user 
function numByUser() {
    return (input_field.value);
}

// variable 
let total_no = 0;
let previous_number;
let min = Number(1);
let max = Number(10);
let total_life_time = Number(5);
let correct_number = generateRandom(min, max);
// alert(correct_number);


// btn 
let see_result_btn = document.getElementById("btn_result");
let guess_button = document.getElementById("btn");

function main() {
    // requirement 
    subtitle.innerHTML = `Guess a number between ${min}-${max}`;


    // main function 
    
    guess_button.addEventListener('click', () => {

        // exception handing
        if (numByUser() == '' || numByUser() == 0 || previous_number == numByUser()) {
            return;
        }
        previous_number = numByUser();

        total_no++;


        // output
        guess_number_user.innerHTML = `Guess number is : ${numByUser()}`;
        total_num_guess.innerHTML = `No. of Guess: ${total_no}`;

        if (correct_number == previous_number) {
            result.innerHTML = "CONGRATURLATION &#127942; &#128519; &#128525; "
            total_num_guess.innerHTML = `Correct Number is : ${correct_number}`;
            AnserRight();
        }
        else if (correct_number < previous_number) {
            result.innerHTML = "GUESS NUMBER IS GREATER &#128514;  &#129323; "
        }
        else if (correct_number > previous_number) {
            result.innerHTML = "GUESS NUMBER IS LESS : &#128517; &#129325; &#129317; "
        }

    });


   
    see_result_btn.addEventListener('click', () => {
        alert(correct_number);
    });
}



// function when guess correct 
// result ---> delete 
// guess ---> trial 
function AnserRight() {

    see_result_btn.style.display = "none";
    guess_button.innerHTML = "RESET";
    guess_button.addEventListener('click', () => {
        location.reload();
    });


}

main();