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
        <div class="text-center">
          <button
            type="button"
            class="btn btn-sm btn-outline-success rounded-circle"
          >
            +
          </button>
          <button
            type="button"
            class="btn btn-sm btn-outline-danger rounded-circle"
          >
            -
          </button>
          <button
            type="button"
            class="btn btn-sm btn-outline-info rounded-pill"
          >
            A tu gusto!
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardItem",
  props: ["name", "price", "img", "description"],
};
</script>

<style scoped>
.preparation-card_img--option {
  width: 2rem;
}
</style>
