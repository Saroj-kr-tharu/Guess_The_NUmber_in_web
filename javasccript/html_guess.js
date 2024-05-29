
// Acessing the dom of the content 
const guess_number_user = document.getElementById('total_guess');
const total_num_guess = document.getElementById("no_guess");
const result = document.getElementById("result_title");
const input_field = document.getElementById('text_id');
const result_env = document.getElementById('result_env');
const close_overlay = document.getElementById('close');
const no_to_dis = document.getElementById('Gen');
const result_btn = document.getElementById('btn_result');
const guess_btn = document.getElementById('btn');


// variable 
let count_attem = 0;
let repetNum = 0;
let Sucess = true;

// generate correct number in a range 
const correctNum = (max) =>
    Math.trunc(Math.random() * max + 1);

let correctNumAc = correctNum(15);

const getInput = () =>
    Number(input_field.value);


// fucntion to set value to total num guess and guess number user 
const setValue= (first, second) => {
            total_num_guess.innerHTML = first;
            guess_number_user.textContent = second;
}

// event handler 
guess_btn.addEventListener('click', function () {


    if (getInput() !== '' && getInput() !== repetNum) {
        console.log(`correct --> ${correctNumAc}`);
        console.log(`Enter --> ${getInput()}`);

        repetNum = getInput();
        count_attem++;
        input_field.textContent = '';

        if (correctNumAc === getInput()) {
            Sucess=false;
            result.innerHTML = "CONGRATULATION &#127942; &#128519; &#128525; ";
            setValue(`Correct Number is : ${correctNumAc}`, `Guess Attempt: ${count_attem}`)
            
           
        }
        else if (correctNumAc < getInput()) {
            result.innerHTML = "GUESS NUMBER IS GREATER &#128514;  &#129323; "

            setValue(`Guess numbers is :: ${getInput()}`,` Guess Attempt: ${count_attem}`)
            
            
        }
        else if (correctNumAc > getInput()) {
            result.innerHTML = "GUESS NUMBER IS LESS : &#128517; &#129325; &#129317; "
            
            setValue(`Guess numbers is :: ${getInput()}`,` Guess Attempt: ${count_attem}`)
            
        }

    } else {
        const temp = getInput() == '' ? "Empty Value" : "Repeated Number";
        no_to_dis.textContent = temp;
        result_env.style.display = 'block';
    }
});



result_btn.addEventListener('click', function () {

    if(!Sucess){
        console.log("saroj");
        count_attem = repetNum = 0;
        input_field.value = '';
        
        
        
        total_num_guess.innerHTML = ` Guess numbers is : ${getInput()}`;
        guess_number_user.textContent = `Guess Attempt: ${count_attem}`;
        
        result.textContent = 'Best Of Luck. 😊';
        correctNumAc = correctNum(15);
        Sucess=true;
    }
    else {
        const temp = getInput() == '' ? "Empty Value" : "try to get real num";
        no_to_dis.textContent = temp;
        result_env.style.display = 'block';
    }
    });
    
close_overlay.addEventListener('click', function () {
    result_env.style.display = 'none';
});

