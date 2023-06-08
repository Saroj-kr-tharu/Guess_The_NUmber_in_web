// javascript for guess the number 

function generateRandom(min, max) {
    let rand = Math.random();
    rand = rand * (max - min);
    rand = rand + min;
    return Math.floor(rand);
}

function Converted_numbers(index) {
    index = Number(index);
    return index;
}


function GuessTheNumber(guess_num,temp_number) {

    // requirement 
   
    // let temp_number = total_time;
    let correct_number = generateRandom(low_limit, high_limit);

    // necessary variable for string 
    let Congratulation_string = "Congratulation You Win &#128525;";
    let loser_string = "LOOSER !!! &#128514;";
    let greater_correct_string = "Your Guess Is Too High. &#128562;"; // Your Guess Is Too High. 😲
    let low_correct_string = "Your Guess Is Too Low. &#128552;" // Your Guess Is Too High. 😲

    let correct_answer_string = `Correct Answer: ${correct_number}`;
    let Life_Time_string = `No. of Life Time: ${temp_number}`;
    

    // acess the element 
    let Congratulation_acess = document.getElementById("feedback_title"); // loser ,winner , greater , lesser
    let correct_anser = document.getElementById("total_guess"); // correct answer 
    let life_time = document.getElementById("no_guess"); // life time 
    let guess_title = document.getElementById("subtitle"); // subtitle guess 1 to 15 wala

   
    temp_number = Converted_numbers(temp_number);

   


    life_time.innerHTML = Life_Time_string;
    temp_number--;

    guess_num = Converted_numbers(guess_num);

    if (guess_num == correct_number) {
        Congratulation_acess.innerHTML = Congratulation_string;
        life_time.innerHTML = Life_Time_string;
        return 0;
    }

    else {

        if (guess_num > correct_number) {
            Congratulation_acess.innerHTML = low_correct_string;
        }

        else if (guess_num < correct_number) {
            Congratulation_acess.innerHTML = greater_correct_string;
        }

    }

    // if (temp_number == 0) {

    //     Congratulation_acess.innerHTML = loser_string;
    //     correct_anser.innerHTML = correct_answer_string;
    // }

}

function fun1(){
    alert(text_area1.value)
    return(text_area1.value);
}

// main Function 
let text_area1 = document.getElementById('text_id');
let btn1 = document.getElementById('btn');

// Title string range 
let low_limit = 1;
let high_limit = 20;
let guess_title_string = `Guess a number between ${low_limit} - ${high_limit}`;
guess_title.innerHTML = guess_title_string;


btn1.addEventListener('click', () => {
    let temp = fun1();
    GuessTheNumber(temp, 5)
});







