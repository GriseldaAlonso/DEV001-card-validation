const validator = {
  isValid: function getNumber (cardNumber) {
    //algoritmo de Luhn
    const numbersReverse = cardNumber.split('').reverse().join('');//revirtiendo el orden del string
    let evenNumbers = [];//arreglo que contendrá 
    for (let i = 0; i < numbersReverse.length; i++) {//bucle que rrecorrera el string
      if (i % 2 !== 0) {// condición si los valores son multiplos de 2
        let multiply = numbersReverse[i] * 2;//multiplicando los valores que cumplen la condicion y guardandolos en una variable 
        if (multiply >= 10) {//si el resultado es igual o mayor que 10
          let sumNumbers = 0;
          while (multiply) {
            sumNumbers += multiply % 10;
            multiply = Math.floor(multiply / 10)
          }
          evenNumbers.push(sumNumbers)
        } else {
          evenNumbers.push(multiply);
        }
      }  else {
        evenNumbers.push(parseInt(numbersReverse[i]));
      }
    }
    let numberValidate = 0;
    for (let j = 0; j < evenNumbers.length; j++) {
      numberValidate += evenNumbers[j];
    }
    let totalValidate = numberValidate % 10;
     if (totalValidate === 0) {
      return true;
     } else{
      return false;
     }
  },

  maskify: (stringToMaskify)=>{
    let sizeString = stringToMaskify.length;
    let maskifyString = "";
      if (sizeString <= 4) {
        return stringToMaskify
      } else {
        maskifyString = (Array(stringToMaskify.length-3).join("#")+stringToMaskify.substring(stringToMaskify.length-4));
      } 
      if (sizeString > 4) {
        return maskifyString;
      }
  } 
};

export default validator;
