
// bank deposit/////

document.getElementById('deposit-button').addEventListener('click', function(){
// deposit amount ////
       const depositInput= document.getElementById('deposit-input');
       const newDepositText = depositInput.value;
       const newDepositAmount = parseFloat(newDepositText);
    
    const totalDeposit = document.getElementById('deposit-total');
    const previousDepositText = totalDeposit.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newTotalDeposit = newDepositAmount + previousDepositAmount;
    
    totalDeposit.innerText= newTotalDeposit;
    depositInput.value = ' ';


// total balance //

const balanceTotal = document.getElementById('total-balance');
const  balanceTotalText = balanceTotal.innerText;
const previousBalanceTotal = parseFloat(balanceTotalText);
const  newBalanceTotal = previousBalanceTotal +newTotalDeposit;
balanceTotal.innerText = newBalanceTotal;


})

// withdraw amount /////
 document.getElementById('withdraw-button').addEventListener('click', function(){
const withdrawInput = document.getElementById('withdraw-input');
const  withdrawInputText = withdrawInput.value;
const withdrawInputTotal = parseFloat(withdrawInputText);

  const withdrawTotal = document.getElementById('withdraw-total');
  const withdrawTotalText = withdrawTotal.innerText;
  const previousWithdrawTotal = parseFloat(withdrawTotalText);

  const newWithdrawTotal= withdrawInputTotal+ previousWithdrawTotal;

  withdrawTotal.innerText= newWithdrawTotal;
  withdrawInput.value = ' ';


// after withdraw  total balance ///

const totalBalance = document.getElementById('total-balance');
const totalBalanceText = totalBalance.innerText;
const previousBalanceTotal =parseFloat(totalBalanceText);
const  newBalanceTotal = previousBalanceTotal - newWithdrawTotal;
totalBalance.innerText = newBalanceTotal;


 })


    
    
   