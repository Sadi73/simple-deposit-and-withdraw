document.getElementById('deposit-button').addEventListener('click', function(){
    // Get value from the input field
    const deposit_amount_str = document.getElementById('deposit-field').value;
    const deposit_amount = parseFloat(deposit_amount_str);
    console.log('you have given: ', deposit_amount, 'taka');
    document.getElementById('deposit-field').value = '';


    //get value from current deposit
    const show_deposit_str = document.getElementById('show-deposit').innerText;
    const show_deposit = parseFloat(show_deposit_str);
    console.log('your previous deposit amount: ', show_deposit,'taka');
    
    // add current deposit and previous deposit
    const final_amount = deposit_amount + show_deposit;
    console.log(final_amount);

    document.getElementById('show-deposit').innerText = final_amount;

    const balance_str = document.getElementById('balance').innerText;
    const balance = parseFloat(balance_str);

    const final_balance = balance + deposit_amount;
    document.getElementById('balance').innerText = final_balance;

})