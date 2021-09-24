<template>
  <div class="page-wrapper pb-3">
    <content-header />
    <ContentBody />
  </div>
</template>

<script>
import ContentHeader from "../widgets/ContentHeader.vue";
import ContentBody from "../widgets/ContentBody.vue";

export default {
  name: "CreatePizza",
  components: {
    ContentHeader,
    ContentBody,
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
