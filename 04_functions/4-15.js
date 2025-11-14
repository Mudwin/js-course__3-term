// 4.15 Тренажёр «Задача 5»

function totalSum(priceItem, amountItem, discountItem) {
  let amountCost = amountItem * priceItem;

  return amountCost - amountCost * (discountItem / 100);
}
