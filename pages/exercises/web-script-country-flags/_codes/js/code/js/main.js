import flags from './model/flags.js';

function flagCard(flags) {
    let codigo = '';
    for(const flag of flags){
       codigo +=  `<div class="flag col-2 my-2 text-center">
       <img src="./imgs/flags/${flag.id}.png" alt="${flag.name}">
       <p>${flag.name}</p>
     </div>` 
    }
    return codigo;
}

let varient = document.querySelector("main");
varient.innerHTML = flagCard(flags)