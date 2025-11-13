import Decimal from 'decimal.js'

var itemData: any[] = []

type BerryData = [name: string, time: number, id: number, seedMix: string[][], mediumYield: number]

const berryInfos: BerryData[] = [
  [
    'Cheri Berry',
    16,
    5149,
    [
      ['Plain Spicy', 'Plain Spicy', 'Plain Spicy'],
      ['Very Spicy', 'Plain Spicy'],
    ],
    4.5,
  ],
  ['Razz Berry', 16, 5164, [['Very Spicy', 'Plain Dry']], 4.5],
  [
    'Bluk Berry',
    16,
    5165,
    [
      ['Plain Sweet', 'Plain Sweet', 'Plain Dry'],
      ['Very Sweet', 'Plain Dry'],
    ],
    4.5,
  ],
  ['Oran Berry', 16, 5155, [['Plain Bitter', 'Plain Sour', 'Plain Dry']], 4.5],
  [
    'Nanab Berry',
    16,
    5166,
    [
      ['Plain Sweet', 'Plain Sweet', 'Plain Bitter'],
      ['Very Sweet', 'Plain Bitter'],
    ],
    4.5,
  ],
  [
    'Pinap Berry',
    16,
    5168,
    [
      ['Plain Spicy', 'Plain Sour', 'Plain Sour'],
      ['Plain Spicy', 'Very Sour'],
    ],
    4.5,
  ],
  ['Persim Berry', 16, 5156, [['Plain Dry', 'Plain Spicy', 'Plain Sweet']], 4.5],
  [
    'Chesto Berry',
    16,
    5150,
    [
      ['Plain Dry', 'Plain Dry', 'Plain Dry'],
      ['Very Dry', 'Plain Dry'],
    ],
    4.5,
  ],
  [
    'Pecha Berry',
    16,
    5151,
    [
      ['Plain Sweet', 'Plain Sweet', 'Plain Sweet'],
      ['Very Sweet', 'Plain Sweet'],
    ],
    4.5,
  ],
  [
    'Rawst Berry',
    16,
    5152,
    [
      ['Plain Bitter', 'Plain Bitter', 'Plain Bitter'],
      ['Very Bitter', 'Plain Bitter'],
    ],
    4.5,
  ],
  [
    'Aspear Berry',
    16,
    5153,
    [
      ['Plain Sour', 'Plain Sour', 'Plain Sour'],
      ['Very Sour', 'Plain Sour'],
    ],
    4.5,
  ],
  ['Magost Berry', 20, 5176, [['Very Sweet', 'Plain Bitter', 'Plain Sweet']], 5.5],
  ['Cornn Berry', 20, 5175, [['Very Dry', 'Plain Sweet', 'Plain Dry']], 5.5],
  ['Leppa Berry', 20, 5154, [['Plain Sweet', 'Very Spicy', 'Plain Bitter']], 6],
  ['Nomel Berry', 20, 5178, [['Very Sour', 'Plain Sour', 'Plain Spicy']], 5.5],
  ['Iapapa Berry', 20, 5163, [['Very Sour', 'Very Sour']], 5.5],
  ['Figy Berry', 20, 5159, [['Very Spicy', 'Very Spicy']], 5.5],
  ['Wiki Berry', 20, 5160, [['Very Dry', 'Very Dry']], 5.5],
  ['Mago Berry', 20, 5161, [['Very Sweet', 'Very Sweet']], 5.5],
  ['Aguav Berry', 20, 5162, [['Very Bitter', 'Very Bitter']], 5.5],
  ['Watmel Berry', 42, 5181, [['Very Sweet', 'Very Sweet', 'Plain Bitter']], 8],
  ['Enigma Berry', 42, 5208, [['Very Spicy', 'Very Spicy', 'Very Dry']], 8],
  ['Belue Berry', 42, 5183, [['Very Sour', 'Plain Spicy', 'Plain Sour']], 8],
  ['Spelon Berry', 42, 5179, [['Very Spicy', 'Very Spicy', 'Plain Dry']], 8],
  ['Durin Berry', 42, 5182, [['Very Bitter', 'Very Bitter', 'Plain Sour']], 8],
  ['Occa Berry', 42, 5184, [['Very Spicy', 'Plain Spicy', 'Very Sweet']], 8],
  ['Shuca Berry', 42, 5191, [['Very Sweet', 'Plain Sweet', 'Very Spicy']], 8],
  ['Coba Berry', 42, 5192, [['Very Bitter', 'Plain Bitter', 'Very Dry']], 8],
  ['Pamtre Berry', 42, 5180, [['Very Dry', 'Very Dry', 'Plain Sweet']], 8],
  ['Yache Berry', 42, 5188, [['Very Sour', 'Plain Sour', 'Very Dry']], 8],
  ['Kasib Berry', 42, 5196, [['Very Sweet', 'Plain Sweet', 'Very Dry']], 8],
  ['Wacan Berry', 42, 5186, [['Very Sweet', 'Plain Sweet', 'Very Sour']], 8],
  ['Tanga Berry', 42, 5194, [['Very Spicy', 'Plain Spicy', 'Very Sour']], 8],
  ['Rowap Berry', 42, 5212, [['Very Sour', 'Very Sour', 'Very Spicy']], 8.5],
  ['Rindo Berry', 42, 5187, [['Very Bitter', 'Plain Bitter', 'Very Spicy']], 8],
  ['Payapa Berry', 42, 5193, [['Very Sour', 'Plain Sour', 'Very Sweet']], 8],
  ['Passho Berry', 42, 5185, [['Very Dry', 'Very Bitter', 'Plain Dry']], 8],
  ['Kebia Berry', 42, 5190, [['Very Dry', 'Plain Dry', 'Very Sour']], 8],
  ['Haban Berry', 42, 5197, [['Very Bitter', 'Plain Bitter', 'Very Sweet']], 8],
  ['Colbur Berry', 42, 5198, [['Very Sour', 'Plain Sour', 'Very Spicy']], 8],
  ['Chople Berry', 42, 5189, [['Very Spicy', 'Plain Spicy', 'Very Bitter']], 8],
  ['Chilan Berry', 42, 5200, [['Very Dry', 'Plain Dry', 'Very Sweet']], 8],
  ['Pomeg Berry', 44, 5169, [['Very Spicy', 'Plain Bitter', 'Plain Spicy']], 8],
  ['Kelpsy Berry', 44, 5170, [['Very Dry', 'Plain Sour', 'Plain Dry']], 8],
  ['Qualot Berry', 44, 5171, [['Plain Spicy', 'Very Sweet', 'Plain Sweet']], 8],
  ['Hondew Berry', 44, 5172, [['Plain Dry', 'Very Bitter', 'Plain Bitter']], 8],
  ['Grepa Berry', 44, 5173, [['Plain Sweet', 'Very Sour', 'Plain Sour']], 8],
  ['Tamato Berry', 44, 5174, [['Very Spicy', 'Plain Dry', 'Plain Spicy']], 8],
  ['Lum Berry', 44, 5157, [['Very Dry', 'Very Spicy', 'Very Sweet']], 8],
  ['Sitrus Berry', 44, 5158, [['Very Sweet', 'Very Bitter', 'Very Sour']], 8],
  ['Custap Berry', 44, 5210, [['Very Sweet', 'Very Sweet', 'Very Dry']], 8],
  ['Jaboca Berry', 44, 5211, [['Very Bitter', 'Very Bitter', 'Very Sour']], 8],
  ['Petaya Berry', 67, 5204, [['Very Spicy', 'Very Bitter', 'Plain Sour']], 11.5],
  ['Liechi Berry', 67, 5201, [['Very Spicy', 'Plain Dry', 'Very Sweet']], 11.5],
  ['Starf Berry', 67, 5207, [['Very Dry', 'Very Sweet', 'Very Bitter']], 12],
  ['Lansat Berry', 67, 5206, [['Very Spicy', 'Very Sweet', 'Very Sour']], 11.5],
  ['Salac Berry', 67, 5203, [['Very Sweet', 'Plain Bitter', 'Very Sour']], 11.5],
  ['Ganlon Berry', 67, 5202, [['Very Dry', 'Plain Sweet', 'Very Bitter']], 11.5],
  ['Apicot Berry', 67, 5205, [['Plain Spicy', 'Very Dry', 'Very Sour']], 11.5],
]
export class Seed {
  name: string
  id: string
  price: Decimal

