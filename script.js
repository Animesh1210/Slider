const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slider = document.querySelector('.slider');
const bottom = document.querySelector('.bottom');
const images =document.querySelectorAll('.image');
let pixel=1;
const length=images.length;
//for button
for(let i=0;i<length;i++)
{
    const div= document.createElement("div");
    div.className="button";
    bottom.appendChild(div);
}
const buttons=document.querySelectorAll(".button");
buttons[0].style.backgroundColor="white";
const resetBg = () =>{
buttons.forEach((button,i) => {
button.style.backgroundColor="transparent";
});
};
buttons.forEach((button,i) => {
    button.addEventListener("click",()=>{
        slider.style.transform=`translateX(-${i*800}px)`;
        resetBg(); 
        pixel=i+1;
        buttons[i].style.backgroundColor="white";
    });
});
//for slider

right.addEventListener('click',()=>{
    if(pixel<length){  
    slider.style.transform = `translateX(-${800*pixel}px)`; 
    pixel++;
    resetBg(); 
    buttons[pixel-1].style.backgroundColor="white";
    }
    else{
        slider.style.transform = `translateX(0px)`; 
        pixel=1;
        resetBg(); 
        buttons[pixel-1].style.backgroundColor="white";
    }
    });
left.addEventListener('click',()=>{
    if(pixel!=1){  
    slider.style.transform = `translateX(-${800*(pixel-2)}px)`; 
    pixel--;
    resetBg(); 
    buttons[pixel-1].style.backgroundColor="white";
    }
    else{
        slider.style.transform = `translateX(-${800*(length-1)}px)`; 
        pixel=(length);
        resetBg(); 
    buttons[pixel-1].style.backgroundColor="white";

    }
    
});
