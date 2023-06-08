// javascript for guess the number 
function generateRandom(min, max) {
    // Get a random number between 0 and 1.
    let rand = Math.random();

    // Multiply the random number by the difference between the max and min values.
    rand = rand * (max - min);

    // Add the min value to the random number.
    rand = rand + min;

    // Return the random number.
    return Math.floor(rand);
}

function Converted_numbers(index) {
    index = Number(index);
    return index;
}

function GuessTheNumber() {
    console.log("\t\t Welcome to Guess The Number Game ");
    console.log("\t\t Enter the range ");
    let low_limit = prompt("\t\t Enter low limit ");
    let high_limit = prompt("\t\t Enter high limit ");

    low_limit = Converted_numbers(low_limit);
    high_limit = Converted_numbers(high_limit);

    if (low_limit > high_limit) {
        console.log("\n\t\t Low limit is greater than high limit ");
        return 0;
    }

    let correct_number = generateRandom(low_limit, high_limit);
    let total_time = 5;
    total_time = Converted_numbers(total_time);

    let temp_number=total_time;
    temp_number = Converted_numbers(temp_number);

    for (let i = total_time; i >=1; i--) {
        console.log(`\n\t\t\t Total Time To Guess ---> ${total_time} `);

        let guess_num = prompt("\n\t\t Enter your Guess ---> ");
        guess_num = Converted_numbers(guess_num);
        
        temp_number--;
        if (guess_num == correct_number) {
            console.log("\n\t\t Congratulation you got correct Guess");
            console.log(`\n\t\t Life Time ---> ${total_time}`);
            return 0;
        }

        else {

            console.log("\n\t\t Srry Wrong Guess ... Try Again ");
            if (guess_num > correct_number) {
                console.log(`\n\t\t Correct number is less than guess number `);
            }

            else if (guess_num < correct_number) {
                console.log(`\n\t\t Correct number is greater than guess number `);
            }

        }

        
      
            // console.log("\t\t LOOSER ");
            // console.log(`\t\t Correct number ---> ${correct_number} `);
        
        
    }

    if(temp_number==0){
        
        console.log("\t\t LOOSER ");
        console.log(`\t\t Correct number ---> ${correct_number} `);
    }
      
}
GuessTheNumber();
