<template>
  <main>
    <header-component />
    <router-view />
  </main>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent";
export default {
  name: "App",
  components: { HeaderComponent },
};
</script>
