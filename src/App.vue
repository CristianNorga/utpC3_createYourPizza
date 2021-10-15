<template>
  <div id="app">
    <div class="loader" v-bind:class="{ show: this.loader }">
      <img src="./assets/loaderPuff.svg" />
    </div>
    <Nav />
    <!-- <router /> -->
    <CreatePizza v-on:data="changeStatusLoader" />
    <Footer />
  </div>
</template>

<script>
import Nav from "./views/layouts/Nav.vue";
import Footer from "./views/layouts/Footer.vue";
import CreatePizza from "./views/pages/CreatePizza.vue";
// import router from "./routes/index.js";

export default {
  name: "App",
  components: {
    // router,
    CreatePizza,
    Nav,
    Footer,
  },
  data() {
    return {
      loader: true,
    };
  },
  methods: {
    changeStatusLoader: function (state) {
      state;
      this.loader = state;
    },
  },
};
</script>

<style>
#App {
  min-height: 100vh;
}
.loader {
  visibility: hidden;
  background: #f4f6f9;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 3;
  display: flex;
  justify-content: center;
}

.show {
  visibility: visible;
}

.loader > img {
  color: black;
  max-width: 120px;
}
</style>
