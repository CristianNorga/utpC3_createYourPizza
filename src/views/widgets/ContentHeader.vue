<template>
  <section class="ML-content-header">
    <div class="L-menuView container-fluid">
      <div class="row mb-2">
        <div class="L-betweenPizzas col-sm-6 d-flex float-row">
          <CardSmallRepresentation
            v-for="item in pedido.pizzas"
            v-bind:key="item.id"
            v-bind:idItem="item.id"
          />
          <button
            v-if="pedido.quanty > 3"
            class="C-boton btn btn-outline-secondary mx-1"
          >
            Ver mas
          </button>
        </div>
        <div class="C-breadCrumb col-sm-6">
          <ol class="breadcrumb float-sm-end">
            <li class="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li class="breadcrumb-item">
              <a href="#">Pedido</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">create</li>
          </ol>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CardSmallRepresentation from "./CardSmallRepresentation.vue";

export default {
  name: "ContentHeader",
  props: ["pedido"],
  components: {
    CardSmallRepresentation,
  },
};
</script>

<style scoped>
.ML-content-header {
  padding: 15px 0.5rem;
}
</style>
