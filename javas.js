let img2 = document.getElementById('img2');
let img3 = document.getElementById('img3');
let couch = document.querySelector('couch');
let btn = document.querySelector('btn');
window.onscroll = function(){
    let value = scrollY;
    img3.style.left = value * 3  + 'px';
    img2.style.right = value * 3 + 'px';
    couch.style.top = value + 'px';
    btn.style.top= value + 'px';
    
}

