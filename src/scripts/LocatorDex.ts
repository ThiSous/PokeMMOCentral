export class Route {
  id: number = -1
  name: string = 'rascunho'
  region: string = 'kanto'
  isCave: boolean = true

  cavePokes:EncounterHorde[]=[]
  surfPokes: EncounterHorde[] = []
  tallGrassPokes: EncounterHorde[] = []
  grassPokes: EncounterHorde[] = []
  darkGrassPokes: EncounterHorde[] = []
  rockSmashPokes: EncounterBasic[] = []

  oldRod: EncounterBasic[] = []
  goodRod: EncounterBasic[] = []
  superRod: EncounterBasic[] = []
  headButtPokes: EncounterBasic[] = []

  specialPokes: SpecialEncounter[] = []
}

export class EncounterBasic {
  dexNumber: number = 1
  name: string = 'bulbassauro'
  rarity: rarity = rarity['very common']
  time: time = time.all
}

export class EncounterHorde {
  dexNumber: number = 1
  name: string = 'Bulbassauro'
  rarity: rarity = rarity['very common']
  time: time = time.all
  horde: boolean = false
  quantity: number = 1
}
export class SpecialEncounter{
    dexNumber:number = 1 
    name:string = 'bulbassauro'
    type:type = type.dust
    
}

export enum type{
    'dust',
    'water',
    'grass',
    'shadow'
}

export enum rarity {
  'very common',
  'common',
  'uncommon',
  'rare',
  'very rare',
  'lure',
}

export enum time {
  'all',
  'morning',
  'day',
  'night',
  'morning/day',
  'night/morning',
  'day/night',
}
