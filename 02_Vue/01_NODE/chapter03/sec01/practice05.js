const fs = require('fs').promises;

const runStretching = new Promise((resolve, reject) => {
  resolve('스트레칭 완료');
});
runStretching.then((result) => console.log(result));

const runTreadmill = new Promise((resolve, reject) => {
  resolve('러닝머신 완료');
});
runTreadmill.then((result) => console.log(result));

const runProtein = new Promise((resolve, reject) => {
  resolve('단백질 보충 완료');
});
runProtein.then((result) => console.log(result));

const processFile = async () => {
  console.log('운동 기록 처리 시작');
  await setTimeout(() => {
    runStretching;
  }, 1000);

  await setTimeout(() => {
    runTreadmill;
  }, 500);
  await setTimeout(() => {
    runProtein;
  }, 0);

  await console.log('운동 기록 처리 종료');
};

processFile();
