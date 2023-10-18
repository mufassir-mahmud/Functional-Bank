document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawFieldStr = withdrawField.value;
    const withdrawFieldFloat = parseFloat(withdrawFieldStr);
    withdrawField.value = '';

    const withdrawTotal = document.getElementById('withdraw-total');
   const withdrawTotalStr = withdrawTotal.innerText;
   const withdrawTotalFloat = parseFloat(withdrawTotalStr);

   const totalWithdraw = withdrawTotalFloat + withdrawFieldFloat;
   withdrawTotal.innerText = totalWithdraw;

   const balanceTotal = document.getElementById('balance-total');
    const balanceTotalStr = balanceTotal.innerText;
    const balanceTotalFloat = parseFloat(balanceTotalStr);
    const totalBalance = balanceTotalFloat - withdrawFieldFloat;

    balanceTotal.innerText = totalBalance;
})