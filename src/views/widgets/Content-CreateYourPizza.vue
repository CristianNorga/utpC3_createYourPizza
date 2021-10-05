<template>
  <section class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12 col-lg-4 mb-2">
          <CardRepresentation
            v-if="pizzaSelect != undefined"
            v-bind:pizzaSelect="pizzaSelect"
            v-bind:ingredientes="ingredientes"
          />
          <div v-else class="card">
            <div class="card-title text-center">
              <h3 style="padding-top: 5px">
                Aun no has creado ninguna pizza :(
              </h3>
            </div>
            <div
              style="
                width: 100%;
                height: 0;
                padding-bottom: 100%;
                position: relative;
              "
            >
              <iframe
                src="https://giphy.com/embed/26ufaAfqiUDlOXZQc"
                width="100%"
                height="100%"
                style="position: absolute"
                frameBorder="0"
                class="giphy-embed"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
        <div class="col-md-12 col-lg-8">
          <CardIngredients
            v-bind:ingredientes="ingredientes"
            v-on:sendDataCheckIntermediary="intermediateDataCheck"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CardIngredients from "./CardIngredients.vue";
import CardRepresentation from "./CardRepresentation.vue";
import runRequest from "../../model/runRequest";

export default {
  name: "ContentBody",
  props: ["pizzaSelect"],
  data() {
    return {
      ingredientes: {
        sizes: {},
        sauces: {},
        condiments: {},
      },
      pizza: {},
      data: false,
    };
  },
  components: {
    CardIngredients,
    CardRepresentation,
  },
  methods: {
    intermediateDataCheck: function (data) {
      this.$emit("dataCheack", data);
    },
  },
  created() {
    const data = async () => {
      try {
        let data = await runRequest.collection.inventory();
        console.log(data);
        this.ingredientes = data;
        this.$emit("dataDos", Object.keys(data).length > 0 ? false : true);
      } catch (error) {
        console.log(error);
      }
    };
    data();
  },
};
</script>

<style scoped>
.content {
  padding: 0 0.5rem;
}
</style>
