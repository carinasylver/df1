

const paragrafos = document.getElementsByTagName("p");
//console.log(paragrafos)

//console.log(paragrafos[0].textContent = "Paragrafo " + [0] + " : " + paragrafos[0].textContent);

// for (let i = 0; i < paragrafos.length; i++) {
//     console.log(paragrafos[i].textContent = "Paragrafo " + (i + 1) + " : " + paragrafos[i].textContent);
// }


//com função onclick
// function alterarParagrafos(){
//     let paragrafos = document.getElementsByTagName("p");
//     //console.log(paragrafos[0].textContent = "Paragrafo " + [0] + " : " + paragrafos[0].textContent);
//     for (let i = 0; i < paragrafos.length; i++) {
//          console.log(paragrafos[i].textContent = "Paragrafo " + (i + 1) + " : " + paragrafos[i].textContent);
//     }
// }

// funcao anonima evento do clique 
const btnAlterarParagrafo = document.getElementById("btnAlterarParagrafo")
// console.log(btnAlteraParagrafo)
btnAlterarParagrafo.addEventListener("click", ()=>{
    for (let i = 0; i < paragrafos.length; i++) {
        console.log(paragrafos[i].textContent = `Paragrafo${i + 1}: ` + paragrafos[i].textContent);
        
    }}
)

