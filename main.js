const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.item');
const prevBtn = document.querySelector('.icon-left');
const nextBtn = document.querySelector('.icon-right');

const header =   document.getElementById('header');

let index = 0;

prevBtn.onclick = () =>{
  if(index > 0 ) {
    index--;
    updateBanner();
  }
} 


nextBtn.onclick = () =>{

  if(index < slide.length - 1) {
    index++;

    updateBanner();
  }
} 
function updateBanner() {
  slides.style.transform = `translateX(-${index * 100}%)`
}

setInterval(()=>{
     index = (index + 1) % slide.length;
      updateBanner();
},3000)