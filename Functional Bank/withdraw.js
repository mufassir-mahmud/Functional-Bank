document.getElementById('withdraw-btn').addEventListener('click', function(){
    const newWithDrawAmount = getInputValueById('withdraw-field');
    const previousWithdrawAmount = getElementValueById('withdraw-total');

    const newWithdrawTotal = previousWithdrawAmount + newWithDrawAmount; 
    setValue('withdraw-total', newWithdrawTotal);

    const previousBalanceAmount = getElementValueById('balance-total');
    const newBalanceTotal = previousBalanceAmount - newWithDrawAmount;
    setValue('balance-total', newBalanceTotal)
})