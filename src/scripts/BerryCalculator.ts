import Decimal from 'decimal.js'
import rawBerriesData from "@/datasets/BerryData.json"
var itemData: any[] = []

type BerryData = {
  name: string,
  time: number,
  id: number,
  seedMix: string[][],
  mediumYield: number,
  npcValue: Decimal,
}

const berryInfos: BerryData[] = rawBerriesData.map(item => ({
  ...item,
  npcValue: new Decimal(item.npcValue)
}));

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
  npcValue = new Decimal(0)
  npcTotalProfit = new Decimal(0)
  npcDailyProfit = new Decimal(0)

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

export function reCalc(berryList: Berry[]) {
  calcProfit(berryList)
  order(berryList)
  return berryList
}

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
    if (berry.name == berryName) {
      for (let seedmix of berry.seedMix ?? []) {
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
      recipeList.push(new Berry(berry.name, priceList, berry.seedMix))
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
    for (let seedmix of berry.seedMix ?? []) {
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
    recipeList.push(new Berry(berry.name, priceList, berry.seedMix))
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
  console.log(berryInfos)
  for (let berry of berryList) {
    for (let infos of berryInfos) {
      if (infos.name == berry.name) {
        berry.time = Number(infos.time)
        berry.id = Number(infos.id)
        berry.averageYield = Decimal(infos.mediumYield)
        berry.npcValue = infos.npcValue
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
    const npcValue = berry.npcValue
    const yieldAmount = new Decimal(berry.averageYield)
    const cost = new Decimal(berry.custs[0] ?? 0)

    const totalProfit = value.mul(yieldAmount).sub(cost).mul(156).mul(0.95)
    const dailyProfit = totalProfit.div(berry.time).mul(24)

    const npcTotalProfit = npcValue.mul(yieldAmount).sub(cost).mul(156)
    const npcDailyProfit = npcTotalProfit.div(berry.time).mul(24)

    
    
    berry.totalProfit = totalProfit
    berry.dailyProfit = dailyProfit

    berry.npcTotalProfit = npcTotalProfit
    berry.npcDailyProfit = npcDailyProfit
  }
}

function order(berryList: Berry[]) {
  berryList.sort((a, b) => b.dailyProfit.comparedTo(a.dailyProfit))
}
