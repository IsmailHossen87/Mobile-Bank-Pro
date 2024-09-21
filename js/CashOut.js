document.getElementById('CashOut-btn').addEventListener('click',function(event){
    event.preventDefault()

    const inputCashOutMoney = getInputFieldId('input-cahOut')
    const Password = getInputFieldId('input-outPass')

         // ADD VALIDATION
         if(isNaN(inputCashOutMoney)){
            alert('failed cashOut')
            return;
        }

    if(inputCashOutMoney && Password === 1234){
        // valid data 
        const CurrentBalance = getInputTextField ('currentBalance')
        if(inputCashOutMoney > CurrentBalance ){
            alert('Your do not enough money')     
            return;
        }

       
        const newBalaNce = CurrentBalance - inputCashOutMoney;
        document.getElementById('currentBalance').innerText = newBalaNce
       

        // Add transection history
        const div = document.createElement('div')
        div.classList.add('bg-yellow-300')
        div.innerHTML = `
        <h1> Cashout History </h1>
        <p> Cashout ${inputCashOutMoney} Tk. Main Balance ${newBalaNce}
        `
        document.getElementById('transsecton-history').append(div)
    }else{
        alert('Please Check Your Password')
    }
})