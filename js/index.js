
var menu = document.querySelector('.menu-icon');

var showMenu = document.querySelector('.header-menu');

menu.addEventListener('click', function () {
    if (showMenu.classList.contains('menu-show')) {
        showMenu.classList.remove('menu-show');
        document.body.style.overflow = 'visible';
        menu.src="./images/Menu.png"
    } else {
        showMenu.classList.add('menu-show');
        document.body.style.overflow = 'hidden';
       menu.src="./images/close.png";
    }

})
var header = document.querySelector('.header-wrap')

window.addEventListener('scroll',function(){
   if(this.window.scrollY > 28){
    header.style.backgroundColor='#bbd0ff';
    header.style.transition = 'background-color 0.5s ease';
    header.style.transtition=''}
   else{
    header.style.backgroundColor='#fff'
   }

}) //page를 의미함 

//스크롤이 섹션으로 다 내려올 경우 100% width 

var store = document.querySelector('.store');
var scrollBar = document.querySelector('.scroll-bar');
var scrollBywitdth = 10;

window.addEventListener('scroll',function(){
    if(window.scrollY > 1110){
        if (scrollBywitdth < 100) {
            scrollBywitdth += 10;

            scrollBar.style.width = `${scrollBywitdth}%`;
            scrollBar.style.transition = 'width 3s ease';
        }
    }
    else if(window.screenY <=1400){
        if (scrollBywitdth > 0) {
            scrollBywitdth -=50;
            scrollBar.style.width = `${scrollBywitdth}%`;
            scrollBar.style.transition = 'width 1s ease';
        }
    }
    
})