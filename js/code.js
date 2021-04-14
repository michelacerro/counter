let value = document.getElementById('counter-value');

let increase = function() {value.innerHTML++;}
let plus = document.getElementById('plus');
plus.addEventListener('click', increase);

let reduce = function() {value.innerHTML--;}
let minus = document.getElementById('minus');
minus.addEventListener('click', reduce);

let restart = function() {value.innerHTML = 0;}
let reset = document.getElementById('reset');
reset.addEventListener('click', restart);
