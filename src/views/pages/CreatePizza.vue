<template>
  <div class="page-wrapper pb-3">
    <ContentHeader v-bind:pedido="pedido" v-on:getPizza="getPizza" />
    <ContentCreateYourPizza
      v-if="pedido.pizzas[pedido.select] != undefined"
      v-on:dataDos="updateStateContent"
      v-on:dataCheack="UpdateDataCheack"
      v-bind:pizzaSelect="pedido.pizzas[pedido.select]"
      v-on:confirmCheck="confirmCheck"
    />
    <ContentCreateYourPizza
      v-else
      v-on:dataDos="updateStateContent"
      v-on:dataCheack="UpdateDataCheack"
      v-bind:pizzaSelect="undefined"
      v-on:confirmCheck="confirmCheck"
    />
  </div>
</template>

<script>
import ContentHeader from "../widgets/ContentHeader.vue";
import ContentCreateYourPizza from "../widgets/Content-CreateYourPizza.vue";
import runRequest from "../../model/runRequest.js";

export default {
  name: "CreatePizza",
  data() {
    return {
      pedido: {
        quanty: 0,
        confirmed: 0,
        totalValue: 0,
        select: 0,
        pizzas: {},
      },
      dataCreateYourPizza: false,
      dataCheck: true,
    };
  },
  methods: {
    updateStateContent: function (state) {
      this.dataCreateYourPizza = state;
      this.$emit(
        "data",
        this.dataCheck & this.dataCreateYourPizza ? true : false
      );
    },
    UpdateDataCheack: function (data) {
      if (this.pedido.pizzas[data.id] != undefined) {
        this.pedido.pizzas[data.id].scale = data.scale;
        this.pedido.pizzas[data.id].select = data.select;
        this.pedido.pizzas[data.id].confirm = data.confirm;
        this.pedido.pizzas[data.id].totalItems = data.totalItems;
        this.pedido.pizzas[data.id].totalValue = data.totalValue;
        this.pedido.pizzas[data.id].items = data.items;
      } else {
        this.pedido.select = data.id;
        this.pedido.pizzas[data.id] = data;
      }
    },
    confirmCheck: async function () {
      try {
        let data = await runRequest.collection.check("create", this.pedido);
        if (data.acknowledged === true) {
          window.location.reload();
          alert("pedido creado con el id: " + data.id);
        }
      } catch (error) {
        console.log("error: " + error);
      }
    },
    getPizza: async function (id) {
      let data = await runRequest.collection.check("read", id);
      if (data.length >= 1) {
        this.pedido.quanty = data[0].quanty;
        this.pedido.confirmed = data[0].confirmed;
        this.pedido.totalValue = data[0].totalValue;
        this.pedido.select = data[0].select;
        this.pedido.pizzas = data[0].pizzas;
      } else {
        alert("no se encontro ningun resultado");
      }
      console.log(data);
    },
  },
  created() {
    // const data = async () => {
    //   try {
    //     let data = await runRequest.collection.inventory();
    //     this.ingredientes = data;
    //     this.$emit("dataDos", Object.keys(data).length > 0 ? false : true);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // data();
    // this.pedido.pizzas[this.pedido.select] != undefined; ?
  },
  components: {
    ContentHeader,
    ContentCreateYourPizza,
  },
};
</script>

<style scoped>
.page-wrapper {
  background-color: #f4f6f9;
  /* min-height: 80vh; */
  height: 100%;
}
</style>
