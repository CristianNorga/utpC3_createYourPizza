<template>
  <div class="page-wrapper pb-3">
    <content-header v-bind:pedido="pedido" />
    <ContentCreateYourPizza
      v-on:dataDos="updateStateContent"
      v-bind:pizzaSelect="pedido.pizzas[0]"
    />
  </div>
</template>

<script>
import ContentHeader from "../widgets/ContentHeader.vue";
import ContentCreateYourPizza from "../widgets/Content-CreateYourPizza.vue";

export default {
  name: "CreatePizza",
  data() {
    return {
      pedido: {
        quanty: 1,
        confirmed: 0,
        totalValue: 0,
        pizzas: [
          {
            id: 1,
            scale: 4,
            select: true,
            confirm: false,
            totalItems: 5000,
            items: [
              {
                id: 1,
                category: "condiments",
                idItem: "uid1",
                quanty: 1,
              },
              {
                id: 2,
                category: "condiments",
                idItem: "uid2",
                quanty: 2,
              },
            ],
          },
        ],
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
