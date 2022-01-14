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
  let maxQuantity = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < giftCost.length; i++) {
    let discountedItemCost = giftCost[i][0] / 2 + giftCost[i][1];
    let itemCount = 5;
    let otherItems = giftCost.filter(ele => ele !== giftCost[i]);
    for (let j = 0; j < giftCost.length - 1; j++) {
      let otherCost = otherItems.reduce(
        (acc, current) => (acc += current[0] + current[1]),
        0
      );
      if (
        discountedItemCost + otherCost === budget &&
        maxQuantity < itemCount
      ) {
        maxQuantity = itemCount;
      } else {
        otherItems = otherItems.filter((ele, index) => index !== 0);
        itemCount--;
      }
    }
  }
  return maxQuantity;
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
