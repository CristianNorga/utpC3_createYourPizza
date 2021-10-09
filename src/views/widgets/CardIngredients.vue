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
              v-bind:idItem="s._id"
              v-bind:name="s.type"
              v-bind:price="s.precio.$numberDecimal"
              v-bind:img="s.img"
              v-bind:max="1"
              v-bind:description="s.descripcion"
              v-on:itemSelect="changeSelectedSonSize"
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
              v-bind:idItem="s2._id"
              v-bind:name="s2.type"
              v-bind:price="s2.precio"
              v-bind:img="s2.img"
              v-bind:max="1"
              v-on:itemSelect="changeSelectedSonSauce"
              v-bind:description="s2.descripcion"
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
              v-bind:idItem="p._id"
              v-bind:name="p.type"
              v-bind:price="p.precio.$numberDecimal"
              v-bind:img="p.img"
              v-bind:max="2"
              v-bind:description="p.descripcion"
              v-on:itemSelect="changeSelectedSonCondiment"
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
  props: ["ingredientes", "pizzaSelect", "consulted"],
  data() {
    return {
      showPrices: false,
      value: 0,
      selectedSon: false,
      size: "",
      step: 1,
      pizza: {
        id: 0,
        scale: 0,
        select: true,
        confirm: false,
        totalItems: 0,
        totalValue: 0,
        items: {},
      },
    };
  },
  methods: {
    changeSelectedSonSize: function (bolean, _id) {
      this.selectedSon = !this.selectedSon;
      this.selectedSon === true ? (this.step = 2) : (this.step = 1);
      // console.log("ChangeSelectedSon: " + this.selectedSon);
      if (bolean) {
        // let size = this.ingredientes.sizes[_id];
        switch (this.ingredientes.sizes[_id].sigla) {
          case "S":
            this.pizza.scale = 1;
            break;
          case "M":
            this.pizza.scale = 2;
            break;
          case "L":
            this.pizza.scale = 3;
            break;
          case "XL":
            this.pizza.scale = 4;
            break;

          default:
            break;
        }
        this.size = _id;
        this.pizza.totalValue += parseInt(
          this.ingredientes.sizes[_id].precio.$numberDecimal
        );
        this.sendData();
      } else {
        this.pizza.totalValue -= parseInt(
          this.ingredientes.sizes[this.size].precio.$numberDecimal
        );
        this.sendData();
      }
    },
    changeSelectedSonSauce: function (bolean, _id) {
      bolean === true ? (this.step = 3) : (this.step = 2);
      if (bolean) {
        let object = {
          id: 0,
          category: "",
          idItem: 0,
          quanty: 0,
        };
        // let size = this.ingredientes.sizes[_id];
        this.pizza.totalItems += 1;
        this.pizza.totalValue += 1000;

        object.id = uuid();
        object.category = "sauces";
        object.idItem = _id;
        object.quanty = 1;

        this.pizza.items[_id] = object;
        this.sendData();
      } else {
        this.pizza.totalValue -= 1000;
        this.pizza.totalItems -= 1;
        delete this.pizza.items[_id];
        this.sendData();
      }
    },
    changeSelectedSonCondiment: function (mode, _id) {
      // console.log("ChangeSelectedSon: " + this.selectedSon);

      switch (mode) {
        case "-":
          this.pizza.totalValue -= parseInt(
            this.ingredientes.condiments[_id].precio.$numberDecimal
          );
          this.pizza.totalItems -= 1;
          if (this.pizza.items[_id].quanty == 2) {
            this.pizza.items[_id].quanty = 1;
            this.sendData();
          } else {
            delete this.pizza.items[_id];
          }
          break;
        case "+":
          this.pizza.totalItems += 1;
          this.pizza.totalValue += parseInt(
            this.ingredientes.condiments[_id].precio.$numberDecimal
          );

          if (this.pizza.items[_id] == undefined) {
            let object = {
              id: 0,
              category: "",
              idItem: 0,
              quanty: 0,
            };

            object.id = uuid();
            object.category = "condiments";
            object.idItem = _id;
            object.quanty = 1;

            this.pizza.items[_id] = object;
            this.sendData();
          } else {
            this.pizza.items[_id].quanty = 2;
            this.sendData();
          }
          break;

        default:
          break;
      }
    },
    sendData: function () {
      // console.log(this.pizza);
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
  watch: {
    // cada vez que la pregunta cambie, esta función será ejecutada
    consulted: function () {
      console.log("consulted: " + this.consulted);
      if (this.consulted == true) {
        this.step = 3;
        console.log(this.pizzaSelect);
        this.pizza.id = this.pizzaSelect.id;
        this.pizza.scale = this.pizzaSelect.scale;
        this.pizza.select = this.pizzaSelect.select;
        this.pizza.confirm = this.pizzaSelect.confirm;
        this.pizza.totalItems = this.pizzaSelect.totalItems;
        this.pizza.totalValue = this.pizzaSelect.totalValue;
        this.pizza.items = this.pizzaSelect.items;
        this.$emit("queryLoaded");
      }
    },
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
