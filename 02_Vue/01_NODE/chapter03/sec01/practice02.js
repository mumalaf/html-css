fs = require('fs');
fs.readFile('./logs/workout_log.txt', 'utf-8', (err, data) => {
  if (err) {
    console.log('운동 기록 파일이 없습니다.');
    return;
  }
  console.log('운동 기록 출력 완료!');
  console.log(data);
});
