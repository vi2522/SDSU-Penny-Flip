// alert("I'm loaded!")
let headsCount = 0;
if(localStorage.getItem("headsCount") !== null) {
    headsCount = parseInt(localStorage.getItem("headsCount"));
}

let tailsCount = 0;
if(localStorage.getItem("tailsCount") !== null) {
    tailsCount = parseInt(localStorage.getItem("tailsCount"));
}

updateDom()
// when flip the penny button is clicked

document.querySelector(".flip-btn").addEventListener("click", function(){
    //generate random number to determine if heads or tails
    let isHeads = Math.random() > 0.5

    if (isHeads) {
         // updates the image to display results of heads or tails 
        document.querySelector("img").src = "./assets/images/penny-heads.jpeg";
        // updates h2 with result of You Flipped Heads/Tails!
        document.querySelector("h2").textContent = "You Flipped Heads!";
        // increment variable counter for heads/tails
        headsCount++;
    } else {
         // updates the image to display results of heads or tails 
        document.querySelector("img").src = "./assets/images/penny-tails.jpeg";
        // updates h2 with result of You Flipped Heads/Tails!
        document.querySelector("h2").textContent = "You Flipped Tails!";
        // increment variable counter for heads/tails
        tailsCount++;
    }


    setValuesLocalStorage();
    updateDom();
})



document.querySelector(".reset-btn").addEventListener("click", function(){
    headsCount = 0;
    tailsCount = 0;
    document.querySelector("h2").textContent = "Let's Get Rolling!";
    document.querySelector("img").src = "./assets/images/penny-heads.jpg";
    
    setValuesLocalStorage();
    updateDom();
})


function updateDom(){
    
    // updates the table cells with results
    // 1. number of heads and/or tails in table cells
    document.querySelector("#heads-count").textContent = headsCount;
    document.querySelector("#tails-count").textContent = tailsCount;    
    // 2. percentage of heads and/or tails 
    // compute percentages and add to table cells 
    let total = headsCount + tailsCount;
    // set percetages to 0 in order to avoid NaN error as percetages cant be computed if totals is zero
    let percentageHeads = 0;
    let percentageTails = 0;

    if(total > 0) {
        percentageHeads = Math.round(headsCount/total * 100)
        percentageTails = Math.round(tailsCount/total * 100)
    }

    document.querySelector("#heads-percentage").textContent = percentageHeads + "%";
    document.querySelector("#tails-percentage").textContent = percentageTails + "%";
}


function setValuesLocalStorage() {
    localStorage.setItem("headsCount", headsCount);
    localStorage.setItem("tailsCount", tailsCount);
}