const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

const images = document.querySelectorAll('.photos img');

let index = 0;

prevBtn.onclick = function(){
    images[index].classList.remove('showed');
    index = index - 1;

    if(index < 0){
        index = images.length - 1;
    }
    console.log(index);
    images[index].classList.add('showed');

}

nextBtn.onclick = function(){
    images[index].classList.remove('showed');
    index = index + 1;
    
    if(index >= images.length){
        index = 0;
}

    images[index].classList.add('showed');
}