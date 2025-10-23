<script setup lang="ts">
import HealAdvisor from '@/components/HealAdvisor.vue'
import ExpandableSection from '../components/ExpandableSection.vue'
import PokemonCard from '@/components/PokemonCard.vue'
import PokeNameImg from '@/components/PokeNameImg.vue'
import RegionAdvisor from '@/components/RegionAdvisor.vue'
</script>

<template>
  <div class="background">
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
        :moves="['Water Spout (EGG MOVE!!!)', 'Blizzard', 'Helping Hand', 'Fake Out']"
        pokeName="Blastoise"
      />

      <!--Togekiss Check-->
      <PokemonCard
        itemName="Choice Specs"
        itemImg="https://raw.githubusercontent.com/msikma/pokesprite/master/items/hold-item/choice-specs.png"
        nature="Modest"
        hability="Hustle"
        evs="EVS: SPA 252 | SPD 6 | SPE 252"
        ivs="IVS: SPA 31 | SPE 31"
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
      </p><br/>
      <p>Editado em: 19/10/2025</p>
      <br />
    </ExpandableSection>
  </div>
  <div class="background">
    <section class="route">
      <section class="route" id="hoenn">
        <h1 class="title">Inicio da Rota:</h1>
        <br />
        <RegionAdvisor region="Hoenn" />

        <!--Lavaridge Check-->
        <h2 class="city-title">1- Lavaridge</h2>
        <img
          class="map"
          alt="Mapa marcando lavaridge"
          src="@/assets/images/routes/Lavaridge.png"
        />
        <p>Puzzle:</p>
        <img class="puzzle" alt="puzzle de lavaridge" src="@/assets/images/lavaridge-puzzle.png" />
        <h2>
          Entre com<br />
          <PokeNameImg pokeName="blastoise" pokeType="water" /> e
          <PokeNameImg pokeName="togekiss" pokeType="fly" />
        </h2>
        <br />
        <ExpandableSection>
          <template #header>
            <h2>
              • Vs
              <PokeNameImg pokeName="houndoom" pokeType="dark" /> OU Lvl.85
              <PokeNameImg pokeName="arcanine" pokeType="fire" />
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
          src="@/assets/images/routes/Dewford.png"
        />

        <h2>
          Entre com<br />
          <PokeNameImg pokeName="blastoise" pokeType="water" /> e
          <PokeNameImg pokeName="vanilluxe" pokeType="ice" />
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
            <span class="heal">Cure</span> se
            <PokeNameImg pokeName="vanilluxe" pokeType="ice" /> desmaiar
          </h2> </ExpandableSection
        ><br />

        <!--Fortree Check-->
        <h2 class="city-title">3- Fortree</h2>
        <img
          class="map"
          src="@/assets/images/routes/Fortree.png"
          alt="Mapa marcando fortree"
        />
        <h2>
          Entre com<br />
          <PokeNameImg pokeName="blastoise" pokeType="water" /> e
          <PokeNameImg pokeName="weezing" pokeType="poison" />
        </h2>
        <br />
        <ExpandableSection>
          <template #header>
            <h2>
              • Vs
              <PokeNameImg pokeName="swellow" pokeType="fly" />
            </h2>
          </template>
          <h2 class="moves">
            T1: <span class="water">Fake Out (No Swellow)</span> +
            <span class="poison">Explosion</span>
          </h2>
          <h2 class="moves">
            • Lance
            <PokeNameImg pokeName="vanilluxe" pokeType="ice" /> e
            <PokeNameImg pokeName="togekiss" pokeType="fly" />
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
            • Lance
            <PokeNameImg pokeName="typhlosion" pokeType="fire" /> e
            <PokeNameImg pokeName="togekiss" pokeType="fly" />
          </h2>
          <h2 class="moves">
            T2+: <span class="fire">Eruption</span> + <span class="fly">Hyper Voice</span>
          </h2> </ExpandableSection
        ><br />

        <!--Mauville Check-->
        <h2 class="city-title">4- Mauville</h2>
        <img
          src="@/assets/images/routes/Mauville.png"
          class="map"
        />
        <h2>
          Entre com<br />
          <PokeNameImg pokeName="typhlosion" pokeType="fire" /> e
          <PokeNameImg pokeName="garchomp" pokeType="dragon" />
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
              <PokeNameImg pokeName="zebstrika" pokeType="electric" />
            </h2>
          </template>
          <h2 class="moves">
            T1: <span class="fire">Eruption</span> + <span class="dragon">Troque</span> por
            <PokeNameImg pokeName="togekiss" pokeType="fly" />
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
          src="@/assets/images/routes/Rustboro.png"
        />
        <h2>
          Entre com<br />
          <PokeNameImg pokeName="blastoise" pokeType="water" /> e
          <PokeNameImg pokeName="weezing" pokeType="poison" />
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

        <RegionAdvisor region="Kanto" />

        <!--Vermillion Check-->
        <h2 class="city-title">6- Vermillion</h2>
        <img
          class="map"
          alt="Mapa marcando vermillion"
          src="@/assets/images/routes/Vermilion.png"
        />
        <h2>
          Entre com<br />
          <PokeNameImg pokeName="typhlosion" pokeType="fire" /> e
          <PokeNameImg pokeName="garchomp" pokeType="dragon" />
        </h2>
        <br />
        <ExpandableSection>
          <template #header>
            <h2>
              • Vs
              <PokeNameImg pokeName="politoed" pokeType="water" />
            </h2>
          </template>
          <h2 class="moves">
            T1: <span class="fire">Swift</span> + <span class="dragon">Earthquake</span>, lance
            <PokeNameImg pokeName="vanilluxe" pokeType="ice" />
          </h2>
          <h2 class="moves">
            T2+: <span class="ice">Blizzard</span> + <span class="dragon">Earthquake</span>
          </h2>
          <br />
          <h2 class="moves">
            • Lance
            <PokeNameImg pokeName="togekiss" pokeType="fly" /> caso <span class="ice">Vanilluxe</span> desmaie
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
          src="@/assets/images/routes/Cinnabar.png"
        />
        <h2>
          Entre com<br />
          <PokeNameImg pokeName="blastoise" pokeType="water" /> e
          <PokeNameImg pokeName="weezing" pokeType="poison" />
        </h2>
        <br />
        <ExpandableSection>
          <template #header>
            <h2>
              • Vs
              <PokeNameImg pokeName="arcanine" pokeType="fire" /> OU
              <PokeNameImg pokeName="charizard" pokeType="fire" /> OU
              <PokeNameImg pokeName="typhlosion" pokeType="fire" />
            </h2>
          </template>
          <h2 class="moves">
            T1: <span class="water">Water Spout</span> + <span class="poison">Troque</span> para
            <PokeNameImg pokeName="vanilluxe" pokeType="ice" />
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
              <PokeNameImg pokeName="flareon" pokeType="fire" />
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
              <PokeNameImg pokeName="moltres" pokeType="fire" />
            </h2>
          </template>
          <h2 class="moves">
            T1+: <span class="water">Water Spout</span> + <span class="poison">Assurance</span>
          </h2>
          <h2 class="moves">
            • Use <span class="poison">Assurance</span> na
            <PokeNameImg pokeName="blissey" pokeType="normal" />
          </h2> </ExpandableSection
        ><br />

        <!--Celadon Check-->
        <h2 class="city-title">8- Celadon</h2>
        <img
          class="map"
          alt="mapa marcando celadon"
          src="@/assets/images/routes/Celadon.png"
        />
        <h2>
          Entre com<br />
          <PokeNameImg pokeName="blastoise" pokeType="water" /> e
          <PokeNameImg pokeName="weezing" pokeType="poison" />
        </h2>
        <br />
        <ExpandableSection>
          <template #header>
            <h2>
              • Vs
              <PokeNameImg pokeName="victreebel" pokeType="grass" />
            </h2>
          </template>
          <h2 class="moves">
            T1: <span class="water">Water Spout</span> + <span class="poison">Explosion</span>
          </h2>
          <h2 class="moves">
            • Lance
            <PokeNameImg pokeName="typhlosion" pokeType="fire" /> e
            <PokeNameImg pokeName="garchomp" pokeType="dragon" />
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
            • Lance
            <PokeNameImg pokeName="typhlosion" pokeType="fire" /> e
            <PokeNameImg pokeName="togekiss" pokeType="fly" />
          </h2>
          <h2 class="moves">
            T2+: <span class="fire">Eruption</span> + <span class="fly">Hyper Voice</span>
          </h2> </ExpandableSection
        ><br />

        <!--Saffron Check-->
        <h2 class="city-title">9- Saffron</h2>
        <img
          alt="mapa marcando saffron" 
          src="@/assets/images/routes/Saffron.png"
        />
        <h2>Puzzle: Direita-> Baixo-> Esquerda-> Esquerda</h2>
        <h2>
          Entre com<br />
          <PokeNameImg pokeName="typhlosion" pokeType="fire" /> e
          <PokeNameImg pokeName="garchomp" pokeType="dragon" />
        </h2>
        <br />
        <ExpandableSection>
          <template #header>
            <h2>
              • Vs
              <PokeNameImg pokeName="espeon" pokeType="psychic" /> OU
              <PokeNameImg pokeName="wobbuffet" pokeType="psychic" />
            </h2>
          </template>
          <h2 class="moves">
            T1: <span class="fire">Eruption</span> + <span class="dragon">Earthquake</span>
          </h2>
          <h2 class="moves">
            • Lance
            <PokeNameImg pokeName="togekiss" pokeType="fly" />
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
        <h2 class="city-title">10- Pewter (Opcional, cure após caso leve dano)</h2>
        <img
        class="map"
          alt="Mapa marcando pewter"
          src="@/assets/images/routes/Pewter.png"
        />
        <h2>
          Entre com<br />
          <PokeNameImg pokeName="blastoise" pokeType="water" /> e
          <PokeNameImg pokeName="weezing" pokeType="poison" />
        </h2>
        <br />
        <ExpandableSection>
          <template #header>
            <h2>
              • Vs
              <PokeNameImg pokeName="golem" pokeType="rock" /> OU
              <PokeNameImg pokeName="toxicroak" pokeType="poison" />
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
              <PokeNameImg pokeName="ludicolo" pokeType="water" /> OU
              <PokeNameImg pokeName="aerodactyl" pokeType="rock" />
            </h2>
          </template>
          <h2 class="moves">
            T1: <span class="water">Water Spout</span> + <span class="poison">Explosion</span>
          </h2>
          <h2 class="moves">
            • Lance
            <PokeNameImg pokeName="togekiss" pokeType="fly" /> e
            <PokeNameImg pokeName="garchomp" pokeType="dragon" />
          </h2>
          <h2 class="moves">
            T2+: <span class="fly">Hyper Voice</span> + <span class="dragon">Earthquake</span>
          </h2> </ExpandableSection
        ><br />
        <ExpandableSection>
          <template #header>
            <h2>
              • Vs
              <PokeNameImg pokeName="swampert" pokeType="water" />
            </h2>
          </template>
          <h2 class="moves">
            T1: <span class="water">Water Spout</span> + <span class="poison">Explosion</span>
          </h2>
          <h2 class="moves">
            • Lance
            <PokeNameImg pokeName="typhlosion" pokeType="fire" /> e
            <PokeNameImg pokeName="togekiss" pokeType="fly" />
          </h2>
          <h2 class="moves">
            T2+: <span class="fire">Eruption</span> + <span class="fly">Hyper Voice</span>
          </h2> </ExpandableSection
        ><br />
      </section>
      <section class="route" id="sinnoh">
        <RegionAdvisor region="Sinnoh" />
        <!--Eterna Check-->
        <h2 class="city-title">11- Eterna</h2>
        <img
        class="map"
          alt="mapa marcando eterna"
          src="@/assets/images/routes/Eterna.png"
        />
        <h2>
          Entre com<br />
          <PokeNameImg pokeName="typhlosion" pokeType="fire" /> e
          <PokeNameImg pokeName="togekiss" pokeType="fly" />
        </h2>
        <br />
        <ExpandableSection>
          <template #header>
            <h2>
              • Vs
              <PokeNameImg pokeName="ninetales" pokeType="fire" />
            </h2>
          </template>
          <h2 class="moves">
            T1: <span class="fire">Incinerate</span> + <span class="fly">Hyper Voice</span>
          </h2>
          <h2 class="moves">
            T2: <span class="fire">Incinerate</span> + <span class="fly">Troque</span> para
            <PokeNameImg pokeName="weezing" pokeType="poison" />
          </h2>
          <h2 class="moves">
            T3+: <span class="fire">Incinerate</span> + <span class="poison">Assurance</span>
          </h2>
          <h2 class="moves">
            • <span class="heal">Cure</span> se
            <PokeNameImg pokeName="typhlosion" pokeType="fire" /> levar dano
          </h2> </ExpandableSection
        ><br />
        <ExpandableSection>
          <template #header>
            <h2>
              • Vs
              <PokeNameImg pokeName="roserade" pokeType="grass" />
            </h2>
          </template>
          <h2 class="moves">
            T1+: <span class="fire">Eruption</span> + <span class="fly">Hyper Voice</span>
          </h2> </ExpandableSection
        ><br />
        <ExpandableSection>
          <template #header>
            <h2>
              • Vs
              <PokeNameImg pokeName="whimsicott" pokeType="grass" />
            </h2>
          </template>
          <h2 class="moves">
            T1: <span class="fire">Eruption</span> + <span class="fly">Hyper Voice</span>
          </h2>
          <h2 class="moves">
            T2: <span class="fire">Eruption</span> + <span class="fly">Troque</span> para
            <PokeNameImg pokeName="weezing" pokeType="poison" />
          </h2>
          <h2 class="moves">
            T3+: <span class="fire">Eruption</span> + <span class="poison">Assurance</span>
          </h2> </ExpandableSection
        ><br />
        <ExpandableSection>
          <template #header>
            <h2>• Vs Outros</h2>
          </template>
          <h2 class="moves">
            T1+: <span class="fire">Swift</span> + <span class="fly">Hyper Voice</span>
          </h2> </ExpandableSection
        ><br />

        <!--Veilstone Check-->
        <h2 class="city-title">12- Veilstone</h2>
        <img
          class="map"
          alt="mapa marcando veilstone"
          src="@/assets/images/routes/Veilstone.png"
        />
        <h2>
          Entre com<br />
          <PokeNameImg pokeName="typhlosion" pokeType="fire" /> e
          <PokeNameImg pokeName="togekiss" pokeType="fly" />
        </h2>
        <br />
        <ExpandableSection>
          <template #header>
            <h2>
              • Vs
              <PokeNameImg pokeName="infernape" pokeType="fire" />
            </h2>
          </template>
          <h2 class="moves">
            T1+: <span class="fire">Eruption</span> + <span class="fly">Hyper Voice</span>
          </h2>
          <h2 class="moves">
            • <span class="heal">Cure</span> se
            <PokeNameImg pokeName="typhlosion" pokeType="fire" /> levar dano
          </h2> </ExpandableSection
        ><br />
        <ExpandableSection>
          <template #header>
            <h2>
              • Vs
              <PokeNameImg pokeName="mienshao" pokeType="fighting" />
            </h2>
          </template>
          <h2 class="moves">
            T1+: <span class="fire">Incinerate</span> + <span class="fly">Hyper Voice</span>
          </h2>
          <h2 class="moves">
            • <span class="heal">Cure</span> se
            <PokeNameImg pokeName="typhlosion" pokeType="fire" /> levar dano
          </h2> </ExpandableSection
        ><br />
        <ExpandableSection>
          <template #header>
            <h2>• Vs Outros</h2>
          </template>
          <h2 class="moves">
            T1+: <span class="fire">Eruption</span> + <span class="fly">Helping Hand</span>
          </h2>
          <h2 class="moves">
            • <span class="heal">Cure</span> se
            <PokeNameImg pokeName="typhlosion" pokeType="fire" /> levar dano
          </h2> </ExpandableSection
        ><br />

        <!--Oreburgh Check-->
        <h2 class="city-title">13- Oreburgh</h2>
        <img
        class="map"
          alt="mapa marcando Oreburgh"
          src="@/assets/images/routes/Oreburgh.png"
        />
        <h2>
          Entre com<br />
          <PokeNameImg pokeName="blastoise" pokeType="water" /> e
          <PokeNameImg pokeName="weezing" pokeType="poison" />
        </h2>
        <br />
        <ExpandableSection>
          <template #header>
            <h2>
              • Vs
              <PokeNameImg pokeName="probopass" pokeType="rock" />
            </h2>
          </template>
          <h2 class="moves">
            T1: <span class="water">Water Spout</span> + <span class="poison">Troque</span> para
            <PokeNameImg pokeName="vanilluxe" pokeType="ice" />
          </h2>
          <h2 class="moves">
            T2+: <span class="water">Water Spout</span> + <span class="ice">Blizzard</span>
          </h2> </ExpandableSection
        ><br />
        <ExpandableSection>
          <template #header>
            <h2>• Vs Outros</h2>
          </template>
          <h2 class="moves">
            T1+: <span class="water">Water Spout</span> +
            <span class="poison">Assurance</span> (principalmente no
            <PokeNameImg pokeName="cradily" pokeType="rock" />)
          </h2>
          <h2 class="moves">
            • Lance
            <PokeNameImg pokeName="vanilluxe" pokeType="ice" /> caso <span class="poison">Weezing</span> desmaie
          </h2>
          <h2 class="moves">
            • <span class="water">Water Spout</span> + <span class="ice">Blizzard</span>
          </h2>
          </ExpandableSection
        ><br />

        <!--Pastoria Check-->
        <h2 class="city-title">14- Pastoria</h2>
        <img class="map" src="@/assets/images/routes/Pastoria.png" alt="Mapa marcando Pastoria">
        <h2>Entre com <br/><PokeNameImg pokeName="blastoise" pokeType="water"/> e <PokeNameImg pokeName="weezing" pokeType="poison"/></h2><br/>
        <ExpandableSection>
          <template #header>
            <h2>• Resolução Única</h2>
          </template>
          <h2 class="moves">
            T1: <span class="water">Fake Out (No Sharpedo)</span> +
            <span class="poison">Explosion</span>
          </h2>
          <h2 class="moves">
            • Lance
            <PokeNameImg pokeName="togekiss" pokeType="fly" /> e <PokeNameImg pokeName="garchomp" pokeType="dragon" />
          </h2>
          <h2 class="moves">
            T2+: <span class="fly">Hyper Voice</span> + <span class="dragon">Earthquake</span>
          </h2>
          </ExpandableSection
        ><br />
      </section>
      <section class="route" id="johto">
        <RegionAdvisor region="Johto" />

        <!--Cianwood Check-->
        <h2 class="city-title">15- Cianwood</h2>
        <img class="map" alt="mapa marcando cianwood" src="@/assets/images/routes/Cianwood.png">
        <h2>Entre com<br/> <PokeNameImg pokeName="togekiss" pokeType="fly"/> e <PokeNameImg pokeName="garchomp" pokeType="dragon"/></h2><br/>
        <ExpandableSection>
          <template #header>
            <h2>• Resolução Única</h2>
          </template>
          <h2 class="moves">
            T1+: <span class="fly">Hyper Voice</span> +
            <span class="poison">Earthquake</span>
          </h2>
          </ExpandableSection
        ><br />

        <!--Goldenrod Check-->
        <h2 class="city-title">16- Goldenrod</h2>
        <img class="map" alt="mapa marcando goldenrod" src="@/assets/images/routes/Goldenrod.png">
        <h2>Entre com<br/> <PokeNameImg pokeName="togekiss" pokeType="fly"/><span class="fly"> (Slot 1)</span> e <PokeNameImg pokeName="garchomp" pokeType="dragon"/><span class="dragon"> (Slot 2)</span></h2><br/>
        <ExpandableSection>
          <template #header>
            <h2>• Resolução Única</h2>
          </template>
          <h2 class="moves">
            T1+: <span class="fly">Hyper Voice</span> +
            <span class="dragon">Earthquake</span>
          </h2>
          <h2 class="moves">
            • Lance
            <PokeNameImg pokeName="typhlosion" pokeType="fire" /> se <PokeNameImg pokeName="garchomp" pokeType="dragon" /> desmaiar
          </h2>
          <h2 class="moves">
            • <span class="fly">Hyper Voice</span> + <span class="fire">Eruption</span>
          </h2>
          </ExpandableSection
        ><br />
        <HealAdvisor />

        <!--Olivine Check-->
        <h2 class="city-title">17- Olivine</h2>
        <img class="map" alt="mapa marcando Olivine" src="@/assets/images/routes/Olivine.png">
        <h2>Entre com<br/><PokeNameImg pokeName="typhlosion" pokeType="fire"/> e <PokeNameImg pokeName="weezing" pokeType="poison"/></h2><br/>
        <ExpandableSection>
          <template #header>
            <h2>Vs <PokeNameImg pokeName="metagross" pokeType="steel"/></h2>
          </template>
          <h2 class="moves">
            T1: <span class="fire">Eruption</span> +
            <span class="poison">Explosion</span>
          </h2>
          <h2 class="moves">
            • Lance
            <PokeNameImg pokeName="togekiss" pokeType="fly" /> e <PokeNameImg pokeName="garchomp" pokeType="dragon" />
          </h2>
          <h2 class="moves">
            T2+: <span class="fly">Hyper Voice</span> + <span class="fire">Earthquake</span>
          </h2>
          </ExpandableSection
        ><br />
        <ExpandableSection>
          <template #header>
            <h2>• Vs Outros</h2>
          </template>
          <h2 class="moves">
            T1+: <span class="fire">Eruption</span> +
            <span class="poison">Assurance</span>
          </h2>
          </ExpandableSection
        ><br />

        <!--Violet Check-->
        <h2 class="city-title">18- Violet</h2>
        <img class="map" alt="mapa marcando violet" src="@/assets/images/routes/Violet.png">
        <h2>Entre com<br/><PokeNameImg pokeName="blastoise" pokeType="water"/> e <PokeNameImg pokeName="vanilluxe" pokeType="ice"/></h2><br/>
        <ExpandableSection>
          <template #header>
            <h2>• Vs <PokeNameImg pokeName="zapdos" pokeType="electric" /></h2>
          </template>
          <h2 class="moves">
            T1+: <span class="water">Water Spout</span> +
            <span class="ice">Hyper Voice</span>
          </h2>
          <h2 class="moves">
            •<span class="heal"> Cure</span> se <PokeNameImg pokeName="weezing" pokeType="poison"/> tiver se explodido em Olivine
          </h2>
          </ExpandableSection
        ><br />
        <ExpandableSection>
          <template #header>
            <h2>• Vs Outros</h2>
          </template>
          <h2 class="moves">
            T1+: <span class="water">Water Spout</span> +
            <span class="ice">Blizzard</span>
          </h2>
          <h2 class="moves">
            •<span class="heal"> Cure</span> se <PokeNameImg pokeName="weezing" pokeType="poison"/> tiver se explodido em Olivine
          </h2>
          </ExpandableSection
        ><br />

        <!--Blackthorn Check-->
        <h2 class="city-title">19- Blackthorn</h2>
        <img class="map" alt="mapa marcando blackthorn" src="@/assets/images/routes/Blackthorn.png">
        <h2>Entre com<br/><PokeNameImg pokeName="blastoise" pokeType="water"/> e <PokeNameImg pokeName="weezing" pokeType="poison"/></h2><br/>
        <ExpandableSection>
          <template #header>
            <h2>• Vs <PokeNameImg pokeName="blastoise" pokeType="water"/></h2>
          </template>
          <h2 class="moves">
            T1: <span class="water">Fake Out (No Blastoise)</span> +
            <span class="poison">Explosion</span>
          </h2>
          <h2 class="moves">
            • Lance <PokeNameImg pokeName="togekiss" pokeType="fly"/> e <PokeNameImg pokeName="vanilluxe" pokeType="ice"/>
          </h2>
          <h2 class="moves">
            T2+: <span class="fly">Hyper Voice</span> +
            <span class="ice">Blizzard</span>
          </h2>
          </ExpandableSection
        ><br />
        <ExpandableSection>
          <template #header>
            <h2>• Vs Outros</h2>
          </template>
          <h2 class="moves">
            T1: <span class="water">Water Spout</span> +
            <span class="poison">Explosion</span>
          </h2>
          <h2 class="moves">
            • Lance <PokeNameImg pokeName="togekiss" pokeType="fly"/> e <PokeNameImg pokeName="vanilluxe" pokeType="ice"/>
          </h2>
          <h2 class="moves">
            T2+: <span class="fly">Hyper Voice</span> +
            <span class="ice">Blizzard</span>
          </h2>
          </ExpandableSection
        ><br />
        <HealAdvisor/>

        <!--Mahogany Check-->
        <h2>20- Mahogany (Opcional)</h2>
        <img class="map" alt="mapa marcando Mahogany" src="@/assets/images/routes/Mahogany.png"></img>
        <h2>Entre com<br/><PokeNameImg pokeName="weezing" pokeType="poison"/> e <PokeNameImg pokeName="garchomp" pokeType="dragon"/></h2><br/>
        <ExpandableSection>
          <template #header>
            <h2>• Vs <PokeNameImg pokeName="articuno" pokeType="ice"/> OU <PokeNameImg pokeName="walrein" pokeType="ice"/></h2>
          </template>
          <h2 class="moves">
            T1: <span class="poison">Explosion</span> +
            <span class="dragon">Dragon Claw (No Articuno / Walrein)</span>
          </h2>
          <h2 class="moves">
            • Lance <PokeNameImg pokeName="typhlosion" pokeType="fire"/> e <PokeNameImg pokeName="togekiss" pokeType="fly"/>
          </h2>
          <h2 class="moves">
            T2+: <span class="fire">Eruption</span> +
            <span class="fly">Hyper Voice</span>
          </h2>
          </ExpandableSection
        ><br />
        <ExpandableSection>
          <template #header>
            <h2>• Vs <PokeNameImg pokeName="froslass" pokeType="ice"/></h2>
          </template>
          <h2 class="moves">
            T1: <span class="poison">Explosion</span> +
            <span class="dragon">Sunny Day</span>
          </h2>
          <h2 class="moves">
            • Lance <PokeNameImg pokeName="typhlosion" pokeType="fire"/> e <PokeNameImg pokeName="blastoise" pokeType="water"/>
          </h2>
          <h2 class="moves">
            T2+: <span class="fire">Eruption</span> +
            <span class="water">Water Spout</span>
          </h2>
          </ExpandableSection
        ><br />
        <ExpandableSection>
          <template #header>
            <h2>• Vs <PokeNameImg pokeName="glalie" pokeType="ice"/></h2>
          </template>
          <h2 class="moves">
            T1: <span class="poison">Explosion</span> +
            <span class="dragon">Troque</span> por <PokeNameImg pokeName="blastoise" pokeType="water"/>
          </h2>
          <h2 class="moves">
            • Lance <PokeNameImg pokeName="typhlosion" pokeType="fire"/> e <PokeNameImg pokeName="garchomp" pokeType="dragon"/>
          </h2>
          <h2 class="moves">
            T2: <span class="fire">Eruption</span> +
            <span class="dragon">Earthquake</span>
          </h2>
          <h2 class="moves">
            • Lance <PokeNameImg pokeName="togekiss" pokeType="fly"/>
          </h2>
          <h2 class="moves">
            T3+: <span class="fly">Hyper Voice</span> +
            <span class="dragon">Earthquake</span>
          </h2>
          </ExpandableSection
        ><br />
        <ExpandableSection>
          <template #header>
            <h2>• Vs <PokeNameImg pokeName="mamoswine" pokeType="ice"/></h2>
          </template>
          <h2 class="moves">
            T1: <span class="poison">Explosion</span> +
            <span class="dragon">Dragon Claw (No Mamoswine)</span>
          </h2>
          <h2 class="moves">
            • Lance <PokeNameImg pokeName="blastoise" pokeType="water"/> e <PokeNameImg pokeName="typhlosion" pokeType="fire"/>
          </h2>
          <h2 class="moves">
            T2+: <span class="water">Water Spout</span> +
            <span class="fire">Eruption</span>
          </h2>
          </ExpandableSection
        ><br />
        <HealAdvisor />
      </section>


      <section class="route" id="unova">
        <RegionAdvisor region="Unova" />

        <!--Castelia Check-->
        <h2 class="city-title">21- Castelia</h2>
        <img alt="mapa marcando castelia" class="map" src="@/assets/images/routes/Castelia.png">
        <h2>Entre com<br/><PokeNameImg pokeName="blastoise" pokeType="water"/> e <PokeNameImg pokeName="vanilluxe" pokeType="ice"/></h2><br/>
        <ExpandableSection>
          <template #header>
            <h2>• Resolução Única</h2>
          </template>
          <h2 class="moves">
            T1+: <span class="water">Water Spout</span> +
            <span class="ice">Blizzard</span>
          </h2>
          </ExpandableSection
        ><br />

        <!--Striaton Check-->
        <h2 class="city-title">22, 23, 24- Striaton</h2>
        <img alt="mapa marcando castelia" class="map" src="@/assets/images/routes/Striaton.png">        
        <h2 class="fire">• Contra <img alt="chili" src="@/assets/images/routes/Chili.png">Chili</h2>
        <h2>Entre com<br/><PokeNameImg pokeName="togekiss" pokeType="fly"/> e <PokeNameImg pokeName="garchomp" pokeType="dragon"/></h2><br/>
        <ExpandableSection>
          <template #header>
            <h2>• Vs <PokeNameImg pokeName="ninetales" pokeType="fire"/> OU <PokeNameImg pokeName="stoutland" pokeType="normal"/></h2>
          </template>
          <h2 class="moves">
            T1+: <span class="fly">Hyper Voice</span> +
            <span class="dragon">Helping Hand</span>
          </h2>
          </ExpandableSection
        ><br />
        <ExpandableSection>
          <template #header>
            <h2>• Vs Outros</h2>
          </template>
          <h2 class="moves">
            T1+: <span class="fly">Hyper Voice</span> +
            <span class="dragon">Earthquake</span>
          </h2>
          </ExpandableSection
        ><br />
        <h2 class="grass">• Contra <img alt="cilan" src="@/assets/images/routes/Cilan.png">Cilan</h2>
        <h2>Entre com<br/><PokeNameImg pokeName="typhlosion" pokeType="fire"/> e <PokeNameImg pokeName="togekiss" pokeType="fly"/></h2><br/>
        <ExpandableSection>
          <template #header>
            <h2>• Vs <PokeNameImg pokeName="leavanny" pokeType="bug"/></h2>
          </template>
          <h2 class="moves">
            T1+: <span class="fire">Eruption</span> +
            <span class="fly">Hyper Voice</span>
          </h2>
          </ExpandableSection
        ><br />
        <ExpandableSection>
          <template #header>
            <h2>• Vs Outros</h2>
          </template>
          <h2 class="moves">
            T1+: <span class="fire">Incinerate</span> +
            <span class="fly">Hyper Voice</span>
          </h2>
          </ExpandableSection
        ><br />
        <h2 class="water">• Contra <img alt="cress" src="@/assets/images/routes/Cress.png">Cress</h2>
        <h2>Entre com<br/><PokeNameImg pokeName="typhlosion" pokeType="fire"/> e <PokeNameImg pokeName="togekiss" pokeType="fly"/></h2><br/>
        <ExpandableSection>
          <template #header>
            <h2>• Vs <PokeNameImg pokeName="floatzel" pokeType="water"/></h2>
          </template>
          <h2 class="moves">
            T1: <span class="fire">Troque</span> por <PokeNameImg pokeName="vanilluxe" pokeType="ice"/> +
            <span class="fly">Hyper Voice</span>
          </h2>
          <h2 class="moves">
            T2+: <span class="ice">Hyper Voice</span> +
            <span class="fly">Hyper Voice</span>
          </h2>
          </ExpandableSection
        ><br />
        <ExpandableSection>
          <template #header>
            <h2>• Vs Outros</h2>
          </template>
          <h2 class="moves">
            T1+: <span class="fire">Eruption</span> +
            <span class="fly">Hyper Voice</span>
          </h2>
          </ExpandableSection
        ><br />

        <!--Mistalton Check-->
        <h2 class="city-title">25- Mistralton</h2>
        <img class="map" alt="mapa marcando mistralton" src="@/assets/images/routes/Mistralton.png">
        <h2>Entre com<br/><PokeNameImg pokeName="blastoise" pokeType="water"/> e <PokeNameImg pokeName="vanilluxe" pokeType="ice"/></h2><br/>
        <ExpandableSection>
          <template #header>
            <h2>• Vs <PokeNameImg pokeName="braviary" pokeType="fly"/> OU <PokeNameImg pokeName="mandibuzz" pokeType="fly"/></h2>
          </template>
          <h2 class="moves">
            T1+: <span class="water">Water Spout</span> +
            <span class="ice">Blizzard</span>
          </h2>
          </ExpandableSection
        ><br />
        <ExpandableSection>
          <template #header>
            <h2>• Vs <PokeNameImg pokeName="swanna" pokeType="fly"/> OU <PokeNameImg pokeName="whimsicott" pokeType="grass"/></h2>
          </template>
          <h2 class="moves">
            T1+: <span class="water">Blizzard</span> +
            <span class="ice">Blizzard</span>
          </h2>
          </ExpandableSection
        ><br />
        <ExpandableSection>
          <template #header>
            <h2>• Vs <PokeNameImg pokeName="unfezant" pokeType="fly"/></h2>
          </template>
          <h2 class="moves">
            T1: <span class="water">Blizzard</span> +
            <span class="ice">Troque</span> por <PokeNameImg pokeName="weezing" pokeType="poison"/>
          </h2>
          <h2 class="moves">
            T2+: <span class="water">Blizzard</span> +
            <span class="poison">Assurance</span>
          </h2>
          </ExpandableSection
        ><br />

        <!--Nimbasa Check-->
        <h2 class="city-title">26- Nimbasa</h2>
        <img class="map" alt="Mapa marcando nimbasa" src="@/assets/images/routes/Nimbasa.png">
        <h2>Entre com<br/><PokeNameImg pokeName="blastoise" pokeType="water"/> e <PokeNameImg pokeName="weezing" pokeType="poison"/></h2><br/>
        <ExpandableSection>
          <template #header>
            <h2>• Vs <PokeNameImg pokeName="emolga" pokeType="electric"/></h2>
          </template>
          <h2 class="moves">
            T1: <span class="water">Fake Out (No Emolga)</span> +
            <span class="poison">Explosion</span>
          </h2>
          <h2 class="moves">
            • Lance <PokeNameImg pokeName="typhlosion" pokeType="fire"/> e <PokeNameImg pokeName="togekiss" pokeType="fly"/>
          </h2>
          <h2 class="moves">
            T2+: <span class="fire">Eruption</span> +
            <span class="fly">Hyper Voice</span>
          </h2>
          </ExpandableSection
        ><br />
        <ExpandableSection>
          <template #header>
            <h2>• Vs <PokeNameImg pokeName="galvantula" pokeType="bug"/></h2>
          </template>
          <h2 class="moves">
            T1: <span class="water">Fake Out (No Galvantula)</span> +
            <span class="poison">Explosion</span>
          </h2>
          <h2 class="moves">
            • Lance <PokeNameImg pokeName="typhlosion" pokeType="fire"/> e <PokeNameImg pokeName="togekiss" pokeType="fly"/>
          </h2>
          <h2 class="moves">
            T2+: <span class="fire">Swift</span> +
            <span class="fly">Hyper Voice</span>
          </h2>
          </ExpandableSection
        ><br />
        <ExpandableSection>
          <template #header>
            <h2>• Vs Outros</h2>
          </template>
          <h2 class="moves">
            T1: <span class="water">Water Spout</span> +
            <span class="poison">Explosion</span>
          </h2>
          <h2 class="moves">
            • Lance <PokeNameImg pokeName="typhlosion" pokeType="fire"/> e <PokeNameImg pokeName="togekiss" pokeType="fly"/>
          </h2>
          <h2 class="moves">
            T2+: <span class="fire">Eruption</span> +
            <span class="fly">Hyper Voice</span>
          </h2>
          </ExpandableSection
        ><br />
        <HealAdvisor />

        <!--Opelucid Check-->
        <h2 class="city-title">27- Opelucid</h2>
        <img alt="mapa marcando opelucid" class="map" src="@/assets/images/routes/Opelucid.png">
        <h2>Entre com<br/><PokeNameImg pokeName="typhlosion" pokeType="fire"/> e <PokeNameImg pokeName="vanilluxe" pokeType="ice"/></h2><br/>
        <ExpandableSection>
          <template #header>
            <h2>• Resolução Única</h2>
          </template>
          <h2 class="moves">
            T1+: <span class="fire">Eruption</span> +
            <span class="ice">Blizzard</span>
          </h2><br/>
          <h2 class="moves">
            • Se <PokeNameImg pokeName="emboar" pokeType="fire"/> sobreviver e derrubar <PokeNameImg pokeName="vanilluxe" pokeType="ice"/><br/>
          </h2>
          <h2 class="moves">
            • Lance <PokeNameImg pokeName="blastoise" pokeType="water"/>
          </h2>
          <h2 class="moves">
            • <span class="fire">Eruption</span> +
            <span class="water">Blizzard</span><br/>
          </h2><br/>
          <h2 class="moves">
            ◇ Se <PokeNameImg pokeName="lapras" pokeType="water"/> sobreviver e derrubar <PokeNameImg pokeName="typhlosion" pokeType="fire"/><br/>
          </h2>
          <h2 class="moves">
            ◇ Lance <PokeNameImg pokeName="garchomp" pokeType="dragon"/>
          </h2>
          <h2 class="moves">
            ◇ <span class="dragon">Earthquake</span> +
            <span class="ice">Blizzard</span><br/>
          </h2><br/>
          <h2 class="moves">
            ▷ Se <PokeNameImg pokeName="samurott" pokeType="water"/> sobreviver e derrubar <PokeNameImg pokeName="typhlosion" pokeType="fire"/><br/>
          </h2>
          <h2 class="moves">
            ▷ Lance <PokeNameImg pokeName="togekiss" pokeType="fly"/>
          </h2>
          <h2 class="moves">
            ▷ <span class="fly">Hyper Voice</span> +
            <span class="ice">Blizzard</span><br/>
          </h2><br/>
          <h2 class="moves">
             <span class="heal">◈ Cure</span> caso tenha levado dano<br/>
          </h2>
          </ExpandableSection
        ><br />

        <!--Driftveil Check-->
        <h2 class="city-title">28- Driftveil</h2>
        <img class="map" alt="Mapa marcando driftveil" src="@/assets/images/routes/Driftveil.png">
        <h2>Entre com<br/><PokeNameImg pokeName="blastoise" pokeType="water"/> e <PokeNameImg pokeName="weezing" pokeType="poison"/></h2><br/>
        <ExpandableSection>
          <template #header>
            <h2>• Vs <PokeNameImg pokeName="sableye" pokeType="dark"/></h2>
          </template>
          <h2 class="moves">
            T1: <span class="water">Water Spout</span> +
            <span class="poison">Explosion</span>
          </h2>
          <h2 class="moves">
            • Lance <PokeNameImg pokeName="togekiss" pokeType="fly"/> e <PokeNameImg pokeName="garchomp" pokeType="dragon"/><br/>
          </h2>
          <h2 class="moves">
            T2+ <span class="fly">Hyper Voice</span>+
            <span class="dragon">Earthquake</span>
          </h2>
          </ExpandableSection
        ><br />
        <ExpandableSection>
          <template #header>
            <h2>• Vs <PokeNameImg pokeName="torterra" pokeType="grass"/></h2>
          </template>
          <h2 class="moves">
            T1+: <span class="water">Water Spout</span> +
            <span class="poison">Assurance</span>
          </h2>
          </ExpandableSection
        ><br />
        <ExpandableSection>
          <template #header>
            <h2>• Vs Outros</h2>
          </template>
          <h2 class="moves">
            T1+: <span class="water">Water Spout</span> +
            <span class="poison">Rain Dance</span>
          </h2>
          </ExpandableSection
        ><br />
        
        <!--Nacrene -->
        <h2 class="city-title">29-  Nacrene (Se tiver 2m 45s, precisa de <span class="dragon">Garchomp</span>, <span class="fire">Typhlosion</span> e <span class="poison">Weezing</span> vivos)</h2>
        <img alt="mapa marcando nacrene" class="map" src="@/assets/images/routes/Nacrene.png">
        <h2>Entrar com<br/><PokeNameImg pokeName="weezing" pokeType="poison"/> e <PokeNameImg pokeName="garchomp" pokeType="dragon"/></h2><br/>
        <ExpandableSection>
          <template #header>
            <h2>• Vs <PokeNameImg pokeName="stantler" pokeType="normal"/></h2>
          </template>
          <h2 class="moves">
            T1: <span class="poison">Explosion</span> +
            <span class="dragon">Troque</span> por <PokeNameImg pokeName="typhlosion" pokeType="fire"/>
          </h2>
          <h2 class="moves">
            • Lance <PokeNameImg pokeName="togekiss" pokeType="fly"/> e <PokeNameImg pokeName="garchomp" pokeType="dragon"/>
          </h2>
          <h2 class="moves">
            T2+: <span class="fly">Hyper Voice</span> +
            <span class="dragon">Earthquake</span>
          </h2>
          </ExpandableSection
        ><br />
        <ExpandableSection>
          <template #header>
            <h2>• Vs Outros</h2>
          </template>
          <h2 class="moves">
            T1: <span class="poison">Explosion</span> +
            <span class="dragon">Sunny day</span>
          </h2>
          <h2 class="moves">
            • Lance <PokeNameImg pokeName="typhlosion" pokeType="fire"/> e <PokeNameImg pokeName="togekiss" pokeType="fly"/>
          </h2>
          <h2 class="moves">
            T2+: <span class="fire">Eruption</span> +
            <span class="fly">Hyper Voice</span>
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