const gridContainer = document.getElementById('grid-container');
const priceTag = document.getElementById('price-tag');
const soldCountTag = document.getElementById('sold-count');
const nextPriceInfo = document.getElementById('next-price-info');

let soldCount = 8; // 가짜로 8명이 이미 샀다고 설정 (바이럴)
const eventCells = [15, 42, 88, 120]; // 이벤트가 숨겨진 칸 번호

function updateDisplay() {
    // 가격 로직: 10명까지 1000원, 이후 2000원, 30명 이후 5000원...
    let currentPrice = "1,000";
    let nextStep = 10 - soldCount;

    if (soldCount >= 10) {
        currentPrice = "2,000";
        nextStep = 30 - soldCount;
    }
    if (soldCount >= 30) {
        currentPrice = "5,000";
        nextStep = 100 - soldCount;
    }

    priceTag.innerText = `현재 시세: ${currentPrice}원`;
    soldCountTag.innerText = `분양 완료: ${soldCount} / 10,000`;
    nextPriceInfo.innerText = `다음 가격 인상까지 ${nextStep}칸 남았습니다!`;
}

// 1,000칸 생성
for (let i = 1; i <= 1000; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    
    // 이미 팔린 칸 표시
    if (i <= soldCount) cell.classList.add('sold');
    
    // 이벤트 칸 설정
    if (eventCells.includes(i)) cell.classList.add('event');

    cell.addEventListener('click', () => {
        if (eventCells.includes(i)) {
            alert("🎊 보물 칸 발견! 사전 예약 시 1칸 무료 증정!");
        } else {
            document.getElementById('selected-info').innerText = `${i}번 칸 선택됨`;
        }
    });

    gridContainer.appendChild(cell);
}

function openEnroll() {
    const email = prompt("이 가격은 곧 마감됩니다! 알림을 받으실 이메일을 남겨주세요.");
    if(email) alert("등록 완료! 정식 오픈 시 가장 먼저 연락드립니다.");
}

updateDisplay();
