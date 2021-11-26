<template>
  <div>
    <table-component :assets="assets" />
  </div>
</template>
<script>
import api from "@/api";
import TableComponent from "@/components/TableComponent";
export default {
  name: "HomeComponent",
  components: { TableComponent },
  data() {
    return {
      assets: [],
    };
  },
  created() {
    //con el parametro que recibo lo guardo en el array de assets de home component
    api.getAssets().then((assets) => (this.assets = assets));
  },
};
</script>
