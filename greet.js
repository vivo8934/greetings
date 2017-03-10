var BtnC = document.querySelector('#btnC');
var BtnR = document.querySelector('#btnR');
var textArea = document.querySelector('.myText');
var helloList = document.querySelector('.output');
var Counter = document.querySelector('.counter')

if (localStorage.count === undefined) {
  localStorage.setItem('count', 0);
}
if (localStorage.getItem('salute') === undefined) {
  localStorage.setItem('salute', JSON.stringify({}));
}
Counter.innerHTML = localStorage.count;
BtnC.addEventListener('click', () => {
  var Rbb = document.querySelector("input[name = 'languages']:checked")
  var x = Rbb.value;
  if (textArea.value.length <= 0) {

    alert("Name must be filled out");
  } else {


    helloList.innerHTML = x + (textArea.value.substr(0, 1).toUpperCase() + textArea.value.substr(1).toLowerCase());
  }
  var count = 0;

  var a = textArea.value;
  var salute = JSON.parse(localStorage.getItem('salute'));
  if (salute[a] === undefined && a.length > 0) {
    salute[a] = 1;
    localStorage.count++;
    Counter.innerHTML = localStorage.count;
    localStorage.setItem('salute', JSON.stringify(salute));
  }

});
BtnR.addEventListener('click', () => {
  helloList.innerHTML = '';
  textArea.value = '';
});
