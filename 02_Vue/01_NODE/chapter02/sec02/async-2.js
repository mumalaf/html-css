// 동기 방식, 순차적으로 처리
function displayA() {
  console.log('A');
}

function displayB(callback) {
  // 2초 후에 B를 출력하라 -> 콜백 함수, 비동기
  setTimeout(() => {
    console.log('B');
    // 받아온 콜백함수를 언제 실행해줄지 결정, 비동기
    callback();
  }, 2000);
}

function displayC() {
  console.log('C');
}

displayA();
//2초 후에 B랑 C가 같이 나옴
displayB(displayC);
