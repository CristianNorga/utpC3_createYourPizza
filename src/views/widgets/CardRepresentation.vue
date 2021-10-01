<template>
  <div class="card row d-flex mx-0">
    <div class="card-title position-absolute">
      <h3 class="position-relative cardPizza_id">#{{ pizzaSelect.id }}</h3>
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
        <span v-if="pizzaSelect.scale == 1">Small 1 porcion</span>
        <span v-else-if="pizzaSelect.scale == 2">Medium 4 porciones</span>
        <span v-else-if="pizzaSelect.scale == 3">Large 6 porciones</span>
        <span v-else>Extra Large 8 porciones</span>

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
              <th class="text-end" scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody v-if="ingredientes.sizes.lenght >= 1">
            <tr v-for="item in pizzaSelect.items" v-bind:key="item.id">
              <th scope="row">{{ item.quanty }}</th>
              <td>{{ ingredientes[item.category][item.idItem].name }}</td>
              <td scope="row" class="text-end">
                {{ ingredientes[item.category][item.idItem].price }}
              </td>
              <td class="text-end">
                <button
                  v-bind:class="item.quanty >= 2 ? 'disabled' : ''"
                  v-bind:disabled="item.quanty >= 2"
                  type="button"
                  class="
                    pizza-summary_button--add
                    btn btn-sm btn-outline-success
                    rounded-circle
                  "
                ></button>

                <button
                  type="button"
                  class="
                    pizza-summary_button--remove
                    btn btn-sm btn-outline-danger
                    rounded-circle
                  "
                  v-bind:class="item.quanty <= 0 ? 'disabled' : ''"
                  v-bind:disabled="item.quanty <= 0"
                ></button>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td scope="row" class="text-end" colspan="3">
                {{ pizzaSelect.totalItems }}
              </td>
              <td scope="row" colspan="1"></td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div class="text-center py-2">
        <button class="btn btn-success">Confirmar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["pizzaSelect", "ingredientes"],
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
