console.log("Javascript is running!");

const foodGraphic =document.querySelector('#food')
const catfaceGraphic =document.querySelector('#catface')
const tunaGraphic =document.querySelector('#tuna')
const milkGraphic =document.querySelector('#milk')
const yarnGraphic =document.querySelector('#yarn')
const sleepyGraphic =document.querySelector('#sleepy')

function logThisId(){
    console.log(this);
    console.log('clicked on this element', this.id);
}


foodGraphic.addEventListener('click',logThisId);
catfaceGraphic.addEventListener('click',logThisId);
tunaGraphic.addEventListener('click',logThisId);
milkGraphic.addEventListener('click',logThisId);
yarnGraphic.addEventListener('click',logThisId);
sleepyGraphic.addEventListener('click', logThisId);


