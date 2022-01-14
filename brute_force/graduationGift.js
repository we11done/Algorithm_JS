// The teacher is going to give graduation gifts to the class students graduating this year.
// The teacher asked the students to choose the product they wanted from the Internet shopping mall
// and submit the price and delivery fee of the product.
// The teacher's budget is limited. Write a program to find out how many students can get gifts on the current budget.
// The teacher has a coupon that he/she can buy at a 50% discount (half price) on one product.
// The shipping costs are not included in the discount.
// Ex) INPUT: budget = 28, product cost , shipping cost = [[6,6],[2,2],[4,3],[4,5],[10,3]]
//     OUTPUT: 4
//     => [2,2] [4,3] [4,5] and 50% discount on [10,3] = [5,3] => 4+7+9+8 = 28

const solution = (budget, giftCost) => {
  giftCost.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
  let max = 0;
  for (let i = 0; i < giftCost.length; i++) {
    let currentWithDiscount = giftCost[i][0] / 2 + giftCost[i][1];
    let leftOver = budget - currentWithDiscount;
    let otherItems = giftCost.filter(ele => ele !== giftCost[i]);
    let itemCount = 1;
    for (let j = 0; j < otherItems.length; j++) {
      let itemCost = otherItems[j][0] + otherItems[j][1];
      if (leftOver < itemCost) break;
      if (leftOver >= itemCost) {
        itemCount++;
        leftOver -= itemCost;
      }
    }
    max = Math.max(max, itemCount);
  }
  return max;
};

console.log(
  solution(28, [
    [6, 6],
    [2, 2],
    [4, 3],
    [4, 5],
    [10, 3],
  ])
);
