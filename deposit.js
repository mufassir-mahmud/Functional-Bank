document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const depositValueStr = depositField.value;
    const depositValueFloat = parseFloat(depositValueStr);
    
    depositField.value = '';

    const depositTotal = document.getElementById('deposit-total');
    const depositPreviousStr = depositTotal.innerText;
    const depositPreviousFloat = parseFloat(depositPreviousStr);
    
    const totalDeposit = depositPreviousFloat + depositValueFloat;
    

    depositTotal.innerText = totalDeposit;


    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalStr = balanceTotal.innerText;
    const balanceTotalFloat = parseFloat(balanceTotalStr);

    const totalBalance = balanceTotalFloat + depositValueFloat;
    
    balanceTotal.innerText = totalBalance;
    

})