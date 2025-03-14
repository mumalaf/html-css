const orders = [];

function addOrder({ menu: menu, quantity: quantity }) {
  orders.push(`${menu} : ${quantity}`);
  if (menu != '' && quantity != '') {
    for (let i = 1; i < orders.length; i++) {
      console.log(orders[0]);
      console.log(orders[1]);
    }
  } else {
    console.log('❌ 주문 내역이 없습니다.');
  }
}

module.exports = { orders: [] };
module.exports = addOrder;
