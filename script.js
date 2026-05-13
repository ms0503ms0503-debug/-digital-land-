const gridContainer = document.getElementById('grid-container');
const totalCells = 1000; // 1,000개 샘플 생성

for (let i = 0; i < totalCells; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    
    // 약 5%의 확률로 이미 팔린 땅처럼 보이게 설정 (바이럴 효과)
    if (Math.random() > 0.95) {
        cell.classList.add('sold');
    }

    // 클릭했을 때 반응
    cell.addEventListener('click', () => {
        alert(`${i + 1}번째 위치를 선택하셨습니다. 곧 분양이 시작됩니다!`);
    });

    gridContainer.appendChild(cell);
}
