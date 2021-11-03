<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Inicio</a>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li>
            <a
              v-on:click="travel"
              href="https://vast-reaches-37714.herokuapp.com/"
              class="nav-link"
              data-toggle="dropdown"
              aria-expanded="true"
            >
              <img
                src="../../assets/user.svg"
                class="user-image--small rounded-circle shadow"
                alt="User Image"
              />
              <span class="d-md-inline">Iniciar sesión / registrarse</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    travel: function () {
      window.location.href = "https://vast-reaches-37714.herokuapp.com/";
    },
  },
};
</script>

<style scoped>
footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}
.user-image--small {
  width: 37px;
  border: 3px solid #e1e2e1;
  margin: 0 auto;
  padding: 3px;
}
</style>
