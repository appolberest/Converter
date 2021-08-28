let btn = document.querySelector('button');
let result = document.querySelector('.result');
let convertOF = document.querySelector('#convert-of');
let convertTO = document.querySelector('#convert-to');


let usdRate = +document.querySelector('.dollar').innerHTML; //курс доллара
let eurRate = +document.querySelector('.euro').innerHTML; //курс евро
let final = 0;

/* console.log(of);
console.log(to); */
/* console.log(usdRate);
console.log(eurRate); */    //проверки значений


btn.addEventListener('click', showResult);

function showResult() {
    result.style.opacity = '1';
    result.innerHTML = getResult();
 }

 function getResult() {
    let amount = +document.querySelector('#amount').value;
    let of = convertOF[convertOF.selectedIndex].innerHTML;
    let to = convertTO[convertTO.selectedIndex].innerHTML;
     switch(of){
        case 'USD': //меняем из доллара

            if(to=='USD'){
                final = amount*1;
            }
            else if(to == 'EUR'){
                final = amount*(usdRate/eurRate);
            }
            else if(to == 'UAH'){
                final = amount * usdRate;
            }
            break;


        case 'EUR': //меняем из евро

            if(to=='USD'){
                final = amount*(eurRate/usdRate);
            }
            else if(to == 'EUR'){
                final = amount*1;
            }
            else if(to == 'UAH'){
                final = amount * eurRate;
            }
            break;


        case 'UAH': // меняем из гривны
            if(to=='USD'){
                final = amount/usdRate;
            }
            else if(to == 'EUR'){
                final = amount/eurRate;
            }
            else if(to == 'UAH'){
                final = amount * 1;
            }
            break;
     }

    return final.toFixed(2);
 }