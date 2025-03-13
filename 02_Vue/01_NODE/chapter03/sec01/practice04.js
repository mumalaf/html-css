fs = require('fs');

if (fs.existsSync('./logs/workout_log.txt')) {
  // 디렉터리가있다면
  const rs = fs.createReadStream('./logs/workout_log.txt', 'utf8');
  const ws = fs.createWriteStream('./logs/backup_log.txt');
  rs.pipe(ws);
  console.log('백업이 완료되었습니다.');
} else {
  console.log(
    "백업 중 오류가 발생했습니다. Error: ENOENT: no such file or directory, open 'logs/workout_log.txt'"
  );
}
