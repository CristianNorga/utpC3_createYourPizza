<template>
  <div class="card d-flex row preparation-card mx-0">
    <div
      class="btn-group btn-group-lg col-sm-12 preparation-card_options p-0"
      role="group"
      aria-label="Large button group"
    >
      <button type="button" class="btn btn-success" disabled>
        <div>
          <img
            class="preparation-card_img--option"
            src="../../assets/rolling-pin.svg"
            alt=""
          />
        </div>
      </button>
      <button type="button" class="btn btn-success" disabled>
        <img
          class="preparation-card_img--option"
          src="../../assets/sauces.svg"
          alt=""
        />
      </button>
      <button type="button" class="btn btn-outline-success">
        <img
          class="preparation-card_img--option"
          src="../../assets/ingredients.svg"
          alt=""
        />
      </button>
    </div>

    <div class="container-fluid">
      <div class="row">
        <div
          class="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 my-2"
          v-for="p in ingredientes.condiments"
          v-bind:key="p.id"
        >
          <CardItem
            v-bind:name="p.name"
            v-bind:price="p.price"
            v-bind:img="p.img"
            v-bind:description="p.description"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardItem from "./CardItem.vue";

export default {
  name: "CardIngredients",
  props: ["ingredientes"],
  data() {
    return {
      showPrices: false,
      value: 0,
    };
  },
  components: {
    CardItem,
  },
};
</script>

<style scoped>
.preparation-card_img--option {
  width: 2rem;
}
</style>
