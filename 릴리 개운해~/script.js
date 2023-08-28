// 변수 정의
const image5Styles = {
    position: 'absolute',
    top: '50px',
    left: '750px',
  };
  
  const aButtonStyles = {
    border: 'none',
    background: 'none',
    padding: '0',
    cursor: 'pointer',
    position: 'absolute',
    top: '285px',
    left: '1000px',
  };
  
  // 이미지와 버튼 요소 가져오기
  const imageElement5 = document.getElementById('MF.png');
  const aButton = document.getElementById('별-removebg-preview');
  
  // 이미지 초기화
  let currentImage5 = 1;
  
  // 버튼 클릭 이벤트 리스너 추가
  aButton.addEventListener('click', () => {
    if (currentImage5 === 1) {
      imageElement5.src = 'MF(1).png';
      imageElement5.alt = 'Image 6';
      currentImage5 = 2;
    } else {
      imageElement5.src = 'MF.png';
      imageElement5.alt = 'Image 5';
      currentImage5 = 1;
    }
  });