const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slider = document.querySelector('.slider');
const images =document.querySelectorAll('.image');
let pixel=1;
console.log(images.length);
right.addEventListener('click',()=>{
    if(pixel<images.length){  
    slider.style.transform = `translateX(-${800*pixel}px)`; 
    pixel++;
    }
    else{
        slider.style.transform = `translateX(0px)`; 
        pixel=1;

    }
    
});

