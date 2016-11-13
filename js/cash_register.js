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

var button_eight = document.createElement('button');
button_eight.innerHTML = "8";
eight.appendChild(button_eight);
document.getElementById("eight").addEventListener("click",function(){regAdd(8);});

 var button_nine = document.createElement('button');
 button_nine.innerHTML = "9";
 nine.appendChild(button_nine);
 button_nine.addEventListener("click", function(){regAdd(9);});

 var button_four = document.createElement('button');
 button_four.innerHTML = "4";
 four.appendChild(button_four);
 button_four.addEventListener("click", function(){regAdd(4);});

 var button_five = document.createElement('button');
 button_five.innerHTML = "5";
 five.appendChild(button_five);
 button_five.addEventListener("click", function(){regAdd(5);});

 var button_six = document.createElement('button');
 button_six.innerHTML = "6";
 six.appendChild(button_six);
 button_six.addEventListener("click", function(){regAdd(6);});

 var button_one = document.createElement('button');
 button_one.innerHTML = "1";
 one.appendChild(button_one);
 button_one.addEventListener("click", function(){regAdd(1);});

 var button_two = document.createElement('button');
 button_two.innerHTML = "2";
 two.appendChild(button_two);
 button_two.addEventListener("click", function(){regAdd(2);});

 var button_three = document.createElement('button');
 button_three.innerHTML = "3";
 three.appendChild(button_three);
 button_three.addEventListener("click", function(){regAdd(3);});

 function regAdd(x) {
    displayValue = x;
    display.innerHTML = displayValue;

  }





}

cashRegister();
