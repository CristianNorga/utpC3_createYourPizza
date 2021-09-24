<template>
  <section class="ML-content-header">
    <div class="L-menuView container-fluid">
      <div class="row mb-2">
        <div class="L-betweenPizzas col-sm-6 d-flex float-row">
          <div
            class="C-cardPizza card align-items-center text-center py-1 mx-1"
          >
            <div
              class="cardPizza_circle--s col-sm-12 rounded-circle border"
            ></div>
            <div class="cardPizza_number col-sm-12">#1</div>
          </div>
          <button class="C-boton btn btn-outline-secondary mx-1">
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

<style scoped>
.ML-content-header {
  padding: 15px 0.5rem;
}
.C-cardPizza {
  width: 3rem;
  border-radius: 0.5rem;
}
.cardPizza_circle--s {
  height: 1.5rem;
  width: 1.5rem;
}
</style>
