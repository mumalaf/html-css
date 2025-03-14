// const dayeon = {
//   firstName: 'dayeon',
//   lastName: 'jung',
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// // 일반 함수에서 this는 호출한 객체
// console.log(dayeon.getFullName());

// 생성자 함수
function user(first, last) {
  this.firstName = first;
  this.lastName = last;
}
// 프로토타입에 추가된 함수는 객체 전체가 공유한다
user.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

const dayeon = new user('dayeon', 'jung');
const yura = new user('yura', 'choi');

console.log(dayeon.getFullName());
console.log(yura.getFullName());
