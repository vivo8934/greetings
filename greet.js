var BtnGreet = document.querySelector('#btnC');
var BtnClear = document.querySelector('#btnR');
var textArea = document.querySelector('.myText');
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
//checkForBlanks
function checkTextField() {

  if (textArea.value.length <= 0) {

    alert("Name must be filled out");
  } else {
    //chooseRadioBtn();
    //generatingCounter();
    var RadioBtnCheck = document.querySelector("input[name = 'languages']:checked")
    var radioValue = RadioBtnCheck.value;
    greetingOutput.innerHTML = radioValue + (textArea.value.substr(0, 1).toUpperCase() + textArea.value.substr(1).toLowerCase());
  }


}



//checkTextField();


  //var count = 0;
  function generatingCounter() {

  checkTextField();
  checkTextField();
  onLocalStorage();
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
  //  chooseRadioBtn();
  checkTextField();
  generatingCounter()
}

BtnClear.addEventListener('click', () => {
  greetingOutput.innerHTML = '';
  textArea.value = '';
});

ClearCounter.addEventListener('click', () => {
  localStorage.count = 0;
  generatingCounter();
});

BtnGreet.addEventListener('click', generatingMsg);
onLocalStorage();
