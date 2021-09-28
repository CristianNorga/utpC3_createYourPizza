<template>
  <div id="app">
    <Nav />
    <CreatePizza />
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="LOLA FABIOLA to Your Vue.js App" /> -->
    <Footer />
  </div>
</template>

<script>
import Nav from "./views/layouts/Nav.vue";
import Footer from "./views/layouts/Footer.vue";
import CreatePizza from "./views/pages/CreatePizza.vue";

export default {
  name: "App",
  components: {
    CreatePizza,
    Nav,
    Footer,
  },
};
</script>

<style>
#App {
  min-height: 100vh;
}
</style>
