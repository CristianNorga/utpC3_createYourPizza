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
        <div class="row" v-if="Object.keys(ingredientes.sizes).length >= 1">
          <div
            class="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 my-2"
            v-for="s in ingredientes.sizes"
            v-bind:key="s.id"
          >
            <CardItem
              v-bind:idItem="s.id"
              v-bind:name="s.size"
              v-bind:price="s.price"
              v-bind:img="s.img"
              v-bind:max="1"
              v-bind:description="s.portion + ' porcion(es)'"
              v-on:itemSelect="ChangeSelectedSonSize"
              v-bind:broSelected="selectedSon"
            />
          </div>
        </div>
      </b-tab>
      <b-tab title="sauces" v-bind:disabled="step == 1">
        <template #title>
          <button
            class="btn btn-outline-success"
            type="button"
            style="width: 100%"
            v-bind:disabled="step == 1"
          >
            <img
              class="preparation-card_img--option"
              src="../../assets/sauces.svg"
              alt=""
            />
          </button>
        </template>
        <div class="row" v-if="Object.keys(ingredientes.sauces).length >= 1">
          <div
            class="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 my-2"
            v-for="s2 in ingredientes.sauces"
            v-bind:key="s2.id"
          >
            <CardItem
              v-bind:idItem="s2.id"
              v-bind:name="s2.name"
              v-bind:price="s2.price"
              v-bind:img="s2.img"
              v-bind:max="1"
              v-on:itemSelect="ChangeSelectedSonSauce"
              v-bind:description="s2.description"
            />
          </div>
        </div>
      </b-tab>
      <b-tab title="condiments" v-bind:disabled="step == 1 || step == 2">
        <template #title>
          <button
            class="btn btn-outline-success"
            type="button"
            style="width: 100%"
            v-bind:disabled="step == 1 || step == 2"
          >
            <img
              class="preparation-card_img--option"
              src="../../assets/ingredients.svg"
              alt=""
            />
          </button>
        </template>
        <div
          class="row"
          v-if="Object.keys(ingredientes.condiments).length >= 1"
        >
          <div
            class="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 my-2"
            v-for="p in ingredientes.condiments"
            v-bind:key="p.id"
          >
            <CardItem
              v-bind:idItem="p.id"
              v-bind:name="p.name"
              v-bind:price="p.price"
              v-bind:img="p.img"
              v-bind:max="2"
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
import { v1 as uuid } from "uuid";

export default {
  name: "CardIngredients",
  props: ["ingredientes"],
  data() {
    return {
      showPrices: false,
      value: 0,
      selectedSon: false,
      step: 1,
      pizza: {
        id: 0,
        scale: 0,
        select: true,
        confirm: false,
        totalItems: 0,
        items: [],
      },
    };
  },
  methods: {
    ChangeSelectedSonSauce: function (bolean) {
      bolean === true ? (this.step = 3) : (this.step = 2);
    },
    ChangeSelectedSonSize: function (bolean, idItem) {
      this.selectedSon = !this.selectedSon;
      this.selectedSon === true ? (this.step = 2) : (this.step = 1);
      // console.log("ChangeSelectedSon: " + this.selectedSon);
      if (bolean) {
        let object = {
          id: 0,
          category: "",
          idItem: 0,
          quanty: 0,
        };
        let size = this.ingredientes.sizes[idItem];

        this.pizza.scale = size.scale;
        this.totalItems += 1;

        object.id = uuid();
        object.category = "sizes";
        object.idItem = idItem;
        object.quanty = 1;

        this.pizza.items.push(object);
        console.log(this.pizza);
        this.sendData();
      }
    },
    sendData: function () {
      this.$emit("sendDataCheckIntermediary", this.pizza);
    },
  },
  components: {
    CardItem,
    BTabs,
    BTab,
  },
  directives: { "b-tabs": BTabs, "b-tab": BTab },
  created() {
    this.pizza.id = uuid();
  },
};

var triggerTabList = [].slice.call(document.querySelectorAll("#myTab button"));
triggerTabList.forEach(function (triggerEl) {
  var tabTrigger = new bootstrap.Tab(triggerEl);

  triggerEl.addEventListener("click", function (event) {
    event.preventDefault();
    tabTrigger.show();
  });
});

// if (Object.keys(data).length > 0) {
//         this.totalValue = 0;

//         this.pedido.pizzas.push(data);
//         this.quanty = this.pedido.pizzas.length;
//         // for
//       }
</script>

<style scoped>
.preparation-card_img--option {
  width: 2rem;
}
</style>
