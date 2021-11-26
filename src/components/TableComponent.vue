<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-10 table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th></th>
              <th scope="col">Rank</th>
              <th scope="col">Symbol</th>
              <th scope="col">Name</th>
              <th scope="col">Cap. de Mercado</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="a in assets" :key="a.id">
              <td>
                <img
                  :src="`https://static.coincap.io/assets/icons/${a.symbol.toLowerCase()}@2x.png`"
                />
              </td>
              <td>{{ a.rank }}</td>
              <td>{{ a.symbol }}</td>
              <td>{{ a.name }}</td>
              <td>{{ a.marketCapUsd | dollarFilter }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TableComponent",
  props: {
    assets: {
      type: Array,
      //para valores default se define una funcion que devuelve un array
      default: () => [],
    },
  },
};
</script>
