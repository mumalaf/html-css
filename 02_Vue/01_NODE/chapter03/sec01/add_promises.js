const fs = require('fs').promises;

const processFile = async () => {
  try {
    // 1. 파일 생성
    await fs.writeFile('./chapter03/sec01/example.txt', 'Hello, Node.js!');
    console.log('파일이 생성되었습니다.');

    // 2. 파일 읽기기
    await fs.readFile('./chapter03/sec01/example.txt', 'utf-8');
    console.log('파일 내용:', data);

    // 3. 파일에 내용 추가
    await fs.appendFile(
      './chapter03/sec01/example.txt',
      '\n추가된 내용입니다.'
    );
    console.log('파일에 내용이 추가되었습니다.');

    // 4. 파일 삭제
    await fs.unlink('./chapter03/sec01/example.txt');
    console.log('파일이 삭제되었습니다.');
  } catch (error) {
    console.error('오류 발생', error);
  }
};

processFile();
