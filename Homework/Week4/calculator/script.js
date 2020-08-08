
       var _product = document.getElementById('multiply');
       var sum = document.getElementById('add');
       var quotient = document.getElementById('division');
       var _difference = document.getElementById('substraction');

       sum.addEventListener('click', function addValues() {
            var sum = parseInt(first_NUM .value) + parseInt(secNUM.value);
            answer.innerHTML = sum;
        } );
       _product.addEventListener('click',  function multiplyValues() {
            var sum = parseInt(first_NUM.value) * parseInt(secNUM.value);
            console.log(sum);
            answer.innerHTML = sum;
        });
       quotient.addEventListener('click',divideValues);
       _difference.addEventListener('click',substractValues);

       var first_NUM = document.getElementById("number1");
       var secNUM = document.getElementById("number2");
       var answer = document.getElementById("answer")

       function divideValues(){
           var sum = parseInt(first_NUM.value) / parseInt(secNUM.value);

           //check if either num is 0 or not
           if (parseInt(secNUM.value) == 0) {

               answer.innerHTML = sum;
               document.getElementById("answer").innerHTML = "Can't divide by zero, sorry try again";
           }
           else {
               answer.innerHTML = sum;
           }
       }
       function substractValues(){
           var total = parseInt(first_NUM.value) - parseInt(secNUM.value);
           console.log(total);
           // innerHTML
           answer.innerHTML = total;
       }
