<template>
  <section class="ML-content-header">
    <div class="L-menuView container-fluid">
      <div class="row mb-2">
        <div class="L-betweenPizzas col-sm-6 d-flex float-row">
          <!-- <CardSmallRepresentation
            v-for="item in pedido.pizzas"
            v-bind:key="item.id"
            v-bind:idItem="item.id"
          />
          <button
            v-if="pedido.quanty > 3"
            class="C-boton btn btn-outline-secondary mx-1"
          >
            Ver mas
          </button> -->
          <div class="mb-3">
            <input
              v-model="id"
              type="text"
              class="form-control"
              placeholder="Buscar: 6as54d68af5a..."
            />
          </div>
          <button
            v-on:click="getPizza"
            class="btn-query btn btn-outline-secondary mx-1"
          >
            Consultar
          </button>
          <button
            v-on:click="updatePizza"
            class="btn-query btn btn-outline-info mx-1"
          >
            Actualizar
          </button>
          <button
            v-on:click="deletePizza"
            class="btn-query btn btn-outline-danger mx-1"
          >
            Eliminar
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
// import CardSmallRepresentation from "./CardSmallRepresentation.vue";

export default {
  name: "ContentHeader",
  props: ["pedido"],
  data() {
    return {
      id: "",
    };
  },
  methods: {
    getPizza: function () {
      if (this.id) {
        this.$emit("getPizza", this.id);
      } else {
        alert("porfavor escriba un id valido");
      }
    },
    updatePizza: function () {
      this.$emit("updatePizza");
    },
    deletePizza: function () {
      this.$emit("deletePizza", this.id);
    },
  },
  components: {
    // CardSmallRepresentation,
  },
};
</script>

<style scoped>
.btn-query {
  max-height: 38px;
}
.ML-content-header {
  padding: 15px 0.5rem;
}
</style>
