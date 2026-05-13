</* 기존 내용에 추가하거나 덮어쓰세요 */
.status-bar {
    background: #333;
    color: #fff;
    padding: 10px;
    border-radius: 5px;
    display: inline-block;
    margin-bottom: 10px;
    font-weight: bold;
}

#next-price-info {
    color: #ff4757;
    font-weight: bold;
    font-size: 0.9rem;
    animation: blink 1s infinite;
}

@keyframes blink {
    50% { opacity: 0.5; }
}

.cell.event {
    background-color: #70a1ff !important; /* 이벤트 칸은 파란색 */
}

.buy-btn {
    background: linear-gradient(45deg, #ff4757, #ff6b81);
    box-shadow: 0 5px 15px rgba(255, 71, 87, 0.4);
    transition: transform 0.2s;
}

.buy-btn:hover {
    transform: scale(1.05);
}
