// Reset

// Make bars appear on screen 
const bars = document.querySelector(".bars");
const newDiv = document.createElement('div');
let answer = [];

// Function that makes a random number
randomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

// Function to make multiple random numbers 
range = () => {
    for (let i = 0; i < 20; i++) {
        answer.push(randomNum(5, 40));
    }    
    return answer;
}
range();

// For loop to make new divs and sizes the bars 
for (let index = 0; index < answer.length; index++) {
    const div = document.createElement("div");
    div.style.height = `${answer[index]}` + `1px` 
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
            let hold = array[i];
            array[i] = array[smallestNum];
            array[smallestNum] = hold;
        }
    }
    return array
}
console.log(selectionSort(answer));

test = () => {
    alert('hello')
}















