<script setup lang="ts">
import TableItem from '@/components/TableItem.vue'
import { automaticTable, Berry, calculate, Seed, reCalc } from '@/scripts/BerryCalculator'
import Decimal from 'decimal.js'
import { onMounted, ref, toRaw } from 'vue'
import ExpandableSection from '@/components/ExpandableSection.vue'
import TableItemCalc from '@/components/TableItemCalc.vue'

const berryList = ref<Berry[]>([])
const berryCalc = ref<Berry[]>([])

onMounted(async () => {
  const berries = await automaticTable()
  berryList.value = berries
})

var isBerriesCalc = false
const berryName = defineModel<String>('berryName', { default: '' })
const berryValue = defineModel<Decimal>('berryValue', { default: Decimal(0) })

const sweetValue = defineModel<Decimal>('sweetValue', { default: Decimal(0) })
const dryValue = defineModel<Decimal>('dryValue', { default: Decimal(0) })
const spicyValue = defineModel<Decimal>('spicyValue', { default: Decimal(0) })
const sourValue = defineModel<Decimal>('sourValue', { default: Decimal(0) })
const bitterValue = defineModel<Decimal>('bitterValue', { default: Decimal(0) })

const verySweetValue = defineModel<Decimal>('verySweetValue', { default: Decimal(0) })
const veryDryValue = defineModel<Decimal>('veryDryValue', { default: Decimal(0) })
const verySpicyValue = defineModel<Decimal>('verySspicyValue', { default: Decimal(0) })
const verySourValue = defineModel<Decimal>('verySourValue', { default: Decimal(0) })
const veryBitterValue = defineModel<Decimal>('veryBitterValue', { default: Decimal(0) })

function calc() {
  const seeds = [
    new Seed('Plain Spicy', '1030', spicyValue.value),
    new Seed('Plain Dry', '1032', dryValue.value),
    new Seed('Plain Sweet', '1034', sweetValue.value),
    new Seed('Plain Bitter', '1036', bitterValue.value),
    new Seed('Plain Sour', '1038', sourValue.value),

    new Seed('Very Spicy', '1031', verySpicyValue.value),
    new Seed('Very Dry', '1033', veryDryValue.value),
    new Seed('Very Sweet', '1035', verySweetValue.value),
    new Seed('Very Bitter', '1037', veryBitterValue.value),
    new Seed('Very Sour', '1039', verySourValue.value),
  ]
  const berriesCalc = calculate(berryName.value, seeds, berryValue.value)
  berryCalc.value = berriesCalc
  isBerriesCalc = true
}

function update(berry: Berry) {
  berryList.value = berryList.value.map(b => {
    if (b.id === berry.id) {
      return { ...b, value: berry.value }
    }
    return b
  })

  berryList.value = reCalc(berryList.value)
}
</script>

