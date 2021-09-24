<template>
  <section class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12 col-lg-4 mb-2">
          <CardRepresentation />
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

export default {
  name: "ContentBody",
  data() {
    return {
      pedido: {
        cantidad: 0,
        valorTotal: 0,
        items: [],
      },
      ingredientes: {
        sizes: [
          {
            id: 1,
            size: "small",
            portion: 1,
            price: 2000,
            img: "",
            scale: 1,
            description: "",
          },
          {
            id: 2,
            size: "medium",
            portion: 1,
            price: 3500,
            img: "",
            scale: 2,
            description: "",
          },
          {
            id: 3,
            size: "large",
            portion: 1,
            price: 6000,
            img: "",
            scale: 3,
            description: "",
          },
          {
            id: 4,
            size: "extra-large",
            portion: 1,
            price: 8000,
            img: "",
            scale: 4,
            description: "",
          },
        ],
        sauces: [
          {
            id: 1,
            name: "tomato",
            price: 2000,
            img: require("../../assets/ingredients/sauces/salsa-de-tomate.svg"),
            description: "Descripción llamativa",
          },
        ],
        condiments: [
          {
            id: 1,
            name: "cheese",
            price: 1200,
            img: require("../../assets/ingredients/condiments/queso.svg"),
            representation: "",
            description: "Rico queso Parmesano hecho en las montañas europeas.",
          },
          {
            id: 2,
            name: "pineapple",
            price: 1300,
            img: require("../../assets/ingredients/condiments/pina.svg"),
            representation: "",
            description: "Descripción llamativa",
          },
          {
            id: 3,
            name: "jamon",
            price: 800,
            img: require("../../assets/ingredients/condiments/jamon.svg"),
            representation: "",
            description: "Descripción llamativa",
          },
        ],
      },
    };
  },
  components: {
    CardIngredients,
    CardRepresentation,
  },
};
</script>

<style scoped>
.content {
  padding: 0 0.5rem;
}
</style>
