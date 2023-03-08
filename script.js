const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slider = document.querySelector('.slider');
const images =document.querySelectorAll('.image');
let pixel=1;
const length=images.length;
right.addEventListener('click',()=>{
    if(pixel<length){  
    slider.style.transform = `translateX(-${800*pixel}px)`; 
    pixel++;
    }
    else{
        slider.style.transform = `translateX(0px)`; 
        pixel=1;
    }
    });
left.addEventListener('click',()=>{
    if(pixel!=1){  
    slider.style.transform = `translateX(-${800*(pixel-2)}px)`; 
    pixel--;
    }
    else{
        slider.style.transform = `translateX(-${800*(length-1)}px)`; 
        pixel=(length);

    }
    
});

