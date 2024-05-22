<script>
import HeaderApp from "@/components/view/Header.vue";
import BodyApp from "@/components/view/Body.vue";
import FooterApp from "@/components/view/Footer.vue";
export default {
  components:{HeaderApp,BodyApp,FooterApp}
}
</script>

<template>
  <v-app>
  <header-app></header-app>
  <body-app ></body-app>
  <footer-app></footer-app>
  </v-app>
</template>

<style scoped>

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
