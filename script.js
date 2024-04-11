// (function() {
//     let screen = document.querySelector('.screen');
//     let buttons = document.querySelectorAll('.btn');
//     let clear = document.querySelector('.btn-clear');
//     let equal = document.querySelector('.btn-equal');

//     buttons.forEach(function(button) {
//         button.addEventListener('click', function(e) {
//             let value = e.target.dataset.num;
//             screen.value += value;
//         })
//     });

//     equal.addEventListener('click' , function(e) {
//         if (screen.value === '') {
//             screen.value = "Please enter";
//         } else {
//             let answer = eval(screen.value);
//             screen.value = answer;
//         }
//     });

//     clear.addEventListener('click', function(e) {
//         screen.value= "";
//     });


// })();

let string = "";
let clear = document.querySelector('.btn-clear');
let buttons = document.querySelectorAll('.btn');

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'C'){
            string = "";
            document.querySelector('input').value = string;
        }

        else if(e.target.innerHTML == 'M+'){
            string = "";
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'M-'){
            string = "";
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'CE'){
            string = "";
            document.querySelector('input').value = string;
        }
        
        else{
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
});

$(document).keypress(function(event){
    console.log(event.which);
    //0
    if(event.which == 48){
      string += 0;
      $("#calc").text(string);
    }
});