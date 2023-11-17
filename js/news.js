// news 의 배경 숨겨졌다가, 스크롤에 위치에 따라 등장 
const newsContent = document.querySelector('.news-container .content')
const newsBg = document.querySelector('.bg');
//뉴스 글씨 내려가기
function newsContnetMove() {

}

//뉴스 배경 올리기 
// function newsBgMove() {

// }

//스크롤에 따라서 움직이다 
window.addEventListener('scroll', function(){
    console.log(window.scrollY);
    if(window.scrollY <= 1597){
        newsBg.style.transform = `translate(400px, 0)`
        newsBg.style.transition = 'all 3s ease';
        console.log('실행중')
    
    }else if(1655 <= window.scrollY <=1972){
        newsBg.style.transform = `translate(0px, 0)`
        newsBg.style.transition = 'all 3s ease';
        console.log('실행중')
    }
});
