// Reset
// const newDiv = document.createElement('div');

// Make bars appear on screen 
const bars = document.querySelector(".bars");
const val = document.querySelector('.nums');
let answer = [];

// Function that makes a random number
randomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

// Function to make multiple random numbers 
range = () => {
    for (let i = 0; i < 20; i++) {
        answer.push(randomNum(5, 60));
    }    
    return answer;
}
range();

// For loop to make new divs and sizes the bars 
for (let index = 0; index < answer.length; index++) {
    const div = document.createElement("div");
    div.style.height = `${answer[index]}` + `0px`;
    div.id = (`${index}`);
    div.className = 'nums';
    div.innerHTML = answer[index];
    bars.appendChild(div);
}

console.log(answer);


// Selection Sort (n²) time complexity 
selectionSort = (array) => {
    let arr = array.length;
    
    for (let i = 0; i < arr; i++) {
        let smallestNum = i;
        for (let j = i + 1; j < arr; j++) {
            if(answer[j] < answer[smallestNum]) {
                smallestNum = j;
            }
        }        
        if (smallestNum !== i) {
            // Swapping elements 
            hold = array[i];
            array[i] = array[smallestNum];
            array[smallestNum] = hold;
        }
    }
    return array
}

// Bars to move 
moveBars = () => {

    // storage = answer[0];
    // answer[0]= answer[1];
    // answer[1]= storage;

}

let firstdiv = document.getElementById("0");
let seconddiv = document.getElementById("1");

console.log(firstdiv);
console.log(seconddiv);
console.log();
hold = firstdiv;
firstdiv = seconddiv;
seconddiv = hold;

console.log(firstdiv);
console.log(seconddiv);


console.log(answer[0]);


console.log(selectionSort(answer));










