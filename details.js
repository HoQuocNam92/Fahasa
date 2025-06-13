



const thumbnails = document.querySelectorAll('.thumbnails img');
const imageMain = document.querySelector('.image-main img');





thumbnails.forEach((item)=>{
    item.onclick = ()=>{
        thumbnails.forEach((items)=>{
            items.classList.remove('active');
        })
        item.classList.add('active')
        imageMain.src = item.src;
    }
})