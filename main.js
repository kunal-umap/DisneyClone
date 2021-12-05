const carousel = document.querySelector('.carousel');
let slider = [];

let slideIndex = 0;

const creatSlide = () => {
    if(slideIndex >= movies.length){
        slideIndex = 0;
    }
    
    let slide = document.createElement('div');
    let imgElement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');
    
    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    
    imgElement.src = movies[slideIndex].image;
    slideIndex++;
    h1.className = 'movieTitle';
    p.className = 'movieDescription';
    slide.className = 'slider';
    content.className = 'slideContent';

    carousel.appendChild(slide);
    slider.push(slide);

    if(slider.length){
        slider[0].style.marginLeft = `calc(-${100*(slider.length - 2)}% - ${30*(slider.length-2)}px)`;

    }

}
for(let i = 0; i<4;i++){
    creatSlide();
}

setInterval(()=>{
    creatSlide();
},3500);


const videoCard = document.querySelectorAll('.videoCard');

videoCard.forEach(item => {
    item.addEventListener('mouseover', () => {
        let video = item.children[1];
        video.play();
    })
    item.addEventListener('mouseleave', () => {
        let video = item.children[1];
        video.pause();
    })
})


let cardContainer = document.querySelectorAll('.cardContainer');
let previousBtn = document.querySelectorAll('.previousBtn');
let nextBtn = document.querySelectorAll('.nextBtn');

cardContainer.forEach((item,i) => {
    let containeerDimension = item.getBoundingClientRect();
    let containeerWidth = containeerDimension.width;
    nextBtn[i].addEventListener('click', ()=>{
        item.scrollLeft += containeerWidth - 200;
    })
    previousBtn[i].addEventListener('click', ()=>{
        item.scrollLeft -= containeerWidth - 200;
    })
})