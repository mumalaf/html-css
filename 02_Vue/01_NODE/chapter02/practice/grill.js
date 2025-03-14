let menu = '삼겹살';
const grillMeat = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (menu) resolve(`🔥 ${menu}가 다 구워졌습니다!`);
    else reject('');
  }, 2000);
});

grillMeat
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

module.exports = grillMeat;
module.exports = menu;
