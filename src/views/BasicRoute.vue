<script setup lang="ts">
import HealAdvisor from '@/components/HealAdvisor.vue'
import ExpandableSection from '../components/ExpandableSection.vue'
import PokemonCard from '@/components/PokemonCard.vue'
</script>

<template>
  <div class="background">
    <h1 class="title electric">Ainda está inacabado!!</h1>
    <h1 class="title">Six Pillars, Rota Básica:</h1>
    <a
      target="_blank"
      href="https://docs.google.com/document/d/1XnFfsSVh1x5sEBLzvkletNfBuKY5ymSL_UHKNjoDaeE/"
      >Documentação Original</a
    >
    <h1 class="title">Time necessário</h1>
    <div class="team">
      <!--Typhlosion Check-->
      <PokemonCard
        itemName="Choice Specs"
        itemImg="https://raw.githubusercontent.com/msikma/pokesprite/master/items/hold-item/choice-specs.png"
        nature="Modest"
        hability="Blaze"
        evs="EVS: SPA 252 | SPD 6 | SPE 252"
        ivs="IVS: HP 10-31 | DEF 10-31 | SPA 31 | SPE 31"
        type="fire"
        src="https://img.pokemondb.net/sprites/black-white/anim/normal/typhlosion.gif"
        :moves="['Eruption', 'Swift', 'Incinare', 'Cut']"
        pokeName="Typhlosion"
      />

      <!--Blastoise Check-->
      <PokemonCard
        itemName="Choice Scarf"
        itemImg="https://raw.githubusercontent.com/msikma/pokesprite/master/items/hold-item/choice-scarf.png"
        nature="Mild"
        hability="Torrent"
        evs="EVS: SPA 252 | SPD 6 | SPE 252 |"
        ivs="IVS: HP 0-25 | DEF 0-25 | SPA 31 | SPE 31"
        type="water"
        src="https://img.pokemondb.net/sprites/black-white/anim/normal/blastoise.gif"
        :moves="['Water Spout (EGG MOVE!)', 'Blizzard', 'Helping Hand', 'Fake Out']"
        pokeName="Blastoise"
      />

      <!--Togekiss Check-->
      <PokemonCard
        itemName="Choice Specs"
        itemImg="https://raw.githubusercontent.com/msikma/pokesprite/master/items/hold-item/choice-specs.png"
        nature="Modest"
        hability="Hustle"
        evs="SPA 252 | SPD 6 | SPE 252"
        ivs="SPA 31 | SPE 31"
        type="fly"
        src="https://img.pokemondb.net/sprites/black-white/anim/normal/togekiss.gif"
        :moves="['Hyper Voice', 'Helping Hand', 'Shock Wave', 'Fly']"
        pokeName="Togekiss"
      />

      <!--Garchomp Check-->
      <PokemonCard
        itemName="Choice Band"
        itemImg="https://raw.githubusercontent.com/msikma/pokesprite/master/items/hold-item/choice-band.png"
        nature="Lonely"
        hability="Sand Veil"
        evs="EVS: ATK 252 | SPD 26 | SPE 232"
        ivs="IVS: ATK 31 | SPD 19+ | SPE 31"
        type="dragon"
        src="https://img.pokemondb.net/sprites/black-white/anim/normal/garchomp-f.gif"
        :moves="['Earthquake', 'Dragon Claw', 'Helping Hand', 'Sunny Day']"
        pokeName="Garchomp"
      />

      <!--Weezing Check-->
      <PokemonCard
        itemName="Choice Band"
        itemImg="https://raw.githubusercontent.com/msikma/pokesprite/master/items/hold-item/choice-band.png"
        nature="Adamant"
        hability="Neutralizing gas (Reactive gas)"
        evs="EVS: ATK 252 | SPD 6 | SPE 252"
        ivs="IVS: ATK 31 | SPE 31"
        type="poison"
        src="https://img.pokemondb.net/sprites/black-white/anim/normal/weezing.gif"
        :moves="['Assurance', 'Explosion', 'Incinerate', 'Rain Dance']"
        pokeName="Weezing"
      />

      <!--Vanilluxe Check-->
      <PokemonCard
        itemName="Choice Scarf"
        itemImg="https://raw.githubusercontent.com/msikma/pokesprite/master/items/hold-item/choice-scarf.png"
        nature="Modest"
        hability="Snow Warning"
        evs="EVS: DEF 6 | SPA 252 | SPE 252"
        ivs="IVS: SPA 31 | SPE 31"
        type="ice"
        src="https://img.pokemondb.net/sprites/black-white/anim/normal/vanilluxe.gif"
        :moves="['Blizzard', 'Ice Beam', 'Hyper Voice', 'Qualquer Move']"
        pokeName="Vanilluxe"
      />
    </div>
    <br />
    <p>
      Nota:
      <img
        src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/medicine/pp-max.png"
        alt="PP MAX"
      />PP MAX em Eruption, Water Spout, Hyper Voice, Blizzard (vanilluxe) e Earthquake.
    </p>
    <br />
    <ExpandableSection openLabel="▼ Informação adicional" closeLabel="▲ Informação adicional">
      <p>Créditos:</p>
      <p>
        Esse guia utiliza de ideias do guia do
        <a target="_blank" href="https://crescentschaos.github.io/pokemmo-resources/"
          >Crescents Chaos</a
        >
        e da
        <a
          target="_blank"
          href="https://docs.google.com/document/d/1XnFfsSVh1x5sEBLzvkletNfBuKY5ymSL_UHKNjoDaeE/"
          >documentação do Six Pillars</a
        >, meu trabalho é colocar modificações que acho interessantes e traduzir esse material.
      </p>
      <br />
      <p>Infos:</p>
      <p>
        O tutorial utiliza de código de cores e sprites para uma rápida visualização do que deve ser
        feito.
      </p>
      <p>
        Outros guias podem ser confusos por exibirem muita Informação de uma vez, a ideia desse guia
        é visualizar qual variação está presente e então abrir a resolução especifica.
      </p>
      <p>
        Inconsistências podem acontecer, não se desespere e tente encontrar a saída mais rápida para
        esses problemas, para esses casos, apenas posso desejar boa sorte.
      </p>
      <p>
        Caso esteja no computador clicar CTRL+(O botão do seu A) fará com que o jogo fique spammando
        o último move utilizado, ou o primeiro move caso ainda seja o turno 1, use disso para
        repetir rapidamente os moves.
      </p>
      <br />
      <p class="dragon">Garchomp:</p>
      <p>
        Para algumas resoluções é importante que ele morra para
        <span class="poison">Explosion</span>, recomendo verificar se ele toma hitkill na
        <a target="_blank" href="https://c4vv.github.io/pokemmo-damage-calc/"
          >calculadora de dano</a
        >
        — Lembre de marcar batalha em dupla, pois o dano é diferente —.
      </p>
      <br />
      <p class="ice">Vanilluxe:</p>
      <p>
        A documentação não coloca um último move nele, mas acredito que colocar um move qualquer não
        atrapalhe, particularmente coloquei Icy Wind e nunca tive problemas aparentes.
      </p>
      <br />
      <p class="fly">Togekiss:</p>
      <p>Shock wave, apesar de não ser utilizado está presente para controle de RNG.</p>
      <br />
      <p>Melhor retorno de dinheiro:</p>
      <p>
        Geralmente um <img src="https://pokemmohub.com/item/204.png" alt="75% riches charm" />Riches
        charm (+75%) é a melhor opção, mas pode ser bom verificar na
        <a
          target="_blank"
          href="https://c4vv.github.io/CharmCalc/?vals=gk1,gk3,gk4,gk6,gk7,gh1,gh2,gh3,gh4,gh6,gs1,gs2,gs4,gs5,gu1f,gu1g,gu1w,gu2,gu3,gu4,gu5,gu6,gu8,gj1,gj3,gj5,gj6,gj7,gj8"
        >
          calculadora de Amulet</a
        >. É prundente, no mínimo, iniciar a run com um
        <img
          src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/hold-item/amulet-coin.png"
        />Amulet Coin ativo.
      </p>
      <br />
    </ExpandableSection>
  </div>
  <div class="background">
    <section class="route">
      <section class="route" id="hoenn">
        <h1 class="title">Inicio da Rota:</h1>
        <br />
        <h1 class="title">Hoenn:</h1>

        <!--Lavaridge Check-->
        <h2 class="city-title">1- Lavaridge</h2>
        <img
          class="map"
          alt="Mapa marcando lavaridge"
          src="https://archives.bulbagarden.net/media/upload/9/93/Hoenn_Lavaridge_Town_Map.png"
        />
        <p>Puzzle:</p>
        <img class="puzzle" alt="puzzle de lavaridge" src="@/assets/images/lavaridge.png" />
        <h2>
          Entre com<br />
          <img
            alt="Blastoise"
            src="https://img.pokemondb.net/sprites/black-white/anim/normal/blastoise.gif"
          /><span class="water">Blastoise</span> e
          <img
            alt="Togekiss"
            src="https://img.pokemondb.net/sprites/black-white/anim/normal/togekiss.gif"
          /><span class="fly">Togekiss</span>
        </h2>
        <br />
        <ExpandableSection>
          <template #header>
            <h2>
              • Vs
              <img
                src="https://img.pokemondb.net/sprites/black-white/anim/normal/houndoom-f.gif"
                alt="Houndoom"
              />
              <span class="dark">Houndoom</span> OU Lvl.85
              <img
                src="https://img.pokemondb.net/sprites/black-white/anim/normal/arcanine.gif"
                alt="Arcanine"
              /><span class="fire">Arcanine</span>
            </h2>
          </template>
          <h2 class="moves">
            T1+: <span class="water">Water Spout</span> + <span class="fly">Hyper Voice</span>
          </h2>
          <h2 class="moves">
            Chance baixa de 4 turnos, <span class="heal">cure</span> caso leve dano
          </h2> </ExpandableSection
        ><br />
        <ExpandableSection>
          <template #header>
            <h2>• Vs Outros</h2>
          </template>
          <h2 class="moves">
            T1+: <span class="water">Water Spout</span> + <span class="fly">Helping Hand</span>
          </h2> </ExpandableSection
        ><br />

        <!--Dewford Check-->
        <h2 class="city-title">2- Dewford</h2>
        <img
          class="map"
          alt="Mapa marcando cidade de Dewford"
          src="https://archives.bulbagarden.net/media/upload/d/d3/Hoenn_Dewford_Town_Map.png"
        />

        <h2>
          Entre com<br />
          <img
            alt="Blastoise"
            src="https://img.pokemondb.net/sprites/black-white/anim/normal/blastoise.gif"
          /><span class="water">Blastoise</span> e
          <img
            alt="Vanilluxe"
            src="https://img.pokemondb.net/sprites/black-white/anim/normal/vanilluxe.gif"
          /><span class="ice">Vanilluxe</span>
        </h2>
        <br />
        <ExpandableSection>
          <template #header>
            <h2>• Resolução Única</h2>
          </template>
          <h2 class="moves">
            T1+: <span class="water">Water Spout</span> + <span class="fly">Blizzard</span>
          </h2>
          <h2 class="moves">
            <span class="heal">Cure</span> quando Vanilluxe cair
          </h2> </ExpandableSection
        ><br />

        <!--Fortree Check-->
        <h2 class="city-title">3- Fortree</h2>
        <img
          class="map"
          src="https://archives.bulbagarden.net/media/upload/6/6a/Hoenn_Fortree_City_Map.png"
          alt="Mapa marcando fortree"
        />
        <h2>
          Entre com<br />
          <img
            alt="Blastoise"
            src="https://img.pokemondb.net/sprites/black-white/anim/normal/blastoise.gif"
          /><span class="water">Blastoise</span> e
          <img
            alt="Weezing"
            src="https://img.pokemondb.net/sprites/black-white/anim/normal/weezing.gif"
          /><span class="poison">Weezing</span>
        </h2>
        <br />
        <ExpandableSection>
          <template #header>
            <h2>
              • Vs
              <img
                alt="Swellow"
                src="https://img.pokemondb.net/sprites/black-white/anim/normal/swellow.gif"
              /><span class="fly">Swellow</span>
            </h2>
          </template>
          <h2 class="moves">
            T1: <span class="water">Fake Out (No Swellow)</span> +
            <span class="poison">Explosion</span>
          </h2>
          <h2 class="moves">
            Lance
            <img
              alt="Vanilluxe"
              src="https://img.pokemondb.net/sprites/black-white/anim/normal/vanilluxe.gif"
            /><span class="ice">Vanilluxe</span> e
            <img
              alt="Togekiss"
              src="https://img.pokemondb.net/sprites/black-white/anim/normal/togekiss.gif"
            /><span class="fly">Togekiss</span>
          </h2>
          <h2 class="moves">
            T2+: <span class="ice">Blizzard</span> + <span class="fly">Hyper Voice</span>
          </h2> </ExpandableSection
        ><br />
        <ExpandableSection>
          <template #header>
            <h2>• Vs Outros</h2>
          </template>
          <h2 class="moves">
            T1: <span class="water">Water Spout</span> + <span class="poison">Explosion</span>
          </h2>
          <h2 class="moves">
            Lance
            <img
              alt="Typhlosion"
              src="https://img.pokemondb.net/sprites/black-white/anim/normal/typhlosion.gif"
            /><span class="fire">Typhlosion</span> e
            <img
              alt="Togekiss"
              src="https://img.pokemondb.net/sprites/black-white/anim/normal/togekiss.gif"
            /><span class="fly">Togekiss</span>
          </h2>
          <h2 class="moves">
            T2+: <span class="fire">Eruption</span> + <span class="fly">Hyper Voice</span>
          </h2> </ExpandableSection
        ><br />

        <!--Mauville Check-->
        <h2 class="city-title">4- Mauville</h2>
        <img
          src="https://archives.bulbagarden.net/media/upload/a/a1/Hoenn_Mauville_City_Map.png"
          class="map"
        />
        <h2>
          Entre com<br />
          <img
            alt="Typhlosion"
            src="https://img.pokemondb.net/sprites/black-white/anim/normal/typhlosion.gif"
          /><span class="fire">Typhlosion</span> e
          <img
            alt="Garchomp"
            src="https://img.pokemondb.net/sprites/black-white/anim/normal/garchomp.gif"
          /><span class="dragon">Garchomp</span>
        </h2>
        <br />
        <ExpandableSection>
          <template #header>
            <h2>
              • Vs
              <img
                alt="Ícone de air balloon"
                src="https://archives.bulbagarden.net/media/upload/f/f7/Dream_Air_Balloon_Sprite.png"
              />Air Ballon
              <img
                src="https://img.pokemondb.net/sprites/black-white/anim/normal/zebstrika.gif"
                alt="Zebstrika"
              /><span class="electric">Zebstrika</span>
            </h2>
          </template>
          <h2 class="moves">
            T1+: <span class="fire">Eruption</span> + <span class="dragon">Troque</span> por
            <img
              alt="Togekiss"
              src="https://img.pokemondb.net/sprites/black-white/anim/normal/togekiss.gif"
            /><span class="fly">Togekiss</span>
          </h2>
          <h2 class="moves">
            T2+: <span class="fire">Eruption</span> + <span class="fly">Hyper Voice</span>
          </h2> </ExpandableSection
        ><br />
        <ExpandableSection>
          <template #header>
            <h2>• Vs Outros</h2>
          </template>
          <h2 class="moves">
            T1: <span class="fire">Eruption</span> + <span class="dragon">Dragon Claw</span>
          </h2> </ExpandableSection
        ><br />
        <HealAdvisor />

        <!--Rustboro Check-->
        <h2 class="city-title">5- Rustboro</h2>
        <img
          class="map"
          alt="Mapa marcando rustboro"
          src="https://archives.bulbagarden.net/media/upload/c/c8/Hoenn_Rustboro_City_Map.png"
        />
        <h2>
          Entre com<br />
          <img
            alt="Blastoise"
            src="https://img.pokemondb.net/sprites/black-white/anim/normal/blastoise.gif"
          /><span class="water">Blastoise</span> e
          <img
            alt="Weezing"
            src="https://img.pokemondb.net/sprites/black-white/anim/normal/weezing.gif"
          /><span class="poison">Weezing</span>
        </h2>
        <br />
        <ExpandableSection>
          <template #header>
            <h2>• Resolução Única</h2>
          </template>
          <h2 class="moves">
            T1: <span class="water">Water Spout</span> + <span class="poison">Assurance</span>
          </h2> </ExpandableSection
        ><br />
      </section>

      <section class="route" id="kanto">
        <!--Vermillion-->
        <h2 class="city-title">6- Vermillion</h2>
        <img
          class="map"
          alt="Mapa marcando vermillion"
          src="https://archives.bulbagarden.net/media/upload/5/54/Kanto_Vermilion_City_Map.png"
        />
        <h2>
          Entre com<br />
          <img
            alt="Typhlosion"
            src="https://img.pokemondb.net/sprites/black-white/anim/normal/typhlosion.gif"
          /><span class="fire">Typhlosion</span> e
          <img
            alt="Garchomp"
            src="https://img.pokemondb.net/sprites/black-white/anim/normal/garchomp.gif"
          /><span class="dragon">Garchomp</span>
        </h2>
        <br />
        <ExpandableSection>
          <template #header>
            <h2>
              • Vs
              <img
                src="https://img.pokemondb.net/sprites/black-white/anim/normal/politoed.gif"
                alt="Politoed"
              /><span class="water">Politoed</span>
            </h2>
          </template>
          <h2 class="moves">
            T1: <span class="fire">Swift</span> + <span class="dragon">Earthquake</span>, lance
            <img
              src="https://img.pokemondb.net/sprites/black-white/anim/normal/vanilluxe.gif"
              alt="Vanilluxe"
            /><span class="ice">Vanilluxe</span>
          </h2>
          <h2 class="moves">
            T2+: <span class="ice">Blizzard</span> + <span class="dragon">Earthquake</span>
          </h2>
          <br />
          <h2 class="moves">
            • Lance
            <img
              src="https://img.pokemondb.net/sprites/black-white/anim/normal/togekiss.gif"
              alt="Togekiss"
            />
            <span class="fly">Togekiss</span> caso <span class="ice">Vanilluxe</span> desmaie
          </h2>
          <br />
          <h2 class="moves">
            <span class="heal">Cure</span> após essa resolução
          </h2> </ExpandableSection
        ><br />
        <ExpandableSection>
          <template #header>
            <h2>• Vs Outros</h2>
          </template>
          <h2 class="moves">
            T1+: <span class="fire">Eruption</span> + <span class="dragon">Dragon Claw</span>
          </h2> </ExpandableSection
        ><br />

        <!--Cinnabar Check-->
        <h2 class="city-title">7- Cinnabar</h2>
        <img
          class="map"
          alt="Mapa marcando cinnabar"
          src="https://archives.bulbagarden.net/media/upload/5/58/Kanto_Cinnabar_Island_Map.png"
        />
        <h2>
          Entre com<br />
          <img
            alt="Blastoise"
            src="https://img.pokemondb.net/sprites/black-white/anim/normal/blastoise.gif"
          /><span class="water">Blastoise</span> e
          <img
            alt="Weezing"
            src="https://img.pokemondb.net/sprites/black-white/anim/normal/weezing.gif"
          /><span class="poison">Weezing</span>
        </h2>
        <br />
        <ExpandableSection>
          <template #header>
            <h2>
              • Vs
              <img
                src="https://img.pokemondb.net/sprites/black-white/anim/normal/arcanine.gif"
                alt="Arcanine"
              /><span class="fire">Arcanine</span> OU
              <img
                src="https://img.pokemondb.net/sprites/black-white/anim/normal/charizard.gif"
                alt="Charizard"
              /><span class="fire">Charizard</span> OU
              <img
                src="https://img.pokemondb.net/sprites/black-white/anim/normal/typhlosion.gif"
                alt="Typhlosion"
              /><span class="fire">Typhlosion</span>
            </h2>
          </template>
          <h2 class="moves">
            T1: <span class="water">Water Spout</span> + <span class="poison">Troque</span> para
            <img
              src="https://img.pokemondb.net/sprites/black-white/anim/normal/vanilluxe.gif"
              alt="Vanilluxe"
            /><span class="ice">Vanilluxe</span>
          </h2>
          <h2 class="moves">
            T2+: <span class="water">Water Spout</span> + <span class="ice">Blizzard</span>
          </h2>
        </ExpandableSection>
        <br />
        <ExpandableSection>
          <template #header>
            <h2>
              • Vs
              <img
                src="https://img.pokemondb.net/sprites/black-white/anim/normal/flareon.gif"
                alt="Flareon"
              /><span class="fire">Flareon</span>
            </h2>
          </template>
          <h2 class="moves">
            T1+: <span class="water">Water Spout</span> + <span class="poison">Rain Dance</span>
          </h2> </ExpandableSection
        ><br />
        <ExpandableSection>
          <template #header>
            <h2>
              • Vs
              <img
                src="https://img.pokemondb.net/sprites/black-white/anim/normal/moltres.gif"
                alt="Moltres"
              /><span class="fire">Moltres</span>
            </h2>
          </template>
          <h2 class="moves">
            T1+: <span class="water">Water Spout</span> + <span class="poison">Assurance</span>
          </h2>
          <h2 class="moves">
            • Use <span class="poison">Assurance</span> na
            <img
              alt="Blissey"
              src="https://img.pokemondb.net/sprites/black-white/anim/normal/blissey.gif"
            /><span class="normal">Blissey</span>
          </h2> </ExpandableSection
        ><br />

        <!--Celadon Check-->
        <h2 class="city-title">8- Celadon</h2>
        <img
          class="map"
          alt="mapa marcando celadon"
          src="https://archives.bulbagarden.net/media/upload/b/bd/Kanto_Celadon_City_Map.png"
        />
        <h2>
          Entre com<br />
          <img
            alt="Blastoise"
            src="https://img.pokemondb.net/sprites/black-white/anim/normal/blastoise.gif"
          /><span class="water">Blastoise</span> e
          <img
            alt="Weezing"
            src="https://img.pokemondb.net/sprites/black-white/anim/normal/weezing.gif"
          /><span class="poison">Weezing</span>
        </h2>
        <br />
        <ExpandableSection>
          <template #header>
            <h2>
              • Vs
              <img
                src="https://img.pokemondb.net/sprites/black-white/anim/normal/victreebel.gif"
                alt="Victreebel"
              /><span class="grass">Victreebel</span>
            </h2>
          </template>
          <h2 class="moves">
            T1+: <span class="water">Water Spout</span> + <span class="poison">Explosion</span>
          </h2>
          <h2 class="moves">
            Lance
            <img
              alt="Typhlosion"
              src="https://img.pokemondb.net/sprites/black-white/anim/normal/typhlosion.gif"
            /><span class="fire">Typhlosion</span> e
            <img
              alt="Garchomp"
              src="https://img.pokemondb.net/sprites/black-white/anim/normal/garchomp.gif"
            /><span class="dragon">Garchomp</span>
          </h2>
          <h2 class="moves">
            T2+: <span class="fire">Eruption</span> + <span class="dragon">Dragon Claw</span>
          </h2> </ExpandableSection
        ><br />
        <ExpandableSection>
          <template #header>
            <h2>• Vs Outros</h2>
          </template>
          <h2 class="moves">
            T1+: <span class="water">Water Spout</span> + <span class="poison">Explosion</span>
          </h2>
          <h2 class="moves">
            Lance
            <img
              alt="Typhlosion"
              src="https://img.pokemondb.net/sprites/black-white/anim/normal/typhlosion.gif"
            /><span class="fire">Typhlosion</span> e
            <img
              alt="Togekiss"
              src="https://img.pokemondb.net/sprites/black-white/anim/normal/togekiss.gif"
            /><span class="fly">Togekiss</span>
          </h2>
          <h2 class="moves">
            T2+: <span class="fire">Eruption</span> + <span class="fly">Hyper Voice</span>
          </h2> </ExpandableSection
        ><br />

        <!--Saffron Check-->
        <h2 class="city-title">9- Saffron</h2>
        <img
          alt="mapa marcando saffron"
          src="https://archives.bulbagarden.net/media/upload/6/6a/Kanto_Saffron_City_Map.png"
        />
        <h2>Puzzle: Direita-> Baixo-> Esquerda-> Esquerda</h2>
        <h2>
          Entre com<br />
          <img
            alt="Typhlosion"
            src="https://img.pokemondb.net/sprites/black-white/anim/normal/typhlosion.gif"
          /><span class="fire">Typhlosion</span> e
          <img
            alt="Garchomp"
            src="https://img.pokemondb.net/sprites/black-white/anim/normal/garchomp.gif"
          /><span class="dragon">Garchomp</span>
        </h2>
        <br />
        <ExpandableSection>
          <template #header>
            <h2>
              • Vs
              <img
                src="https://img.pokemondb.net/sprites/black-white/anim/normal/espeon.gif"
                alt="Espeon"
              /><span class="psychic">Espeon</span> OU
              <img
                src="https://img.pokemondb.net/sprites/black-white/anim/normal/wobbuffet.gif"
                alt="Wobbuffet"
              /><span class="psychic">Wobbuffet</span>
            </h2>
          </template>
          <h2 class="moves">
            T1: <span class="fire">Eruption</span> + <span class="dragon">Earthquake</span>
          </h2>
          <h2 class="moves">
            Lance
            <img
              alt="Togekiss"
              src="https://img.pokemondb.net/sprites/black-white/anim/normal/togekiss.gif"
            /><span class="fly">Togekiss</span>
          </h2>
          <h2 class="moves">
            T2+: <span class="fly">Hyper Voice</span> + <span class="dragon">Earthquake</span>
          </h2> </ExpandableSection
        ><br />
        <ExpandableSection>
          <template #header>
            <h2>• Vs Outros</h2>
          </template>
          <h2 class="moves">
            T1+: <span class="fire">Eruption</span> + <span class="dragon">Dragon Claw</span>
          </h2> </ExpandableSection
        ><br />
        <HealAdvisor />

        <!--Pewter Check-->
        <h2 class="city-title">Pewter (Opcional, cure após caso leve dano)</h2>
        <img
          alt="Mapa marcando pewter"
          src="https://archives.bulbagarden.net/media/upload/8/8e/Kanto_Pewter_City_Map.png"
        />
        <h2>
          Entre com<br />
          <img
            alt="Blastoise"
            src="https://img.pokemondb.net/sprites/black-white/anim/normal/blastoise.gif"
          /><span class="water">Blastoise</span> e
          <img
            alt="Weezing"
            src="https://img.pokemondb.net/sprites/black-white/anim/normal/weezing.gif"
          /><span class="poison">Weezing</span>
        </h2>
        <br />
        <ExpandableSection>
          <template #header>
            <h2>
              • Vs
              <img
                src="https://img.pokemondb.net/sprites/black-white/anim/normal/golem.gif"
                alt="Golem"
              /><span class="rock">Golem</span> OU
              <img
                src="https://img.pokemondb.net/sprites/black-white/anim/normal/toxicroak.gif"
                alt="Toxicroak"
              /><span class="poison">Toxicroak</span>
            </h2>
          </template>
          <h2 class="moves">
            T1+: <span class="water">Water Spout</span> + <span class="poison">Assurance</span>
          </h2> </ExpandableSection
        ><br />
        <ExpandableSection>
          <template #header>
            <h2>
              • Vs
              <img
                src="https://img.pokemondb.net/sprites/black-white/anim/normal/ludicolo.gif"
                alt="Ludicolo"
              /><span class="water">Ludicolo</span> OU
              <img
                src="https://img.pokemondb.net/sprites/black-white/anim/normal/aerodactyl.gif"
                alt="aerodactyl"
              /><span class="poison">Aerodactyl</span>
            </h2>
          </template>
          <h2 class="moves">
            T1: <span class="water">Water Spout</span> + <span class="poison">Explosion</span>
          </h2>
          <h2 class="moves">
            Lance
            <img
              alt="Togekiss"
              src="https://img.pokemondb.net/sprites/black-white/anim/normal/togekiss.gif"
            /><span class="fly">Togekiss</span> e <img
              alt="Garchomp"
              src="https://img.pokemondb.net/sprites/black-white/anim/normal/garchomp.gif"
            /><span class="dragon">Garchomp</span>
          </h2>
          <h2 class="moves">
            T2+: <span class="fly">Hyper Voice</span> + <span class="dragon">Earthquake</span>
          </h2> </ExpandableSection
        ><br />
        <ExpandableSection>
          <template #header>
            <h2>
              • Vs
              <img
                src="https://img.pokemondb.net/sprites/black-white/anim/normal/ludicolo.gif"
                alt="Ludicolo"
              /><span class="water">Swampert</span>
            </h2>
          </template>
          <h2 class="moves">
            T1: <span class="water">Water Spout</span> + <span class="poison">Explosion</span>
          </h2>
          <h2 class="moves">
            Lance
            <img
              alt="Typhlosion"
              src="https://img.pokemondb.net/sprites/black-white/anim/normal/typhlosion.gif"
            /><span class="fire">Typhlosion</span> e <img
              alt="Garchomp"
              src="https://img.pokemondb.net/sprites/black-white/anim/normal/togekiss.gif"
            /><span class="fly">Togekiss</span>
          </h2>
          <h2 class="moves">
            T2+: <span class="fire">Eruption</span> + <span class="fly">Hyper Voice</span>
          </h2> 
          </ExpandableSection
        ><br />
      </section>

    </section>
  </div>
</template>

<style scoped>
@import '@/assets/styles/views/basic-route.css';
@import '@/assets/styles/components/pokemon-card.css';
</style>
