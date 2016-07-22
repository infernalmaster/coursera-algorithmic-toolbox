
interface Item {
  value: number
  weight: number
  valuePerWeight?: number
}

export default function knapsack(capasity: number, items: Array<Item>) {
  const sortedItemsWithPerWeight = items.map((item) => {
    return Object.assign({}, item, {valuePerWeight: item.value / item.weight})
  }).sort((a, b) => b.valuePerWeight - a.valuePerWeight)

  let maxValue = 0
  let unusedCapacity = capasity

  for (let i = 0; i < sortedItemsWithPerWeight.length && unusedCapacity > 0; i++) {
    let item = sortedItemsWithPerWeight[i]

    if (unusedCapacity > item.weight) {
      maxValue += item.value
      unusedCapacity -= item.weight
    } else {
      maxValue += unusedCapacity * item.valuePerWeight
      unusedCapacity = 0
    }
  }

  return Math.round(maxValue * 10000) / 10000
}