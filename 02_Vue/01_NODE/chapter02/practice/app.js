// const orderlist = require('./order');
const addOrder = require('./orderManager');
const orders = require('./orderManager');

// for (let i = 0; i < orderlist.length; i++) {
//   if (orderlist[i].menu == '삼겹살') {
//     console.log(`✅ ${orderlist[i].menu} 주문 수량: ${orderlist[i].sum}`);
//     break;
//   } else {
//     console.log(`❌ 삼겹살 주문 내역이 없습니다.`);
//     break;
//   }
// }

console.log(`✅ 현재 주문 내역:`);
// addOrder({ menu: '삼겹살', quantity: '3인분' });
// addOrder({ menu: '목살', quantity: '2인분' });
addOrder({ menu: '', quantity: '' });
