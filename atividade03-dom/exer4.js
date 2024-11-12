
const corInput = document.getElementById('colorInput');
//console.log(corInput)
const corDiv = document.getElementById('colorBox');
//console.log(corDiv)


btnAlterarCor.addEventListener('click', () =>{    
    corDiv.style.backgroundColor = corInput.value;
})


