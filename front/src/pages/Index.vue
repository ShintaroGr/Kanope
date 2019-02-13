<template>
  <q-page class="flex flex-center">
    <div class="row">
      <div class="col-12 q-pa-md">
        <q-markup-table>
          <thead>
          <tr>
            <th class="text-left">Surface</th>
            <th class="text-right">Moyenne de surface d’ensoleillement</th>
            <th class="text-right">Somme des surfaces d’ensoleillement</th>
            <th class="text-right">Nombre de batiments concernés</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td class="text-left">Moins de 700 Kwh/m²/an</td>
            <td class="text-right">{{table.less_than_700.average.toFixed(2)}}</td>
            <td class="text-right">{{table.less_than_700.sum}}</td>
            <td class="text-right">{{table.less_than_700.count}}</td>
          </tr>
          <tr>
            <td class="text-left">De 700 à 800 Kwh/m²/an</td>
            <td class="text-right">{{table.between_700_800.average.toFixed(2)}}</td>
            <td class="text-right">{{table.between_700_800.sum}}</td>
            <td class="text-right">{{table.between_700_800.count}}</td>
          </tr>
          <tr>
            <td class="text-left">De 800 à 900 Kwh/m²/an</td>
            <td class="text-right">{{table.between_800_900.average.toFixed(2)}}</td>
            <td class="text-right">{{table.between_800_900.sum}}</td>
            <td class="text-right">{{table.between_800_900.count}}</td>
          </tr>
          <tr>
            <td class="text-left">De 900 à 1000 Kwh/m²/an</td>
            <td class="text-right">{{table.between_900_1000.average.toFixed(2)}}</td>
            <td class="text-right">{{table.between_900_1000.sum}}</td>
            <td class="text-right">{{table.between_900_1000.count}}</td>
          </tr>
          <tr>
            <td class="text-left">Plus de 1000 Kwh/m²/an</td>
            <td class="text-right">{{table.more_than_1000.average.toFixed(2)}}</td>
            <td class="text-right">{{table.more_than_1000.sum}}</td>
            <td class="text-right">{{table.more_than_1000.count}}</td>
          </tr>
          </tbody>
        </q-markup-table>
      </div>
      <div class="col-12 q-pa-md">
        <q-card>
          <q-card-section class="text-h5">
            Moyenne de surface d’ensoleillement (m²)
          </q-card-section>
          <q-separator></q-separator>
          <q-card-section>
            <histogram
              :data="[table.less_than_700.average.toFixed(2), table.between_700_800.average.toFixed(2), table.between_800_900.average.toFixed(2), table.between_900_1000.average.toFixed(2), table.more_than_1000.average.toFixed(2)]"></histogram>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-12 q-pa-md">
        <q-card>
          <q-card-section class="text-h5">
            Somme des surfaces d’ensoleillement (m²)
          </q-card-section>
          <q-separator></q-separator>
          <q-card-section>
            <histogram
              :data="[table.less_than_700.sum, table.between_700_800.sum, table.between_800_900.sum, table.between_900_1000.sum, table.more_than_1000.sum]"></histogram>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-12 q-pa-md">
        <q-card>
          <q-card-section class="text-h5">
            Nombre de batiments concernés
          </q-card-section>
          <q-separator></q-separator>
          <q-card-section>
            <histogram
              :data="[table.less_than_700.count, table.between_700_800.count, table.between_800_900.count, table.between_900_1000.count, table.more_than_1000.count]"></histogram>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
import Histogram from '../components/Histogram'

export default {
  name: 'PageIndex',
  components: { Histogram },
  data () {
    return {
      table: {
        less_than_700: {
          average: 0,
          sum: 0,
          count: 0
        },
        between_700_800: {
          average: 0,
          sum: 0,
          count: 0
        },
        between_800_900: {
          average: 0,
          sum: 0,
          count: 0
        },
        between_900_1000: {
          average: 0,
          sum: 0,
          count: 0
        },
        more_than_1000: {
          average: 0,
          sum: 0,
          count: 0
        }
      }
    }
  },
  mounted () {
    this.$axios.get('http://shintaro.ovh:5000/buildings')
      .then((response) => {
        this.table = response.data
      })
  }
}
</script>
