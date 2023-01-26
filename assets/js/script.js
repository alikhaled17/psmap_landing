// document.getElementById('but').addEventListener('click', (e)=>{
//     e.preventDefault();
//     document.getElementById('style').attributes[2].value = 'assets/css/ar.scss'
//     console.log(document.getElementById('style').attributes[2].value);
// })

document.querySelectorAll('.dropdown-item').forEach((ele)=>{
    console.log(ele);
})
// const links = document.getElementsByClassName('dropdown-item');
console.log(document.querySelectorAll('.dropdown-item'));

function clickNavItem(e) {
    document.querySelector('.nav-link.active').classList.remove('active')
    e.target.classList.add('active')
}
function clickDropdownItem(e) {
    document.querySelector('.dropdown-item').classList.remove('after_content');
    e.target.classList.add('after_content')
}



function handleIFrames(e) {
    console.log(e);
}


function handleIFrame() {
    let video = document.querySelector(".carousel-item.active iframe")
    let videoSrc = video.getAttribute("src")
   video.setAttribute("src", "") 
   video.setAttribute("src", videoSrc) 
}