  constructor(name: string, id: string, price: Decimal) {
    this.name = name
    this.id = id
    this.price = price
  }
}

export class Berry {
  name: string
  custs: number[]
  seedMix: string[][]
  id = 0
  value = Decimal(0)
  time = 0
  totalProfit = new Decimal(0)
  dailyProfit = new Decimal(0)
  averageYield = new Decimal(0)
  quantity = 0

  constructor(name: string, price: number[], seedMix: string[][]) {
    this.name = name
    this.custs = price

    if (seedMix) {
      this.seedMix = seedMix
    } else {
      this.seedMix = []
    }
  }
}

const seeds = [
  new Seed('Plain Spicy', '1030', Decimal(0)),
  new Seed('Plain Dry', '1032', Decimal(0)),
  new Seed('Plain Sweet', '1034', Decimal(0)),
  new Seed('Plain Bitter', '1036', Decimal(0)),
  new Seed('Plain Sour', '1038', Decimal(0)),

  new Seed('Very Spicy', '1031', Decimal(0)),
  new Seed('Very Dry', '1033', Decimal(0)),
  new Seed('Very Sweet', '1035', Decimal(0)),
  new Seed('Very Bitter', '1037', Decimal(0)),
  new Seed('Very Sour', '1039', Decimal(0)),
]

