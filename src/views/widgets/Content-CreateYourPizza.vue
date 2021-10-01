<template>
  <section class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12 col-lg-4 mb-2">
          <CardRepresentation
            v-bind:pizzaSelect="pizzaSelect"
            v-bind:ingredientes="ingredientes"
          />
        </div>
        <div class="col-md-12 col-lg-8">
          <CardIngredients v-bind:ingredientes="ingredientes" />
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
      data: false,
    };
  },
  components: {
    CardIngredients,
    CardRepresentation,
  },
  created() {
    const data = async () => {
      try {
        let data = await runRequest.collection.inventory();
        console.log(data);
        this.ingredientes = data;
        this.$emit("dataDos", data.lenght > 0 ? true : false);
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
