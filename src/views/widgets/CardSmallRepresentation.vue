<template>
  <div class="C-cardPizza card align-items-center text-center py-1 mx-1">
    <div class="cardPizza_circle--s col-sm-12 rounded-circle border"></div>
    <div class="cardPizza_number col-sm-12">#{{ idItem }}</div>
  </div>
</template>

<script>
export default {
  name: "CardSmallRepresentation",
  props: ["idItem"],
};
</script>

<style scoped>
.C-cardPizza {
  width: 3rem;
  border-radius: 0.5rem;
}
.cardPizza_circle--s {
  height: 1.5rem;
  width: 1.5rem;
}
</style>
