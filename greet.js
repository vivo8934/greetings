var BtnGreet = document.querySelector('#btnC');
var BtnClear = document.querySelector('#btnR');
var myText = document.querySelector('.myText');
var greetingOutput = document.querySelector('.output');
var Counter = document.querySelector('.counter')
var ClearCounter = document.querySelector('#btnReset')


function onLocalStorage() {

  if (localStorage.count === undefined) {
    localStorage.setItem('count', 0);
  }
  if (localStorage.getItem('greetedList') === undefined) {
    localStorage.setItem('greetedList', JSON.stringify({}));
  } else {
    greetedList = JSON.parse(localStorage.getItem('greetedList'))
  }
  Counter.innerHTML = localStorage.count;
}
function textfieldValue(){
  var firstName = myText.value;
  if(firstName < 0){
    alert('please enter name');
  }
    else{
      return firstName;
      console.log(firstName);
    }
  }


function checkLanguages() {

  if(document.getElementById("English").checked === true) {

    return "English";
  } else if (document.getElementById("IsiXhosa").checked === true) {
    return "IsiXhosa";
  } else if (document.getElementById("Mandarin").checked === true) {
    return "Mandarin";

  }
}

  //var count = 0;
  function generatingCounter() {

    var AreaValue = textArea.value;
    var greetedList = JSON.parse(localStorage.getItem('greetedList'));
    if (greetedList[AreaValue] === undefined && AreaValue.length > 0) {
      greetedList[AreaValue] = 1;
      localStorage.count++;
      Counter.innerHTML = localStorage.count;
      localStorage.setItem('greetedList', JSON.stringify(greetedList));
    }
  }

  function generatingMsg() {

    greet();
    // generatingCounter()
  }

  BtnClear.addEventListener('click', () => {
    greetingOutput.innerHTML = '';
    textArea.value = '';
  });

  ClearCounter.addEventListener('click', () => {
    localStorage.count = 0;
    generatingCounter();
  });

  BtnGreet.addEventListener('click', () => {
    greetingOutput.innerHTML = greeting(checkLanguages(), textfieldValue()); //radioValue + (textArea.value.substr(0, 1).toUpperCase() + textArea.value.substr(1).toLowerCase());

  });

  onLocalStorage();
