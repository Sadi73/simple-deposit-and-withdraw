document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdraw_amount_str = document.getElementById('withdraw-field').value;
    const withdraw_amount = parseFloat(withdraw_amount_str);
    document.getElementById('withdraw-field').value = '';

    const previous_withdraw_str = document.getElementById('previous-withdraw').innerText;
    const previous_withdraw = parseFloat(previous_withdraw_str);

    const total_withdraw = previous_withdraw + withdraw_amount;
    document.getElementById('previous-withdraw').innerText = total_withdraw;

    const previous_balance_str = document.getElementById('balance').innerText;
    console.log(previous_balance_str);
    const previous_balance = parseFloat(previous_balance_str);

    const final_balance = previous_balance - withdraw_amount;
    document.getElementById('balance').innerText = final_balance;
    console.log(final_balance);
})
