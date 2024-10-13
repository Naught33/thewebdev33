import { viewID,
    viewClassf,
    viewClassp,
    viewTagp,
    viewTagf,
    viewTag } from "./Utilities.js";

const card = viewID('card');
// const indicator = viewID('temp')
const rect = card.getBoundingClientRect();
const blur = viewID('circle');
const mode = viewID('active');
const day = viewID('day');
const dark = viewID('dark');


//card interractions
let posX=0;
let posY=0;

card.addEventListener('mousemove', e =>{
    posX = ((e.clientX-rect.left)-rect.width/2)/rect.width*20;
    posY = ((e.clientY-rect.top)-rect.height/2)/rect.height*20;

    card.style.transform = `rotateX(${posX}deg) rotateY(${posY}deg)`;
    blur.style.right = e.clientX-rect.left + 'px';
    blur.style.bottom = e.clientX-rect.top + 'px';
});

//resetting the rotation of the card

card.addEventListener('mouseleave', ()=>{
    card.style.transform = `rotateX(0deg) rotateY(0deg)`;
    blur.style.right = '0px';
});


//setting and unsetting light and darkmode
let isDark = false;

function toggleDark(){
    mode.style.left = 'unset';
    if(!isDark){
        mode.style.right = '0';
        mode.style.borderRadius = '0 4px 4px 0';
        day.style.color = 'black';
        dark.style.color = 'white';
        document.body.classList.add('dark');
        isDark=true;
        return;
    }

        mode.style.left = 0;
        mode.style.borderRadius = '4px 0 0 4px';
        day.style.color = 'white';
        dark.style.color = 'black';
        document.body.classList.remove('dark');
        isDark=false;
}

day.addEventListener('click',(e)=>{
    e.stopPropagation();
    toggleDark();
});

dark.addEventListener('click',(e)=>{
    e.stopPropagation();
    toggleDark();
});