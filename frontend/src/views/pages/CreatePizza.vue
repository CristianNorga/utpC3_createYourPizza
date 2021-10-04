<template>
  <div class="page-wrapper pb-3">
    <content-header v-bind:pedido="pedido" />
    <ContentCreateYourPizza
      v-if="pedido.pizzas[pedido.select] != undefined"
      v-on:dataDos="updateStateContent"
      v-on:dataCheack="UpdateDataCheack"
      v-bind:pizzaSelect="pedido.pizzas[pedido.select]"
    />
    <ContentCreateYourPizza
      v-else
      v-on:dataDos="updateStateContent"
      v-on:dataCheack="UpdateDataCheack"
      v-bind:pizzaSelect="undefined"
    />
  </div>
</template>

<script>
import ContentHeader from "../widgets/ContentHeader.vue";
import ContentCreateYourPizza from "../widgets/Content-CreateYourPizza.vue";

// {
//             id: 1,
//             scale: 4,
//             select: true,
//             confirm: false,
//             totalItems: 5000,
//             items: [
//               {
//                 id: 1,
//                 category: "condiments",
//                 idItem: "uid1",
//                 quanty: 1,
//               },
//               {
//                 id: 2,
//                 category: "condiments",
//                 idItem: "uid2",
//                 quanty: 2,
//               },
//             ],
//           },

export default {
  name: "CreatePizza",
  data() {
    return {
      pedido: {
        quanty: 0,
        confirmed: 0,
        totalValue: 0,
        select: 0,
        pizzas: [],
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
      this.pedido.pizzas.push(data);
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
