document.getElementById('login-btn').addEventListener('click',function(event){
    event.preventDefault();

    const inputNumber = getInputFieldId('input-number');
    const inputPass = getInputFieldId('input-password');
    if(inputNumber && inputPass === 1234){
        window.location.href = './MoneyTransfer.html'
    }else(
        alert("Please check your Number or password")
    )
    
})