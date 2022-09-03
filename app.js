const initialPrice = document.querySelector("#initial-price");
const stockAmount= document.querySelector("#stock-amount");
const currentPrice = document.querySelector("#current-price");
const submitBtn = document.querySelector("#submit-btn");
const outputDiv = document.querySelector(".output");


function showingProfiAndLoss(){
    const ip = Number(initialPrice.value);
    const stkamt = Number(stockAmount.value);
    const cp = Number(currentPrice.value);

    calculateProfitAndLoss(ip, stkamt, cp);
}




function calculateProfitAndLoss(initial, stock, current) {
    if(initial > current){

        const loss = (initial-current) * stock;
        const lossPercentage = (loss/ initial) * 100;

        showingMessage(`Your Loss amount is ${loss} and loss percentage is ${lossPercentage}%`);
    } else if(current > initial){

        const profit = (current-initial) * stock;
        const profitPercentage = (profit/ initial) * 100;
        
        showingMessage(`Your Profit amount is ${profit} and profit percentage is ${profitPercentage}%`);
    }else{

        showingMessage("You have got nothing in loss or profit. ");
    }
}


function showingMessage(message){
    outputDiv.innerText = message
}
submitBtn.addEventListener("click", showingProfiAndLoss)