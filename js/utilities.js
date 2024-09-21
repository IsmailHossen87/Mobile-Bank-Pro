function getInputFieldId(id){
    const inpNumber = document.getElementById(id).value;
    const INPNum = parseFloat(inpNumber)
    return INPNum;
}
function getInputTextField(id){
    const textField = document.getElementById(id).innerText;
    const textFieldNumber = parseFloat(textField)
    return textFieldNumber;
}

function ShowSectionId(id){
    // ADD ALL HIDDEN SECTION
    document.getElementById('addMoneySecton').classList.add('hidden')
    document.getElementById('cashOutSection').classList.add('hidden')
    document.getElementById('TransactionSection').classList.add('hidden')
     // SHOW SECTION WHEN CKICK THE BUTTON
    document.getElementById(id).classList.remove('hidden')
   
}