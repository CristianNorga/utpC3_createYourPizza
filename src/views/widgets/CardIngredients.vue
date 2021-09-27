<template>
  <div class="card d-flex row preparation-card mx-0">
    <b-tabs fill>
      <b-tab title="sizes" active>
        <template #title>
          <button
            class="btn btn-outline-success"
            type="button"
            style="width: 100%"
          >
            <div>
              <img
                class="preparation-card_img--option"
                src="../../assets/rolling-pin.svg"
                alt=""
              />
            </div>
          </button>
        </template>
        <div class="row">
          <div
            class="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 my-2"
            v-for="s in ingredientes.sizes"
            v-bind:key="s.id"
          >
            <CardItem
              v-bind:name="s.size"
              v-bind:price="s.price"
              v-bind:img="s.img"
              v-bind:description="s.portion + ' porcion(es)'"
            />
          </div>
        </div>
      </b-tab>
      <b-tab title="sauces">
        <template #title>
          <button
            class="btn btn-outline-success"
            type="button"
            style="width: 100%"
          >
            <img
              class="preparation-card_img--option"
              src="../../assets/sauces.svg"
              alt=""
            />
          </button>
        </template>
        <div class="row">
          <div
            class="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 my-2"
            v-for="s2 in ingredientes.sauces"
            v-bind:key="s2.id"
          >
            <CardItem
              v-bind:name="s2.name"
              v-bind:price="s2.price"
              v-bind:img="s2.img"
              v-bind:description="s2.description"
            />
          </div>
        </div>
      </b-tab>
      <b-tab title="condiments">
        <template #title>
          <button
            class="btn btn-outline-success"
            type="button"
            style="width: 100%"
          >
            <img
              class="preparation-card_img--option"
              src="../../assets/ingredients.svg"
              alt=""
            />
          </button>
        </template>
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
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import CardItem from "./CardItem.vue";
import bootstrap from "bootstrap/dist/js/bootstrap.js";
import { BTabs, BTab } from "bootstrap-vue";

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
    BTabs,
    BTab,
  },
  directives: { "b-tabs": BTabs, "b-tab": BTab },
};

var triggerTabList = [].slice.call(document.querySelectorAll("#myTab button"));
triggerTabList.forEach(function (triggerEl) {
  var tabTrigger = new bootstrap.Tab(triggerEl);

  triggerEl.addEventListener("click", function (event) {
    event.preventDefault();
    tabTrigger.show();
  });
});
</script>

<style scoped>
.preparation-card_img--option {
  width: 2rem;
}
</style>
