const paragrafos = document.getElementsByTagName("p");
//console.log(paragrafos)

//oculta o 1 
//paragrafos[1].style.display = "none"; 

//oculta o paragrafo 2 e 3 paragrafos
// for (let i = 0; i < paragrafos.length; i++) {
//     paragrafos[1].style.display = 'none'; 
//     paragrafos[2].style.display = 'none'; 
// }

const btn = document.getElementById('btn');

btn.addEventListener('click', () =>{   
    for (let i = 1; i <= 2; i++) { // i = 1 ->paragrafo 2, i = 2 ->paragrafo 3
        if (paragrafos[i].style.display === 'none') {
            paragrafos[i].style.display = 'block'; 
            btn.innerHTML = "esconder paragrafos";
        } else {
            paragrafos[i].style.display = 'none'; 
            btn.innerHTML = "mostrar paragrafos";
        }
    } 

})


