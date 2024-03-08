const cashOwed = parseInt(prompt("Make Cash in Cents: "));
function changeOwed(cash) {
  while (isNaN(cash) || cash < 1 || cash > 100) {
    cash = parseInt(prompt("Make Cash in Cents: "));
  }
  const change = 100 - cash;
  return change;
}
function minCoins() {
  const penny = 1;
  const nickel = 5;
  const dime = 10;
  const quarter = 25;
  let change = changeOwed(cashOwed);
  let minCoins = 0;
}
// console.log(` The smallest amount of coins I can return is: ${minCoins()}`)
