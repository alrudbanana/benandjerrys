// 아이스크림 타입별 이미지 출력 
//버튼 변수
const PINT = document.querySelector('.pint');
const MINI = document.querySelector('.mini');
const SMALL = document.querySelector('.small');
const MORE = document.querySelector('.icecream-moreInfo');

//이미지 변수 
const PINT_IMG = document.querySelector('.pint-icecream-img');
const MINI_IMG = document.querySelector('.mini-icecream-img');
const SMALL_IMG = document.querySelector('.scoop-icecream-img');

const ICECREAM_TYPE_IMG = document.querySelector('.icecream-type-img');


// 이미지 나타나기
function showIcecream(name) {
    container.classList.remove('hide')
    ICECREAM_TYPE_IMG.classList.add('hide')
    MORE.classList.add('hide')
} 

function hideIcecream(name) {
    name.classList.add('hide')
}

var currentImg = null;
//이전에 있던 이미지는 지우면서 해당 이미지 출력 
function ImgNotSame(showImg) {
    if (currentImg !== null) {
        // 다른 버튼이 눌린 경우 이전 버튼의 색 리셋
        // 해당 이미지 출력
        hideIcecream(currentImg);
    }
    showIcecream(showImg);
    currentImg = showImg;
}

//버튼 다시 누르면 이전 화면 이동 
//파인트 미니컴 스쿱 다시 보이고 사진 다시 보이고 밑에 아이스크림 제거 
//버튼 클릭시 실행되는 이미지 변경 

//1. 버튼 클릭 색 변경 , 기존 이미지 숨기고, 아이스크림 이미지 추가 
function buttonColorChange(name) {
    name.classList.add('button-change')
}

function buttonColorReset(name) {
    name.classList.remove('button-change')
}

var currentButton = null;

//버튼 다른 버튼과 색 다르게 
var count = 0;
function buttonNotSame(button) {
    if (currentButton !== null && currentButton !== button) {
        // 다른 버튼이 눌린 경우 이전 버튼의 색 리셋
        hideIcecream(currentButton);
    }
    if (count == 1) {
        buttonColorChange(button)
        console.log(count)

    } else if (count % 2 == 0) {
        buttonColorReset(button)
        console.log(count)
        count = 0;
    }
    currentButton = button;
}


PINT.addEventListener('click', function () {
    buttonNotSame(PINT);
    count++;
    ImgNotSame(PINT_IMG);
    console.log('실행중')
});

MINI.addEventListener('click', function () {
    buttonNotSame(MINI);
    count++;
    ImgNotSame(MINI_IMG)
    console.log('실행중')
});


SMALL.addEventListener('click', function () {
    buttonNotSame(SMALL);
    count++;
    ImgNotSame(SMALL_IMG)
    console.log('실행중')
});


// 터치 스크롤 구현 시작
let curPos = 0;
let postion = 0;
let startX, endX;
const IMG_WIDTH = 120;


innerImg.addEventListener('touchstart', touch_start);

innerImg.addEventListener('touchend', touch_end);

//이전 
function prev() {
    if (curPos > 0) {
        postion += IMG_WIDTH;
        innerImg.style.transform = `translateX(${postion}px)`;
        curPos -= 1;
    }
}
//이후 
function next() {
    if (curPos < 10) {
        postion -= IMG_WIDTH;
        innerImg.style.transform = `translateX(${postion}px)`;
        curPos = curPos + 1;
    }
}
//터치 스타트와 터치 앤드에 대한 함수 구현 

function touch_start(event) {
    startX = event.touches[0].pageX;
}

function touch_end(event) {
    endX = event.changedTouches[0].pageX;
    if (startX > endX) {
        next();
        console.log("postion" + postion)
        console.log("curPos" + curPos)
    } else {
        prev();
    }
}