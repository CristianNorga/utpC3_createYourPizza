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
        sizes: {
          1: {
            id: 1,
            size: "small",
            portion: 1,
            price: 2000,
            img: require("../../assets/ingredients/size/sizeS.svg"),
            scale: 1,
            description: "",
          },
          2: {
            id: 2,
            size: "medium",
            portion: 1,
            price: 3500,
            img: require("../../assets/ingredients/size/sizeM.svg"),
            scale: 2,
            description: "",
          },
          3: {
            id: 3,
            size: "large",
            portion: 1,
            price: 6000,
            img: require("../../assets/ingredients/size/sizeL.svg"),
            scale: 3,
            description: "",
          },
          4: {
            id: 4,
            size: "extra-large",
            portion: 1,
            price: 8000,
            img: require("../../assets/ingredients/size/sizeXl.svg"),
            scale: 4,
            description: "",
          },
        },
        sauces: {
          1: {
            id: 1,
            quanty: 1000,
            name: "tomato",
            price: 2000,
            img: require("../../assets/ingredients/sauces/salsa-de-tomate.svg"),
            description: "Descripción llamativa",
          },
        },
        condiments: {
          1: {
            id: 1,
            quanty: 1000,
            name: "cheese",
            price: 1200,
            img: require("../../assets/ingredients/condiments/queso.svg"),
            representation: "",
            description: "Rico queso Parmesano hecho en las montañas europeas.",
          },
          2: {
            id: 2,
            quanty: 1000,
            name: "Piña",
            price: 1300,
            img: require("../../assets/ingredients/condiments/pina.svg"),
            representation: "",
            description: "Descripción llamativa",
          },
          3: {
            id: 3,
            quanty: 1000,
            name: "Jamon",
            price: 800,
            img: require("../../assets/ingredients/condiments/jamon.svg"),
            representation: "",
            description: "Descripción llamativa",
          },
        },
      },
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
