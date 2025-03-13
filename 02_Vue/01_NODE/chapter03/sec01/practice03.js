fs = require('fs');

const data = fs.readFileSync('./logs/members.txt', 'utf8');
if (fs.existsSync('./logs/member.txt')) {
  fs.writeFileSync('./logs/members.txt', '이승기: 체중 68kg, 벤치프레스 80kg', {
    flag: 'a',
  });
  console.log('회원 정보가 성공적으로 추가되었습니다.');
} else {
  console.log('회원 정보 파일이 없습니다.');
}
