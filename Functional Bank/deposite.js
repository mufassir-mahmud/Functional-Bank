
document.getElementById('deposit-btn').addEventListener('click', function(){
    const newDepositAmount= getInputValueById('deposit-field');

    const previousDepositTotal = getElementValueById('deposit-total');
    

    const newDepositTotal = previousDepositTotal + newDepositAmount;
    setValue('deposit-total', newDepositTotal);

    const previousBalanceTotal = getElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    setValue('balance-total', newBalanceTotal)
})