<template>
  <div class="background">
    <ExpandableSection openLabel="▼ Informações adicionais" closeLabel="▲ Informações adicionais">
      <h1 class="title">Funcionamento:</h1>
      <p>
        Informe o valor da berry no mercado assim como das sementes que quer usar, caso não saiba
        qual mistura de sementes é a melhor pode passar o preço de todas que a calculadora irá
        informar.
      </p>
      <br />
      <p>
        Valores não informados são tratados como um alto valor para que seja utilizado os valores
        passados explicitamente.
      </p>
      <br />
      <div class="translate">
        <h1>Tradução:</h1>
        <p>Spicy - Picante</p>
        <p>Sour - Azedo</p>
        <p>Sweet - Doce</p>
        <p>Bitter - Amargo</p>
        <p>Dry - Seco</p>
      </div>
      <br />
      <h1 class="title">Cálculos:</h1>
      <p>Leve em consideração:</p>
      <br />
      <p>
        1- A base para os cálculos levam em consideração uma conta em unova com Milstraton +
        Abundant Shrine, o que totaliza 156 lugares plantaveis.
      </p>
      <p>2- Cada berry tem sua própria média de frutos que gera.</p>
      <p>3- Existem grupos de tempo diferente de crescimento entre as berries.</p>
      <p>4- Cada berry utiliza de combinação de sementes diferentes.</p>
      <p>5- Cada berry tem valor diferente no GTL.</p>
      <br />
      <p>Separando o cálculo por partes teremos:</p>
      <p>1- Cálculo de <span style="font-weight: bold">custo</span> para um slot de plantação:</p>
      <ul>
        <li>Semente 1 (Valor no GTL) + Semente 2 (Valor no GTL) + Semente 3 (Valor no GTL).</li>
      </ul>
      <br />
      <p>
        2- Cálculo de <span style="font-weight: bold">lucro bruto</span> para um slot de plantação:
      </p>
      <ul>
        <li>Média de berries * Berry (Valor no GTL)</li>
      </ul>
      <br />
      <p>
        3- Cálculo de <span style="font-weight: bold">lucro líquido</span> para um slot de
        plantação:
      </p>
      <ul>
        <li>Lucro Bruto - Custo</li>
      </ul>
      <br />
      <p>
        4- Cálculo de <span style="font-weight: bold">lucro líquido para toda a plantação</span>
      </p>
      <ul>
        <li>Lucro líquido * 156</li>
      </ul>
      <p>
        É importante lembrar que berries tem tempos de crescimento diferentes, portanto o cálculo
        segue para padronização de tempo
      </p>
      <br />
      <p>
        5- Cálculo de
        <span style="font-weight: bold">lucro líquido para toda a plantação por hora</span>
      </p>
      <ul>
        <li>Lucro líquido / Tempo de crescimento</li>
      </ul>
      <br />
      <p>
        6- Cálculo de
        <span style="font-weight: bold">lucro líquido para toda a plantação por dia</span>
      </p>
      <ul>
        <li>Lucro líquido por hora * 24</li>
      </ul>
      <br />
      <p>7- Podemos reduzir essas funções para:</p>
      <p>(Valor da berry * Média da colheita - Custo) * 156 / Tempo de crescimento * 24</p>
      <br />
      <p>
        8- No caso de
        <span style="font-weight: bold">lucro líquido para toda a plantação por dia (GTL)</span> devemos remover 5% do valor bruto que é custo da listagem, assim com a função ficando
      </p>
      <p>(Valor da berry * Média da colheita - Custo) * 156 / Tempo de crescimento * 24 * 0.95</p>
      <br />
    </ExpandableSection>
    <br />
    <h1 style="align-self: center">Calculadora</h1>
    <br />
    <div class="form-calc">
      <div class="form-field">
        <p>Berry</p>
        <select class="berry-selection" v-model="berryName">
          <option disabled value="">Selecione uma berry...</option>
          <option value="Aguav Berry">Aguav Berry</option>
          <option value="Apicot Berry">Apicot Berry</option>
          <option value="Aspear Berry">Aspear Berry</option>
          <option value="Babiri Berry">Babiri Berry</option>
          <option value="Belue Berry">Belue Berry</option>
          <option value="Bluk Berry">Bluk Berry</option>
          <option value="Charti Berry">Charti Berry</option>
          <option value="Cheri Berry">Cheri Berry</option>
          <option value="Chesto Berry">Chesto Berry</option>
          <option value="Chilan Berry">Chilan Berry</option>
          <option value="Chople Berry">Chople Berry</option>
          <option value="Colbur Berry">Colbur Berry</option>
          <option value="Cornn Berry">Cornn Berry</option>
          <option value="Custap Berry">Custap Berry</option>
          <option value="Durin Berry">Durin Berry</option>
          <option value="Enigma Berry">Enigma Berry</option>
          <option value="Figy Berry">Figy Berry</option>
          <option value="Ganlon Berry">Ganlon Berry</option>
          <option value="Grepa Berry">Grepa Berry</option>
          <option value="Haban Berry">Haban Berry</option>
          <option value="Hondew Berry">Hondew Berry</option>
          <option value="Iapapa Berry">Iapapa Berry</option>
          <option value="Jaboca Berry">Jaboca Berry</option>
          <option value="Kasib Berry">Kasib Berry</option>
          <option value="Kee Berry">Kee Berry</option>
          <option value="Kelpsy Berry">Kelpsy Berry</option>
          <option value="Lansat Berry">Lansat Berry</option>
          <option value="Leppa Berry">Leppa Berry</option>
          <option value="Liechi Berry">Liechi Berry</option>
          <option value="Lum Berry">Lum Berry</option>
          <option value="Mago Berry">Mago Berry</option>
          <option value="Magost Berry">Magost Berry</option>
          <option value="Maranga Berry">Maranga Berry</option>
          <option value="Micle Berry">Micle Berry</option>
          <option value="Nanab Berry">Nanab Berry</option>
          <option value="Nomel Berry">Nomel Berry</option>
          <option value="Occa Berry">Occa Berry</option>
          <option value="Oran Berry">Oran Berry</option>
          <option value="Pamtre Berry">Pamtre Berry</option>
          <option value="Passho Berry">Passho Berry</option>
          <option value="Payapa Berry">Payapa Berry</option>
          <option value="Pecha Berry">Pecha Berry</option>
          <option value="Persim Berry">Persim Berry</option>
          <option value="Petaya Berry">Petaya Berry</option>
          <option value="Pinap Berry">Pinap Berry</option>
          <option value="Pomeg Berry">Pomeg Berry</option>
          <option value="Qualot Berry">Qualot Berry</option>
          <option value="Rabuta Berry">Rabuta Berry</option>
          <option value="Rawst Berry">Rawst Berry</option>
          <option value="Razz Berry">Razz Berry</option>
          <option value="Rindo Berry">Rindo Berry</option>
          <option value="Roseli Berry">Roseli Berry</option>
          <option value="Rowap Berry">Rowap Berry</option>
          <option value="Salac Berry">Salac Berry</option>
          <option value="Shuca Berry">Shuca Berry</option>
          <option value="Sitrus Berry">Sitrus Berry</option>
          <option value="Spelon Berry">Spelon Berry</option>
          <option value="Starf Berry">Starf Berry</option>
          <option value="Tamato Berry">Tamato Berry</option>
          <option value="Tanga Berry">Tanga Berry</option>
          <option value="Watmel Berry">Watmel Berry</option>
          <option value="Wepear Berry">Wepear Berry</option>
          <option value="Wiki Berry">Wiki Berry</option>
          <option value="Wacan Berry">Wacan Berry</option>
          <option value="Yache Berry">Yache Berry</option>
        </select>
      </div>
      <div class="form-field">
        <p>Valor no market</p>
        <input value="0" type="number" v-model="berryValue" />
      </div>
      <div class="form-field">
        <p>Custo Spicy</p>
        <input value="0" type="number" v-model="spicyValue" />
      </div>
      <div class="form-field">
        <p>Custo Dry</p>
        <input value="0" type="number" v-model="dryValue" />
      </div>
      <div class="form-field">
        <p>Custo Bitter</p>
        <input value="0" type="number" v-model="bitterValue" />
      </div>
      <div class="form-field">
        <p>Custo Sour</p>
        <input value="0" type="number" v-model="sourValue" />
      </div>
      <div class="form-field">
        <p>Custo Sweet</p>
        <input value="0" type="number" v-model="sweetValue" />
      </div>
      <div class="form-field">
        <p>Custo Very Spicy</p>
        <input value="0" type="number" v-model="verySpicyValue" />
      </div>
      <div class="form-field">
        <p>Custo Very Dry</p>
        <input value="0" type="number" v-model="veryDryValue" />
      </div>
      <div class="form-field">
        <p>Custo Very Bitter</p>
        <input value="0" type="number" v-model="veryBitterValue" />
      </div>
      <div class="form-field">
        <p>Custo Very Sour</p>
        <input value="0" type="number" v-model="verySourValue" />
      </div>
      <div class="form-field">
        <p>Custo Very Sweet</p>
        <input value="0" type="number" v-model="verySweetValue" />
      </div>
      <div class="btn-calc" @click="calc()"><p>Calcular</p></div>
    </div>
    <br />
    <div class="table">
      <div v-if="isBerriesCalc" class="table-header-calc">
        <p>Berry</p>
        <p>Valor (GTL)</p>
        <p>Sementes</p>
        <p>Lucro diário (GTL)</p>
        <p>Lucro diário (NPC)</p>
        <p>Horas</p>
      </div>
      <TableItemCalc
        v-if="isBerriesCalc"
        v-for="(berryCalc, index) in berryCalc"
        :key="berryCalc.id"
        :berry="berryCalc"
        :class="index % 2 === 0 ? 'bg-even' : 'bg-odd'"
      />
    </div>
  </div>
  <div class="background">
    <h1 style="align-self: center">Valores automáticos</h1>
    <br />
    <ExpandableSection openLabel="▼ Informações adicionais" closeLabel="▲ Informações adicionais">
      <p>
        Essa tabela automática usa como base os dados fornecidos pela API do Fiereu (creio eu que
        seja dele, caso alguém saiba quem é o criador me avise para dar créditos apropriados). É
        importante saber que esses dados são atualizados em média a cada 20 dias, o que pode fazer o
        valor fica fora da realidade.
      </p>
      <br />
      <p>
        Incentivo o uso da calculadora acima iformando dados in-game, com atenção pois berrys que
        não tenham grande demandas as vezes ficam com preços irrealisticamente altos.
      </p>
    </ExpandableSection>
    <br />
    <div class="table">
      <div class="table-header">
        <p>Berry</p>
        <p>Valor (GTL)</p>
        <p>Quantidade (GTL)</p>
        <p>Sementes</p>
        <!--<p>Lucro total</p>-->
        <p>Lucro diário (GTL)</p>
        <p>Lucro diário (NPC)</p>
        <p>Horas</p>
      </div>
      <TableItem
        @update="update($event)"
        v-for="(berry, index) in berryList"
        :key="berry.id"
        :berry="berry"
        :class="index % 2 === 0 ? 'bg-even' : 'bg-odd'"
      />
    </div>
  </div>
</template>

<style scoped>
@import '@/assets/styles/views/berry-calculator.css';
</style>
