const fs = require('fs').promises;
let name;

const now = `${new Date().getFullYear()}-${
  new Date().getMonth() + 1
}-${new Date().getDate()} ${new Date().getHours()}:${new Date().getMinutes()}`;

const readline = require('readline');

//입출력을 위한 인터페이스 객체 생성
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const processFile = async () => {
  await rl.question('이름을 입력하세요: ', (name) => {
    rl.close();
    fs.appendFile(
      '/kb_fullstack/02_Vue/01_NODE/logs/checkin.txt',
      `\n${name}: 출석 완료 (${now})`
    );
    console.log('출석 중...');

    setTimeout(() => {
      console.log(`\n${name}: 출석 완료 (${now})`);
      console.log('출석 기록이 파일에 저장되었습니다!');
    }, 1000);
  });
};

processFile();
