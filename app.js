const cashOwed = parseInt(prompt("Make Cash in Cents: "));
function changeOwed(cash) {
  while (isNaN(cash) || cash < 1 || cash > 100) {
    cash = parseInt(prompt("Make Cash in Cents: "));
  }
  const change = 100 - cash;
  return change;
}
// console.log(` The smallest amount of coins I can return is: ${minCoins()}`)
