document.getElementById('addMoney-btn').addEventListener('click',function(event){
    event.preventDefault();

    const ADDmoneyInput = getInputFieldId('input-addMoney')
    const addPass = getInputFieldId('input-addPass')
      // validation
      if(isNaN(ADDmoneyInput)){
        alert('Filed to AddMoney')
        return;
    }
    if(ADDmoneyInput && addPass === 1234){
        const CurrentBalance = getInputTextField('currentBalance')
        const newBalance = CurrentBalance + ADDmoneyInput
        document.getElementById('currentBalance').innerText = newBalance

        // add transection history
        const p =  document.createElement('p')
        p.innerText = `Added: ${ADDmoneyInput} Tk. Main Balance : ${newBalance}`
        document.getElementById('transsecton-history').append(p)

    }else{
        alert('Please Check Your password')
    }
})