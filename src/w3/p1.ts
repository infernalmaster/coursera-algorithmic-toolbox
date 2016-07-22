const COINS = [10, 5, 1]

// export default function moneyChange(money: number, coins: number = 0): number {
//   if (money === 0) {
//     return coins;
//   }

//   for (let i = 0; i < COINS.length; i++) {
//     if (money >= COINS[i]) {
//       return moneyChange(money - COINS[i], coins + 1)
//     }
//   }

//   throw new Error('need smaller coins');
// }


export default function moneyChange(money: number): number {
  let coins = 0;
  let moneyReminder = money;

  for (let i = 0; i < COINS.length; i++) {
    let curretnCointNominal = COINS[i]

    if (moneyReminder < curretnCointNominal) {
      continue
    }

    let coinsOfCurrentNominal = Math.floor(moneyReminder / curretnCointNominal)
    moneyReminder -= curretnCointNominal * coinsOfCurrentNominal
    coins += coinsOfCurrentNominal

    if (moneyReminder === 0) {
      return coins
    }
  }

  throw new Error('need smaller coins');
}



// export default function moneyChange(money: number): number {
//   return COINS.reduce((coins, currentCoin) => {
//     if (money < currentCoin) {
//       return coins
//     }

//     let coinsOfThisNominal = Math.floor(money / currentCoin)
//     money -= currentCoin * coinsOfThisNominal

//     return coins + coinsOfThisNominal
//   }, 0)
// }
