import validator from './validator.js';

// console.log(validator);
 const number = document.getElementById('validate');
 number.addEventListener('click', function send (event) {
   event.preventDefault();
    const cardNumber = document.getElementById('inputNumber').value;
    validator.isValid(cardNumber);
 });
 //variables del nombre
 let nameCard = document.querySelector(".details__name");
 let nameInput = document.querySelector(".form__cardHolder");
 let nameErrorDiv = document.querySelector(".form__cardHolder--error");
 //ingreso dinamico del nombre
  nameInput.addEventListener("input", function writeName () {
    //validando si hay numeros en el input
    let regExpNums = /[0-9]/g;
    if (regExpNums.test(nameInput.value)) {
      showError(nameInput, nameErrorDiv, "Error de formato, solo letras");
    } else {
      nameErrorDiv.innerText = ""
    }
    //mostrando texto por defecto
    if (nameInput.value == "") {
      nameCard.innerText = "Nombre del Titular"
    } else {
      nameCard.innerText = nameInput.value;
    }
  });
  //variables ingreso dinamico
  let cardNumberView = document.querySelector(".cardNumView");
  let inputNumber = document.querySelector("#inputNumber");
  let numberErrorDiv = document.querySelector(".form__cardNumber--error");
  //ingreso dinamico
  inputNumber.addEventListener("input", function writeNums (event) {
    let inputValue = event.target.value;
    validator.maskify (inputValue)
    //console.log(validator.maskify.maskifyString, "estoy en index")
    //actualizando dinamicamente la tarjeta
    let maskifyWrite = (Array(inputValue.length-3).join("#")+inputValue.substring(inputValue.length-4));
    cardNumberView.innerText = maskifyWrite.valueOf();
    //validando si hay letras
    let expRegLetters = /[A-z]/g;
    if (expRegLetters.test(inputNumber.value)) {
      showError(inputNumber, numberErrorDiv, "Error de formato, solo numeros");
    } else {
      inputNumber.value = inputValue.replace(/[\s]/g, "");
      numberErrorDiv.innerText = "";
    }
    //mostrando texto por defecto
    if (maskifyWrite == "") {
      cardNumberView.innerText = '0000 0000 0000 0000'
    }
    //respuesta dinamica a "tarjeta valida"/"tarjeta no valida"
const cardForm = document.querySelector(".main-container__form-section");
const thanks = document.querySelector(".thanks-section");
const visa = document.querySelector(".logo-visa");
const mastercard = document.querySelector(".logo-mastercard");
const failSection = document.querySelector(".fail-section");
let btnBack = document.querySelector("#back");
btnBack.addEventListener("click", function back (){
 cardForm.style.display = "block";
 thanks.style.display = "none";
 failSection.style.display = "none";
});
let cardIsValid = false;
let cardIsVisa = false;
let cardIsMastercard = false;
const regExpVisa = /^4\d{3}-?\d{4}-?\d{4}-?\d{4}$/  //Visa
const regExpMastercard = /^5[1-5]\d{2}-?\d{4}-?\d{4}-?\d{4}$/  //Mastercard
const expRegCards = /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/;
number.addEventListener("click", function getValidate (){
  if (expRegCards.test(inputValue)) {
    cardIsValid = true;
  } else{
    cardIsValid = false;
  }
  if (regExpVisa.test(inputValue)) {
    cardIsVisa = true;
  } else{
    cardIsVisa = false;
  }
  if (regExpMastercard.test(inputValue)) {
    cardIsMastercard = true;
  } else{
    cardIsMastercard = false;
  }
  if (cardIsValid == true) {
    cardForm.style.display = "none";
    failSection.style.display = "none";
    thanks.style.display = "block";
  } else{
    cardForm.style.display = "none";
    thanks.style.display = "none";
    failSection.style.display = "block"
  }
    if (cardIsMastercard == true && cardIsVisa == false) {
    mastercard.style.display = "block";
    visa.style.display = "none"
  } else{
    mastercard.style.display = "none";
  }
  if (cardIsVisa == true && cardIsMastercard == false) {
    visa.style.display = "block";
    mastercard.style.display = "none";
  } else {
    visa.style.display = "none"
  }
});
  });
    //funcion dinamica para el error
    function showError (divInput, divError, msgError) {
      divError.innerText = msgError;
    }
//variables del mes
let expMonth = document.querySelector(".expMonth");
let selectMonth = document.querySelector("#selectMonth");
//ingreso dinamico del mes
 selectMonth.addEventListener("change", (event)=> {
  expMonth.textContent = event.target.value;
 });
//variables del año
let expYear = document.querySelector(".expYear");
let selectYear = document.querySelector("#selectYear");
//ingreso dinamico del año
 selectYear.addEventListener("change", (event)=> {
  expYear.textContent = event.target.value;
 });
//variables del CVV
let cvvView = document.querySelector(".cvvView");
let cvvInput = document.querySelector("#cvvNumber");
let cvvErrorDiv = document.querySelector(".form__cvvNumber--error");
//ingreso dinamico del año
 cvvInput.addEventListener("input", (event)=> {
  cvvView.textContent = event.target.value;
      //validando si hay letras
      let expRegLetters = /[A-z]/g;
      if (expRegLetters.test(cvvInput.value)) {
        showError(cvvInput, cvvErrorDiv, "Solo numeros");
      } else {
        cvvErrorDiv.innerText = "";
      }
      //mostrando texto por defecto
      if (cvvInput == "") {
        cvvView.textContent = "000"
      }
 });