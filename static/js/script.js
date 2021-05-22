// Challenge 1: Your age in days
function ageInDays(){
   let birthYear = prompt("What year were you born");
   var ageInDayss = ( 2021 - birthYear) * 365;
   let h1 = document.createElement('h1');
   let textAnswer = document.createTextNode('You are ' + ageInDayss + ' days old');
   h1.setAttribute('id', 'ageInDays')
   h1.appendChild(textAnswer);
   document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
   document.getElementById('ageInDays').remove();
}

function generateCat() {
   var image = document.createElement('img');
   var div = document.getElementById('flex-cat-gen');
   image.src = 'static/images/image2.jpg';
   div.appendChild(image);
}
