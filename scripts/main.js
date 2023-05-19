var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Бол.печать-Ивана-Грозного.jpg') {
      myImage.setAttribute ('src','images/Иоанн-Грозный.png');
    } else {
      myImage.setAttribute ('src','images/Бол.печать-Ивана-Грозного.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Пожалуйста, введите имя.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'ГРОЗНЫЙ, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'ГРОЗНЫЙ, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}
