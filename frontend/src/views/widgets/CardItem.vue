<template>
  <div class="card">
    <div class="card-header">
      <h3 class="card-title d-flex">
        <img
          class="preparation-card_img--option me-2"
          v-bind:src="img"
          alt=""
        />
        <span> {{ name }} </span>
      </h3>
    </div>

    <div class="card-body">
      <div>
        <div class="preparation-description">
          {{ description }}
        </div>
        <div class="text-center">$ {{ price }}</div>
        <div class="text-center" v-if="this.max > 1">
          <button
            type="button"
            class="btn btn-sm btn-outline-success rounded-circle"
            v-bind:class="quanty >= 2 ? 'disabled' : ''"
            v-bind:disabled="quanty >= 2"
            v-on:click="addToQuanty"
          >
            +
          </button>
          <button
            type="button"
            class="btn btn-sm btn-outline-danger rounded-circle"
            v-bind:class="quanty <= 0 ? 'disabled' : ''"
            v-bind:disabled="quanty <= 0"
            v-on:click="subtractToQuanty"
          >
            -
          </button>
          <!-- <button
            type="button"
            class="btn btn-sm btn-outline-info rounded-pill"
          >
            A tu gusto!
          </button> -->
        </div>
        <div class="text-center" v-else>
          <button
            type="button"
            class="btn btn-sm btn-outline-success"
            v-bind:disabled="disabled"
            v-on:click="changeSelect"
          >
            <span v-if="this.select == false"> Agregar </span>
            <span v-else> Quitar </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardItem",
  props: [
    "name",
    "price",
    "img",
    "description",
    "max",
    "broSelected",
    "idItem",
  ],
  data() {
    return {
      select: false,
      quanty: 0,
      disabled: false,
    };
  },
  methods: {
    addToQuanty: function () {
      this.quanty += 1;
    },
    subtractToQuanty: function () {
      this.quanty += -1;
    },
    changeSelect: function () {
      this.select = !this.select;
      this.$emit("itemSelect", this.select, this.idItem);
    },
    changeDisabled: function () {
      if (this.broSelected) {
        if (this.select) {
          this.disabled = false;
        } else {
          this.disabled = true;
        }
      } else {
        this.disabled = false;
      }
    },
  },
  watch: {
    // cada vez que la pregunta cambie, esta función será ejecutada
    broSelected: function () {
      // console.log("watch");
      // console.log("broSelected: " + this.broSelected);
      this.changeDisabled();
    },
  },
  // updated() {

  // },
};
</script>

<style scoped>
.preparation-card_img--option {
  width: 2rem;
}
</style>
