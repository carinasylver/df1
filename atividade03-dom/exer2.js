
let paragrafos = document.getElementsByTagName("p");

//console.log(paragrafos[0].style.color = "red")


// for (let i = 0 ; i < paragrafos.length; i++) {
//     const color = (i + 1) % 2 === 0 ? "blue" : "red";
//     paragrafos[i].style.color = color;
//     console.log(`paragrafo ${i + 1}: ${color}`);
// }

//com função onclick
// function alterarCorParagrafos() {
//     for (let i = 0; i < paragrafos.length; i++) {
//         const color = (i + 1) % 2 === 0 ? "blue" : "red";
//         paragrafos[i].style.color = color;
//         console.log(`paragrafo ${i + 1}: ${color}`);
//     }
// }

// funcao anonima evento do clique 
const btnAlterarCorParagrafo = document.getElementById("btnAlterarCorParagrafo")
// console.log(btnAlteraCorParagrafo)
btnAlterarCorParagrafo.addEventListener("click", () =>{
    for (let i = 0; i < paragrafos.length; i++) {
        //console.log(paragrafos[i].textContent = `Paragrafo${i + 1}: ` + paragrafos[i].textContent);
        const color = (i + 1) % 2 === 0 ? "blue" : "red";
        paragrafos[i].style.color = color;
        console.log(`paragrafo ${i + 1}: ${color}`);
    }}
)



