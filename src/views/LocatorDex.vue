<script setup lang="ts">
import {
  kantoSpots,
  Hotspot,
  johtoSpots,
  unovaSpots,
  sinnohSpots,
  hoennSpots,
} from '@/datasets/Spots'

import {
  EncounterBasic,
  EncounterHorde,
  Route,
  SpecialEncounter,
  rarity,
  time,
  type,
} from '@/scripts/LocatorDex'
import Encounters from '@/datasets/PokeRoutes.json'

function toEnum<E>(enumObj: E, value: string): E[keyof E] {
  return enumObj[value as keyof E]
}

function parseHorde(data: any): EncounterHorde {
  return {
    dexNumber: data.dexNumber,
    name: data.name,
    rarity: toEnum(rarity, data.rarity.toLowerCase()),
    time: toEnum(time, data.time),
    horde: data.horde,
    quantity: data.quantity,
  }
}

function parseBasic(data: any): EncounterBasic {
  return {
    dexNumber: data.dexNumber,
    name: data.name,
    rarity: toEnum(rarity, data.rarity.toLowerCase()),
    time: toEnum(time, data.time),
  }
}

function parseSpecial(data: any): SpecialEncounter {
  return {
    ...data,
    type: toEnum(type, data.type),
  }
}

function parseRoute(data: any): Route {
  return {
    id: data.id,
    name: data.name,
    region: data.region,
    isCave: data.isCave,

    cavePokes: data.cavePokes?.map(parseHorde) ?? [],
    surfPokes: data.surfPokes?.map(parseHorde) ?? [],
    tallGrassPokes: data.tallGrassPokes?.map(parseHorde) ?? [],
    grassPokes: data.grassPokes?.map(parseHorde) ?? [],
    darkGrassPokes: data.darkGrassPokes?.map(parseHorde) ?? [],
    rockSmashPokes: data.rockSmashPokes?.map(parseBasic) ?? [],

    oldRod: data.oldRod?.map(parseBasic) ?? [],
    goodRod: data.goodRod?.map(parseBasic) ?? [],
    superRod: data.superRod?.map(parseBasic) ?? [],
    headButtPokes: data.headButtPokes?.map(parseBasic) ?? [],

    specialPokes: data.specialPokes?.map(parseSpecial) ?? [],
  }
}

const routes: Route[] = Encounters.map(parseRoute)

function click(teste: Hotspot, region: string) {
  for (let route of routes) {
    for (let testeName of teste.name) {
      if (route.name == testeName) {
        console.log(route)
        break
      }
    }
  }
}
</script>

<template>
  <div class="background">
    <section class="locator-maps">
      <h1>Escolha a rota pelo mapa:</h1>
      <br />
      <h2 class="city-title kanto">Kanto:</h2>
      <div class="map-box">
        <img class="map" src="/src/assets/images/Kanto.png" />
        <div
          v-for="spot in kantoSpots"
          :key="spot.id"
          class="click-box"
          :style="{
            left: spot.x + '%',
            top: spot.y + '%',
            width: spot.w + '%',
            height: spot.h + '%',
          }"
          @click="click(spot, 'kanto')"
        ></div>
      </div>
      <h2 class="city-title johto">Johto:</h2>
      <div class="map-box">
        <img class="map" src="/src/assets/images/Johto.png" />
        <div
          v-for="spot in johtoSpots"
          :key="spot.id"
          class="click-box"
          :style="{
            left: spot.x + '%',
            top: spot.y + '%',
            width: spot.w + '%',
            height: spot.h + '%',
          }"
          @click="click(spot, 'johto')"
        ></div>
      </div>
      <h2 class="city-title hoenn">Hoenn:</h2>
      <div class="map-box">
        <img class="map" src="/src/assets/images/Hoenn.png" />
        <div
          v-for="spot in hoennSpots"
          :key="spot.id"
          class="click-box"
          :style="{
            left: spot.x + '%',
            top: spot.y + '%',
            width: spot.w + '%',
            height: spot.h + '%',
          }"
          @click="click(spot, 'hoenn')"
        ></div>
      </div>
      <h2 class="city-title sinnog">Sinnoh:</h2>
      <div class="map-box">
        <img class="map" src="/src/assets/images/Sinnoh.png" />
        <div
          v-for="spot in sinnohSpots"
          :key="spot.id"
          class="click-box"
          :style="{
            left: spot.x + '%',
            top: spot.y + '%',
            width: spot.w + '%',
            height: spot.h + '%',
          }"
          @click="click(spot, 'sinnoh')"
        ></div>
      </div>
      <h2 class="city-title unova">Unova:</h2>
      <div class="map-box">
        <img class="map" src="/src/assets/images/Unova.png" />
        <div
          v-for="spot in unovaSpots"
          :key="spot.id"
          class="click-box"
          :style="{
            left: spot.x + '%',
            top: spot.y + '%',
            width: spot.w + '%',
            height: spot.h + '%',
          }"
          @click="click(spot, 'unova')"
        ></div>
      </div>
    </section>
  </div>
</template>

<style scoped>
@import '@/assets/styles/views/locatorDex.css';
</style>
