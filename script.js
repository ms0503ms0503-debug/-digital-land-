// HTML에서 grid-container라는 ID를 가진 박스를 가져옵니다.
const gridContainer = document.getElementById('grid-container');

// 가짜 데이터 설정 (바이럴용)
let soldCount = 8; 
const eventCells = [15, 42, 88, 120]; // 보물이 숨겨진 칸 번호

// 1,000칸의 격자를 생성하는 함수
for (let i = 1; i <= 1000; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    
    // 이미 팔린 칸 표시
    if (i <= soldCount) {
        cell.classList.add('sold');
    }
    
    // 보물 칸 표시
    if (eventCells.includes(i)) {
        cell.classList.add('event');
    }

    // 칸을 클릭했을 때의 동작
    cell.addEventListener('click', () => {
        if (eventCells.includes(i)) {
            alert("🎊 보물 칸 발견! 사전 예약 시 1칸 무료 증정!");
        } else {
            document.getElementById('selected-info').innerText = `${i}번 칸이 선택되었습니다.`;
        }
    });

    gridContainer.appendChild(cell);
}

// 구매 버튼 클릭 시 동작
function openEnroll() {
    const email = prompt("이 가격은 곧 마감됩니다! 알림을 받으실 이메일을 남겨주세요.");
    if(email) {
        alert("감사합니다! 정식 오픈 시 연락드리겠습니다.");
    }
}
