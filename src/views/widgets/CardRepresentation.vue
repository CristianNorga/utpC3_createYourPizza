<template>
  <div class="card row d-flex mx-0">
    <div class="card-title position-absolute">
      <h3 class="position-relative cardPizza_id">
        <span v-if="pizzaSelect == undefined"># </span>
        <span v-else># 1</span>
        <!-- <span v-else>#{{ pizzaSelect.id }}</span> -->
      </h3>
    </div>
    <div
      class="
        cardPizza_circle--xl
        border
        rounded-circle
        position-relative
        align-self-center
        my-4
      "
    >
      <div
        class="cardPizza_circle--l border rounded-circle position-absolute"
      ></div>
    </div>
    <!-- pizzaSelect.scale -->
    <div class="text-lg-center px-md-2">
      <h5>
        Pizza
        <span v-if="pizza.scale == 1">Personal 15cm</span>
        <span v-else-if="pizza.scale == 2">Mediana 30 cm</span>
        <span v-else-if="pizza.scale == 3">Grande 35 cm</span>
        <span v-else>Extra Grande 40 cm</span>

        <!-- {{ ingredientes.sizes  }} -->
      </h5>
    </div>

    <div class="pizza-sumamry px-2 my-1">
      <!-- item ejemplo 1 -->
      <div class="pizza-summary_item d-flex px-0 px-lg-3 px-xl-5">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Qty</th>
              <th scope="col">Nombre</th>
              <th class="text-end" scope="col">Valor</th>
              <!-- <th class="text-end" scope="col">Acciones</th> -->
            </tr>
          </thead>
          <tbody v-if="Object.keys(pizzaSelect.items).length >= 1">
            <tr v-for="item in pizzaSelect.items" v-bind:key="item.id">
              <th scope="row">{{ item.quanty }}</th>
              <td>
                {{ ingredientes[item.category][item.idItem].type }}
              </td>
              <td scope="row" class="text-end" v-if="item.category == 'sauces'">
                {{ ingredientes[item.category][item.idItem].precio }}
              </td>
              <td scope="row" class="text-end" v-else>
                {{
                  ingredientes[item.category][item.idItem].precio.$numberDecimal
                }}
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td scope="row" colspan="1">
                {{ pizzaSelect.totalItems }}
              </td>
              <td class="text-end" scope="row" colspan="2">
                {{ pizzaSelect.totalValue }}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div class="text-center py-2">
        <button v-on:click="confirmCheck" class="btn btn-success">
          Confirmar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["pizzaSelect", "ingredientes"],
  data() {
    return {
      boleanItems: false,
      pizza: {},
    };
  },
  methods: {
    confirmCheck: function () {
      this.$emit("confirmCheck");
    },
  },
  created() {
    this.pizza = this.pizzaSelect;
  },
};
</script>

<style scoped>
.cardPizza_circle--xl {
  height: 8.5rem;
  width: 8.5rem;
  background: #f8ffbb;
}
.cardPizza_circle--l {
  height: 7.5rem;
  width: 7.5rem;
  background: #853636;
  top: 5%;
  left: 5%;
}
.cardPizza_id {
  top: 1rem;
  left: 1rem;
}
@media (max-width: 768px) {
  .cardPizza_id {
    top: 0rem;
    left: 0rem;
  }
}
.pizza-summary_divisor {
  border-top: 1px solid #a9a9a9;
}
.pizza-summary_button--add::after {
  content: "+";
}
.pizza-summary_button--remove::after {
  content: "-";
}
</style>