export function calculate(berryName: String, seedsCalc: Seed[], value: Decimal) {
  var berryList = calcCustsSingle(berryName, seedsCalc)
  for (let berry of berryList) {
    priceMix(berry)
  }
  applyInfos(berryList)
  applyValue(berryList, value)
  calcProfit(berryList)
  return berryList
}

function calcCustsSingle(berryName: String, items: Seed[]) {
  var recipeList: Berry[] = []
  var price = 0
  var priceList: number[] = []
  for (let berry of berryInfos) {
    if (berry[0] == berryName) {
      for (let seedmix of berry[3] ?? []) {
        price = 0
        for (let seed of seedmix) {
          for (let item of items) {
            if (item.name == seed) {
              if (item.price == Decimal(0)) {
                item.price = Decimal(999999)
              }
              price += Number(item.price)
            }
          }
        }
        priceList.push(price)
      }
      recipeList.push(new Berry(berry[0], priceList, berry[3]))
    }

    priceList = []
  }

  return recipeList
}

function applyValue(berryList: Berry[], value: Decimal) {
  if (berryList[0]) {
    berryList[0].value = value
  }
}

export async function automaticTable() {
  console.clear()
  var seeds = await getSeedPrices()
  var berryList = calcCusts(seeds)
  for (let berry of berryList) {
    priceMix(berry)
  }
  applyInfos(berryList)
  applyValues(berryList)
  calcProfit(berryList)
  order(berryList)
  return berryList
}
function getSeedPrices() {
  return fetch('https://apis.fiereu.de/pokemmoprices/v1/items')
    .then((response) => {
      if (!response.ok) {
        throw new Error('No response')
      }
      return response.json()
    })
    .then((data) => {
      itemData = data
      for (let info of data) {
        for (let item of seeds) {
          if (info.item_id == item.id) {
            item.price = info.price
          }
        }
      }
      return seeds
    })
}

function calcCusts(items: Seed[]) {
  var recipeList: Berry[] = []
  var price = 0
  var priceList: number[] = []
  for (let berry of berryInfos) {
    for (let seedmix of berry[3] ?? []) {
      price = 0
      for (let seed of seedmix) {
        for (let item of items) {
          if (item.name == seed) {
            price += Number(item.price)
          }
        }
      }
      priceList.push(price)
    }
    recipeList.push(new Berry(berry[0], priceList, berry[3]))
    priceList = []
  }
  return recipeList
}

function priceMix(berryRecipe: Berry) {
  var min: number = Number.MAX_SAFE_INTEGER
  let prices = berryRecipe.custs
  var index = 0
  for (let i = 0; i < prices.length; i++) {
    if (Number(prices[i]) < min) {
      min = Number(prices[i])
      index = i
    }
  }
  berryRecipe.custs = [min]
  berryRecipe.seedMix = berryRecipe.seedMix.slice(index, index + 1)
  return
}

function applyInfos(berryList: Berry[]) {
  for (let berry of berryList) {
    for (let infos of berryInfos) {
      if (infos[0] == berry.name) {
        berry.time = Number(infos[1])
        berry.id = Number(infos[2])
        berry.averageYield = Decimal(infos[4])
      }
    }
  }
}

function applyValues(berryList: Berry[]) {
  for (let info of itemData) {
    for (let berry of berryList) {
      if (info.item_id == berry.id) {
        berry.value = info.price
        berry.quantity = info.quantity
      }
    }
  }
}

function calcProfit(berryList: Berry[]) {
  for (let berry of berryList) {
    const value = new Decimal(berry.value)
    const yieldAmount = new Decimal(berry.averageYield)
    const cost = new Decimal(berry.custs[0] ?? 0)

    const totalProfit = value.mul(yieldAmount).sub(cost).mul(156)
    const dailyProfit = totalProfit.div(berry.time).mul(24)

    berry.totalProfit = totalProfit
    berry.dailyProfit = dailyProfit
  }
}

function order(berryList: Berry[]) {
  berryList.sort((a, b) => b.dailyProfit.comparedTo(a.dailyProfit))
}
