function getInputValueById(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldValueStr = inputField.value;
    const inputFieldValueFloat = parseFloat(inputFieldValueStr);
    inputField.value = '';
    return inputFieldValueFloat
    
}

function getElementValueById(elementID){
    const element = document.getElementById(elementID);
    const elementValueStr = element.innerText;
    const elementValueFloat = parseFloat(elementValueStr);
    return elementValueFloat
}
function setValue(elementID, newValue){
    const textElement = document.getElementById(elementID);
    textElement.innerText = newValue;
}