var BtnGreet = document.querySelector('#btnC');
var BtnClear = document.querySelector('#btnR');
var textArea = document.querySelector('.myText');
var greetingOutput = document.querySelector('.output');
var Counter = document.querySelector('.counter')
var ClearCounter = document.querySelector('#btnReset')

if (localStorage.count === undefined) {
  localStorage.setItem('count', 0);
}
if (localStorage.getItem('greetedList') === undefined) {
  localStorage.setItem('greetedList', JSON.stringify({}));
}
else{
  greetedList  = JSON.parse(localStorage.getItem('greetedList'))
}
Counter.innerHTML = localStorage.count;
BtnGreet.addEventListener('click', () => {
  var RadioBtnCheck = document.querySelector("input[name = 'languages']:checked")
  var radioValue = RadioBtnCheck.value;
  if (textArea.value.length <= 0) {

    alert("Name must be filled out");
  } else {


    greetingOutput.innerHTML = radioValue + (textArea.value.substr(0, 1).toUpperCase() + textArea.value.substr(1).toLowerCase());
  }
  var count = 0;

  var a = textArea.value;
  var greetedList = JSON.parse(localStorage.getItem('greetedList'));
  if (greetedList[a] === undefined && a.length > 0) {
    greetedList[a] = 1;
    localStorage.count++;
    Counter.innerHTML = localStorage.count;
    localStorage.setItem('greetedList', JSON.stringify(greetedList));
  }

});
BtnClear.addEventListener('click', () => {
  greetingOutput.innerHTML = '';
  textArea.value = '';
});

ClearCounter.addEventListener('click', () => {
  localStorage.count = 0;
  Counter.innerHTML = localStorage.count;
});
