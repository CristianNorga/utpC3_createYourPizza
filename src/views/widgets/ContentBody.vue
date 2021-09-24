<template>
  <section class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12 col-lg-4 mb-2">
          <div class="card row d-flex mx-0">
            <div class="card-title position-absolute">
              <h3 class="position-relative cardPizza_id">#1</h3>
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
                class="
                  cardPizza_circle--l
                  border
                  rounded-circle
                  position-absolute
                "
              ></div>
            </div>

            <div class="text-lg-center px-md-2">
              <h5>Pizza Mediana 4 porciones</h5>
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
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Tomate</td>
                      <td scope="row" class="text-end">5.000</td>
                      <td class="text-end">
                        <button
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
                        ></button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Queso</td>
                      <td scope="row" class="text-end">5.000</td>
                      <td class="text-end">
                        <button
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
                        ></button>
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td scope="row" class="text-end" colspan="3">10.000</td>
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
        </div>

        <div class="col-md-12 col-lg-8">
          <div class="card d-flex row preparation-card mx-0">
            <div
              class="
                btn-group btn-group-lg
                col-sm-12
                preparation-card_options
                p-0
              "
              role="group"
              aria-label="Large button group"
            >
              <button type="button" class="btn btn-success" disabled>
                <div>
                  <img
                    class="preparation-card_img--option"
                    src="../../assets/rolling-pin.svg"
                    alt=""
                  />
                </div>
              </button>
              <button type="button" class="btn btn-success" disabled>
                <img
                  class="preparation-card_img--option"
                  src="../../assets/sauces.svg"
                  alt=""
                />
              </button>
              <button type="button" class="btn btn-outline-success">
                <img
                  class="preparation-card_img--option"
                  src="../../assets/ingredients.svg"
                  alt=""
                />
              </button>
            </div>

            <div class="container-fluid">
              <div class="row">
                <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 my-2">
                  <div class="card">
                    <div class="card-header">
                      <h3 class="card-title d-flex">
                        <img
                          class="preparation-card_img--option me-2"
                          src="../../assets/tomato.svg"
                          alt=""
                        />
                        <span> Tomate </span>
                      </h3>
                    </div>

                    <div class="card-body">
                      <div>
                        <div class="preparation-description">
                          1 adiciona la medida, exquisita descripcion Lorem
                          ipsum dolor sit amet, consectetur adipisicing elit.
                          Ducimus reiciendis.
                        </div>
                        <div class="text-center">$ 5.000</div>
                        <div class="text-center">
                          <button
                            type="button"
                            class="
                              btn btn-sm btn-outline-success
                              rounded-circle
                            "
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
                </div>

                <!-- RELLENO -->
                <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 my-2">
                  <div class="card">
                    <div class="card-header">
                      <h3 class="card-title d-flex">
                        <img
                          class="preparation-card_img--option me-2"
                          src="../../assets/tomato.svg"
                          alt=""
                        />
                        <span> Tomate </span>
                      </h3>
                    </div>

                    <div class="card-body">
                      <div>
                        <div class="preparation-description">
                          1 adiciona la medida, exquisita descripcion Lorem
                          ipsum dolor sit amet, consectetur adipisicing elit.
                          Ducimus reiciendis.
                        </div>
                        <div class="text-center">$ 5.000</div>
                        <div class="text-center">
                          <button
                            type="button"
                            class="
                              btn btn-sm btn-outline-success
                              rounded-circle
                            "
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
                </div>

                <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 my-2">
                  <div class="card">
                    <div class="card-header">
                      <h3 class="card-title d-flex">
                        <img
                          class="preparation-card_img--option me-2"
                          src="../../assets/tomato.svg"
                          alt=""
                        />
                        <span> Tomate </span>
                      </h3>
                    </div>

                    <div class="card-body">
                      <div>
                        <div class="preparation-description">
                          1 adiciona la medida, exquisita descripcion Lorem
                          ipsum dolor sit amet, consectetur adipisicing elit.
                          Ducimus reiciendis.
                        </div>
                        <div class="text-center">$ 5.000</div>
                        <div class="text-center">
                          <button
                            type="button"
                            class="
                              btn btn-sm btn-outline-success
                              rounded-circle
                            "
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
                </div>

                <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 my-2">
                  <div class="card">
                    <div class="card-header">
                      <h3 class="card-title d-flex">
                        <img
                          class="preparation-card_img--option me-2"
                          src="../../assets/tomato.svg"
                          alt=""
                        />
                        <span> Tomate </span>
                      </h3>
                    </div>

                    <div class="card-body">
                      <div>
                        <div class="preparation-description">
                          1 adiciona la medida, exquisita descripcion Lorem
                          ipsum dolor sit amet, consectetur adipisicing elit.
                          Ducimus reiciendis.
                        </div>
                        <div class="text-center">$ 5.000</div>
                        <div class="text-center">
                          <button
                            type="button"
                            class="
                              btn btn-sm btn-outline-success
                              rounded-circle
                            "
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
                </div>

                <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 my-2">
                  <div class="card">
                    <div class="card-header">
                      <h3 class="card-title d-flex">
                        <img
                          class="preparation-card_img--option me-2"
                          src="../../assets/tomato.svg"
                          alt=""
                        />
                        <span> Tomate </span>
                      </h3>
                    </div>

                    <div class="card-body">
                      <div>
                        <div class="preparation-description">
                          1 adiciona la medida, exquisita descripcion Lorem
                          ipsum dolor sit amet, consectetur adipisicing elit.
                          Ducimus reiciendis.
                        </div>
                        <div class="text-center">$ 5.000</div>
                        <div class="text-center">
                          <button
                            type="button"
                            class="
                              btn btn-sm btn-outline-success
                              rounded-circle
                            "
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
                </div>

                <!-- FIN RELLENO -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

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
.content {
  padding: 0 0.5rem;
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
.preparation-card_img--option {
  width: 2rem;
}
</style>
