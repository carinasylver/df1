

const paragrafo = document.getElementById('hiddenText');
//console.log(paragrafo)

//seta o valor inicial de none p block
// setTimeout(() => {
//     paragrafo.style.display = 'block';
//   }, 2000);


//console.log(btn)
const btn = document.getElementById('btn');

//com onclick
// function mostrarOcultarParagrafo() {
//     if (paragrafo.style.display === "none") {
//         paragrafo.style.display = "block";
//         btn.textContent = "esconder";
//     } else {
//         paragrafo.style.display = "none";
//         btn.textContent = "mostrar";
//     }
// }

//com funçao anonima
btn.addEventListener('click', () =>{
    if (paragrafo.style.display === "none") {
        paragrafo.style.display = "block";
        btn.textContent = "esconder";
    } else {
        paragrafo.style.display = "none";
        btn.textContent = "mostrar";
    }
});



