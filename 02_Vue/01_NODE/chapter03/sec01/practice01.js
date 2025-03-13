fs = require('fs');
const path = require('path');
const fullPath = path.join('members', 'kim_jong_kook.txt');

let data = '김종국, 나이: 45, 체중: 80kg, 운동: 벤치프레스 100kg';

fs.mkdir('./members', (err) => {
  if (err) {
    return console.error(err);
  }
});
fs.writeFileSync('./members/kim_jong_kook.txt', data, { flag: 'a' });
console.log('파일 생성 완료!');

const dir = path.dirname(fullPath);
console.log(`디렉터리 경로: : ${dir}`);

const fn = path.basename(fullPath);
console.log(`파일 이름 : ${fn}`);

const ext = path.extname(fullPath);
console.log(`파일 확장자: ${ext}`);

const fn2 = path.basename(fullPath, '.txt');
console.log(`파일 이름(확장자 제외): ${fn2}`);
