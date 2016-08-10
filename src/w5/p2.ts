// Knapsack without repetitions
export function maxGold(bagWeight: number, goldBars: number[]): number {
  let matrixOfMaxValues = getArrayOfZeros(bagWeight + 1, goldBars.length + 1);

  for (let i = 1; i <= goldBars.length; i++) {
    const goldBar = goldBars[i - 1];
    for (let weight = 1; weight <= bagWeight; weight++) {

      // lets asume that optimal is without this goldBar
      matrixOfMaxValues[i][weight] = matrixOfMaxValues[i - 1][weight];

      // try to remove this goldBar and find Max value without it + valueOfGoldBar
      if (goldBar <= weight) {
        let newMax = matrixOfMaxValues[i - 1][weight - goldBar] + goldBar;
        if (matrixOfMaxValues[i][weight] < newMax) {
          matrixOfMaxValues[i][weight] = newMax;
        }
      }
    }
  }

  return matrixOfMaxValues[goldBars.length][bagWeight];
}

function getArrayOfZeros(height: number, width: number) {
  let arr = [];
  for (let i = 0; i < width; i++) {
    arr[i] = new Array(height).fill(0);
  }
  return arr;
}