let itemSrc = null;
function arrastar(event){
    itemSrc = event.target.src;
    document.querySelector('.tshirt__album').classList.add('arrastar');
}
function soltar(event){
    var img = document.createElement('img');
    img.src = itemSrc;
    document.querySelector('.tshirt__album').innerHTML = '';
    document.querySelector('.tshirt__album').appendChild(img);
    document.querySelector('.tshirt__album').classList.remove('arrastar');
}
function permiteSoltar(event){
    event.preventDefault();
}