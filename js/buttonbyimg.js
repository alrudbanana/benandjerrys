const pintButton = document.querySelector('.pintButton');
const miniButton = document.querySelector('.miniButton');
const smallButton = document.querySelector('.smallButton');
const moreButton = document.querySelector('.icecream-moreInfo');


//이미지 변수 
const pintContainer = document.querySelector('.pint-icecream-img');
const miniContainer = document.querySelector('.mini-icecream-img');
const smallContainer = document.querySelector('.scoop-icecream-img');

const BASIC_IMG = document.querySelector('.icecream-type-img'); //기존이미지




//1. 버튼 클릭 색 변경 , 기존 이미지 숨기고, 아이스크림 이미지 추가 
function buttonColorChange(name) {
    name.classList.add('button-change')
    name.style.transition = 'background-color 0.3s ease';
}

function buttonColorReset(name) {
    name.classList.remove('button-change')
    name.style.transition = 'background-color 1s ease';
}

// 이미지 숨김 & 표시 & 그 전 화면 복구
function imgHide(imgName) {
    imgName.classList.add('hide')
}

function imgShow(imgName) {
    imgName.classList.remove('hide')
    BASIC_IMG.classList.add('hide')
    moreButton.classList.add('hide')
    moveButton.classList.remove('hide')
}


function imgReset(imgName) {
    imgName.classList.add('hide')
    BASIC_IMG.classList.remove('hide')
    moreButton.classList.remove('hide')
    moveButton.classList.add('hide')
}



var currentButton = null;
var currentImg = null;

//버튼 + 이미지 구현 함수 
var count = 1;
function buttonColor(button, imgName) {

    if (currentButton !== null && currentButton !== button) {
        // 다른 버튼이 눌린 경우 이전 버튼의 색 리셋
        buttonColorReset(currentButton);
        //버튼 명과 같지 않다면 이미지도 리셋 
        imgReset(currentImg)

        //버튼을 누른 수와, 이미지의 갯수를 초기화 해야지 해당 번호에서 초기 화면
        currSlide = 0;
    }

    if (count == 1) { // 버튼을 한번 눌렀을 경우 바뀜 
        buttonColorChange(button)
        imgShow(imgName) //이미지 보이기 
    } else if (count % 2 == 0) { // 한번 더 른 경우 다시 전으로 돌아감 
        buttonColorReset(button)
        imgHide(imgName)
        imgReset(currentImg)
        count = 0;
    }
    currentButton = button;
    currentImg = imgName;
}
// 타입을 눌렀을 경우, 타입에 해당하는 버튼 색 변경과 이미지 변경 
pintButton.addEventListener('click', function () {
    buttonColor(pintButton, pintContainer);
    count++;
});

miniButton.addEventListener('click', function () {
    buttonColor(miniButton, miniContainer);
    count++;
});


smallButton.addEventListener('click', function () {
    buttonColor(smallButton, smallContainer);
    count++;
});

// 3. 이미지 - 슬라이드 구현 

//이전 - 이후 버튼 
const moveButton = document.querySelector('.move-button')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')

// 각 타입별 컨테이너 속 img 들 선택
let pint_items = document.querySelectorAll('.pintImg')
let mini_items = document.querySelectorAll('.miniImg')
let small_items = document.querySelectorAll('.scoopImg')

let pint_items_count = document.querySelectorAll('.pintImg img')
let mini_items_count = document.querySelectorAll('.miniImg img')
let small_items_count = document.querySelectorAll('.scoopImg img')

//최대 슬라이드의 갯수
const maxPintLength = pint_items_count.length;
const maxMiniLength = mini_items_count.length;
const maxSmallLength = small_items_count.length;

//클릭할때 마다 늘어나는 변수 
let currSlide = 0;

//무한 슬라이드를 위해 start, end 사진 복사하기 
const pintStartSlide = pint_items[0];
const miniStartSlide = mini_items[0];
const smallStartSlide = small_items[0];
const pintEndSlide = pint_items[pint_items.length - 1]
const miniEndSlide = pint_items[mini_items.length - 1]
const smallEndSlide = pint_items[small_items.length - 1]

//엘리먼트 생성 
const pintStartElem = document.createElement(pintStartSlide.tagName)
const miniStartElem = document.createElement(miniStartSlide.tagName)
const smallStartElem = document.createElement(smallStartSlide.tagName)

const pintEndElem = document.createElement(pintEndSlide.tagName)
const miniEndElem = document.createElement(miniEndSlide.tagName)
const smallEndElem = document.createElement(smallEndSlide.tagName)

//엘리먼트에 클래스 적용동일하게 하기 
pintStartSlide.classList.forEach((c) => pintStartElem.classList.add(c));
pintStartElem.innerHTML = pintStartSlide.innerHTML;

miniStartSlide.classList.forEach((c) => miniStartElem.classList.add(c));
miniStartElem.innerHTML = miniStartSlide.innerHTML;

smallStartSlide.classList.forEach((c) => smallStartElem.classList.add(c));
smallStartElem.innerHTML = smallStartSlide.innerHTML;

// 각 복제한 엘리먼트를 각 위치에 추가 
pint_items[0].before(pintStartElem);
mini_items[0].before(miniStartElem);
small_items[0].before(smallStartElem);

pint_items[pint_items.length - 1].after(pintEndElem);
mini_items[mini_items.length - 1].after(miniEndElem);
small_items[small_items.length - 1].after(smallEndElem);

// 슬라이드 전체를 선택해서 값을 변경해주기 위해 슬라이드 전체 선택 
pint_items = document.querySelectorAll('.pintImg');
mini_items = document.querySelectorAll('.miniImg');
small_items = document.querySelectorAll('.scoopImg');

const slideWidth = 50;

let offset = slideWidth * currSlide;

pint_items.forEach((i)=>{
    i.setAttribute("style", `left: ${offset * currSlide}px`);
})

// nextMove
function nextMove(iceType,iceMaxLength){

    if(currSlide <= iceMaxLength){
        currSlide++;
        const offset = slideWidth * currSlide;
            iceType.forEach((i)=>{
                i.setAttribute("style", `left: ${-offset}vw`)
            });
        
        
    }else {
        currSlide = 0; 
        let offset = slideWidth * currSlide;
        
        iceType.forEach((i)=>{
            i.setAttribute("style", `transition: ${1}s ease; left: ${-offset}px`);
        });
        currSlide++;
        offset = slideWidth * currSlide;
    }
}

nextBtn.addEventListener("click", () => {
    // 이후 버튼 누를 경우 현재 슬라이드를 변경
    if (currentButton === pintButton) {
        nextMove(pint_items, maxPintLength);
    } else if (currentButton === miniButton) {
        nextMove(mini_items, maxMiniLength);
    } else if (currentButton === smallButton) {
        nextMove(small_items, maxSmallLength);
    }
  });