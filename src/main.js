import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

new Vue({
    vuetify,
    render: h => h(App)
}).$mount('#app')
document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", register);
window.addEventListener("resize", anchoPage);

//Declarando variables
var form_login = document.querySelector(".form__login");
var form_register = document.querySelector(".form__register");
var cont_l_r = document.querySelector(".cont__l-r");
var caja_atras_login = document.querySelector(".caja__atras-login");
var caja_atras_register = document.querySelector(".caja__atras-register");

//FUNCIONES

function anchoPage() {

    if (window.innerWidth > 850) {
        caja_atras_register.style.display = "block";
        caja_atras_login.style.display = "block";
    } else {
        caja_atras_register.style.display = "block";
        caja_atras_register.style.opacity = "1";
        caja_atras_login.style.display = "none";
        form_login.style.display = "block";
        cont_l_r.style.left = "0px";
        form_register.style.display = "none";
    }
}

anchoPage();


function iniciarSesion() {
    if (window.innerWidth > 850) {
        form_login.style.display = "block";
        cont_l_r.style.left = "10px";
        form_register.style.display = "none";
        caja_atras_register.style.opacity = "1";
        caja_atras_login.style.opacity = "0";
    } else {
        form_login.style.display = "block";
        cont_l_r.style.left = "0px";
        form_register.style.display = "none";
        caja_atras_register.style.display = "block";
        caja_atras_login.style.display = "none";
    }
}

function register() {
    if (window.innerWidth > 850) {
        form_register.style.display = "block";
        cont_l_r.style.left = "410px";
        form_login.style.display = "none";
        caja_atras_register.style.opacity = "0";
        caja_atras_login.style.opacity = "1";
    } else {
        form_register.style.display = "block";
        cont_l_r.style.left = "0px";
        form_login.style.display = "none";
        caja_atras_register.style.display = "none";
        caja_atras_login.style.display = "block";
        caja_atras_login.style.opacity = "1";
    }
}