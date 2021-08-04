let addButton = document.querySelector('#add');
let removeButton= document.querySelector('#remove');
let output= document.querySelector('h1');
function handleEvent(e){
    output.innerText = `X: ${e.pageX} Y:${e.pageY}  `;
};
addButton.addEventListener('click', function(){
    document.addEventListener('mousemove',handleEvent) 
});
removeButton.addEventListener('click', function(){
    document.removeEventListener('mousemove', handleEvent);
});
