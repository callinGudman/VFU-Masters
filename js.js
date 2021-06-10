'use strict'
let navLinks =document.getElementById("navLinks");
function showMenu(){
    navLinks.style.right = "0";
}
function hideMenu(){
    navLinks.style.right="-20rem";
}

//Video
const head = document.querySelectorAll('.head-col,.bottomSecond, .bottomFirst, .bottomAlone,.videoMob,.videoCv,.videoCvBB,.videoCvB');
const stopVideo = document.querySelector('.overlay,.overlays,.overlayTeam');
const testing = document.querySelector('.testing');
const openVideo = function (){
    testing.classList.remove('hidden');
    stopVideo.classList.remove('hidden');
}
const closeVideo = function (){
    testing.classList.add('hidden');
    stopVideo.classList.add('hidden');
}
for(let i = 0; i < head.length;i++){
    head[i].addEventListener('click',openVideo)
}
stopVideo.addEventListener('click', closeVideo);
document.addEventListener('keydown', function (e){
    if(e.key === 'Escape' && !testing.classList.contains('hidden')){
        closeVideo();
    }
})

