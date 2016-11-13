function cashRegister( ) {

  var displayValue = 0;

  function registerTotal( ) {
    var regTotal = 0;
  }
  //creating function to chagne display to button value

  var display = document.createElement('p');
  display.id = "display";
  display.innerHTML = displayValue;
  displayDiv.appendChild(display);

 var button_seven = document.createElement('button');
 button_seven.innerHTML = "7";
 seven.appendChild(button_seven);
 document.getElementById('seven').addEventListener("click",function () {
  regAdd(7);
 });
   // body...




//var button_eight = document.createElement('button');
//button_eight.innerHTML = "8";
//eight.appendChild(button_eight);
//document.getElementById("eight").addEventListener("click",regAdd(8));


 // var button_nine = document.createElement('button');
 // button_nine.class = 'numbers';
 // button_nine.innerHTML = "9";
 // numbers.appendChild(button_nine);
//
 // var button_four = document.createElement('button');
 // button_four.class = 'numbers';
 // button_four.innerHTML = "4";
 // numbers.appendChild(button_four);
//
 // var button_five = document.createElement('button');
 // button_five.class = 'numbers';
 // button_five.innerHTML = "5";
 // numbers.appendChild(button_five);
//
 // var button_six = document.createElement('button');
 // button_six.class = 'numbers';
 // button_six.innerHTML = "6";
 // numbers.appendChild(button_six);
//
 // var button_one = document.createElement('button');
 // button_one.class = 'numbers';
 // button_one.innerHTML = "1";
 // numbers.appendChild(button_one);
//
 // var button_two = document.createElement('button');
 // button_two.class = 'numbers';
 // button_two.innerHTML = "2";
 // numbers.appendChild(button_two);
 // var button_three = document.createElement('button');
 // button_three.class = 'numbers';
 // button_three.innerHTML = "3";
 // numbers.appendChild(button_three);

 function regAdd(x) {
    displayValue = x;
    display.innerHTML = displayValue;

  }





}

cashRegister();
