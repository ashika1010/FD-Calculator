function CalculateMaturityAmount(){
    const principle=parseFloat(document.getElementById('principle').value);
    const interestrate=parseFloat(document.getElementById('interestrate').value);
    const tenure =parseFloat(document.getElementById('tenure').value);
     const maturityAmount=principle+(principle*interestrate*tenure)/100;
     document.getElementById('result').innerText = `Maturity Amount: ${maturityAmount.toFixed(2)}`;
}

document.getElementById('calculatebtn').addEventListener('click',CalculateMaturityAmount);