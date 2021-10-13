<template>
  <div class="hello">
    
    <body class="card-image" 
      :style="{ backgroundImage: 'url(' + require('@/assets/pizza1.jpg') + ')' }">
    <div>
        <h1>¡Bienvenidos a la pizza mía!</h1>

        <main>

            <div class="contenedor_completo">
                <div class="caja__atras">
                    <div class="caja__atras-login">
                        <h3>¿Ya tienes una cuenta?</h3>
                        <p>Inicia sesión para entrar en la página</p>
                        <button id="btn__iniciar-sesion">Iniciar Sesión</button>
                    </div>
                    <div class="caja__atras-register">
                        <h3>¿Aún no tienes una cuenta?</h3>
                        <p>Regístrate para que puedas iniciar sesión</p>
                        <button id="btn__registrarse">Regístrarse</button>
                    </div>
                </div>
                <div class="cont__l-r">
                  <b-form @submit.prevent="buscarUsuario()" v-if="show" class="form__login">
                  
                        <h2>Iniciar Sesión</h2>
                        <input v-model="email" label="Add Todo" solo type="text" placeholder="Correo Electronico" required>
                        <input v-model="password" label="Add Todo" solo type="password" placeholder="Contraseña" required>
                        <button type="submit">Entrar</button>
                        </b-form>
                        
                    
                    
                      <b-form @submit.prevent="addToDo()" v-if="show" class="form__login">
                        <h2>Regístrarse</h2>
                        <v-input v-model="nombreCompleto" label="Add Todo" solo type="text" placeholder="Nombre completo" required>
                        <v-input v-model="newTodo" label="Add Todo" solo type="text" placeholder="newTodo" required>
                        <input v-model="email" label="Add Todo" solo type="text" placeholder="email" required>
                        <input v-model="usuario" label="Add Todo" solo type="text" placeholder="Usuario" required>
                        <input v-model="direccion" label="Add Todo" solo type= "text" placeholder = "Direccion" required>
                        <input v-model="password" label="Add Todo" solo type="password" placeholder="password" required>
                        <input v-model="phone" label="Add Todo" solo type="number" placeholder= "phone" required>
                        <button type="submit">Regístrarse</button>
                      </b-form>
                </div>
            </div>
            <div class="d-flex justify-center">
      <v-btn @click="addToDo()" color="primary">Add ToDo</v-btn>
    </div>
    <div class="d-flex justify-center">
      <h1>Response from server</h1>
      <h3>{{message}}</h3>
    </div>
    <!-- uncompleted todos -->
    <div class="d-flex justify-center">
      <h1>Unompleted ToDo</h1>
    </div>
    <div v-for="todo in uncompletedTodos" :key="todo._id">
      <v-card class="mx-auto" color="white" dark max-width="800">
        <v-card-text class="font-weight-bold title blue--text">
          {{ todo.nombreCompleto }}:{{todo.email}}:{{ todo.usuario }}:{{todo.direccion}}:{{ todo.password }}:{{todo.phone}}
          <v-list-item id="todo-list-item" class="grow">
            <v-btn
              @click="completeTodo(todo._id)"
              class="mx-2"
              small
              color="green"
              >Done</v-btn
            >
            <v-btn @click="deleteTodo(todo._id)" class="mx-2" small color="red"
              >Delete</v-btn
            >
          </v-list-item>
        </v-card-text>
      </v-card>
    </div>

    <!-- completed todos -->
    <div class="d-flex justify-center">
      <h1>Completed ToDo</h1>
    </div>
    <h1 class="text-center white--text">Completed Todos</h1>
    <div v-for="todo in completedTodos" :key="todo._id">
      <v-card class="mx-auto" color="blue" dark max-width="800">
        <v-card-text class="font-weight-bold title white--text">
          {{ todo.nombreCompleto }}:{{todo.email}}:{{ todo.usuario }}:{{todo.direccion}}:{{ todo.password }}:{{todo.phone}}
          <v-list-item id="todo-list-item" class="grow">
            <v-btn @click="deleteTodo(todo._id)" class="mx-2" small color="red"
              >Delete</v-btn
            >
          </v-list-item>
        </v-card-text>
      </v-card>
    </div>

        </main>
        </div>
    </body>
   
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: () => ({
    nombreCompleto: "",
    newToDo: "",
    email: 0,
    usuario: "",
    dirrecion: "",
    password: "",
    phone: "",
    uncompletedTodos: [],
    completedTodos: [],
    message:"",
  }),
  data(){
    return {
      form:{
    email: "",
    password: ""
  },
  show: true,
    }
    },
  props: {
    msg: String
  },
  methods:{
  buscarUsuario(){
    console.log("Se ejecuta la busqueda");
    this.axios.get("https://vast-ocean-84714.herokuapp.com/todo/completed").then(res =>{
      
      console.log(this.todos);
      this.todos = res.data;

  this.todos.forEach((value, index)=>{
    console.log(value.email);
    console.log(value.password);
  });
    })
  },
  methods: {
    addToDo() {
      axios
        .post("https://vast-ocean-84714.herokuapp.com/todo/add", {
          todo: this.newTodo,
          height: this.height
        })
        .then(response => {
          this.message = response.data;
          
        });
      this.newTodo = "";
      window.location.reload();
    },
    completeTodo(todoID) {
      axios
        .post("https://vast-ocean-84714.herokuapp.com/todo/complete/" + todoID)
        .then(response => {
          console.log(response.data);
          this.message= JSON.stringify(response.data);
          window.location.reload();
        });
    },
    deleteTodo(todoID) {
      axios.delete("https://vast-ocean-84714.herokuapp.com/todo/" + todoID).then(response => {
        console.log(response.data);
        this.message= JSON.stringify(response.data);
        window.location.reload();
      });
    }
  },
  created() {
    setTimeout(()=>{
      axios
      .get("https://vast-ocean-84714.herokuapp.com/todo/uncompleted")
      .then(response => (this.uncompletedTodos = response.data))
      .catch(error => console.log(error));
    // fetch completed task
    axios
      .get("https://vast-ocean-84714.herokuapp.com/completed")
      .then(response => (this.completedTodos = response.data))
      .catch(error => console.log(error));

    }, 2000);
    // fetch uncompleted task
  }
},
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
}

body {
    width: 100%;
    padding: 100%;
    margin: 0;
    padding: 0;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center center;
    background-attachment: fixed;
}

h1 {
    font-size: 80px;
    color: #bc4749;
    margin: 50, 50;
    text-align: center;
    width: 300;
    height: 200;
    text-shadow: 0.1em 0.1em #333;
}

main {
    width: 100%;
    padding: 20px;
    margin: auto;
    margin-top: 100px;
}

.contenedor_completo {
    width: 100%;
    max-width: 800px;
    margin: auto;
    position: relative;
}

.caja__atras {
    border-radius: 10px;
    width: 100%;
    padding: 10px 20px;
    display: flex;
    justify-content: center;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    background-color: #6a994e;
}

.caja__atras div {
    margin: 100px 40px;
    color: #f2e8cf;
    transition: all 500ms;
}

.caja__atras div p,
.caja__atras button {
    margin-top: 30px;
}

.caja__atras div h3 {
    font-weight: 400;
    font-size: 26px;
}

.caja__atras div p {
    font-size: 16px;
    font-weight: 300;
}

.caja__atras button {
    padding: 10px 40px;
    border: 2px solid #f2e8cf;
    font-size: 14px;
    background: transparent;
    font-weight: 600;
    cursor: pointer;
    color: #f2e8cf;
    outline: none;
    transition: all 300ms;
}

.caja__atras button:hover {
    background: #f2e8cf;
    color: #bc4749;
}

.cont__l-r {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 380px;
    position: relative;
    top: -185px;
    left: 10px;
    transition: left 500ms cubic-bezier(0.175, 0.885, 0.320, 1.275);
}

.cont__l-r form {
    width: 100%;
    padding: 80px 20px;
    background: #a7c957;
    position: absolute;
    border-radius: 20px;
}

.cont__l-r form h2 {
    font-size: 30px;
    text-align: center;
    margin-bottom: 20px;
    color: #bc4749;
}

.cont__l-r form input {
    width: 100%;
    margin-top: 20px;
    padding: 10px;
    border: none;
    background: #f2e8cf;
    font-size: 16px;
    outline: none;
}

.cont__l-r form button {
    padding: 10px 40px;
    margin-top: 40px;
    border: 2px solid #f2e8cf;
    font-size: 14px;
    background: #bc4749;
    font-weight: 600;
    cursor: pointer;
    color: white;
    outline: none;
}

.form__login {
    opacity: 1;
    display: block;
}

.form__register {
    display: none;
}

@media screen and (max-width: 850px) {
    main {
        margin-top: 50px;
    }
    .caja__atras {
        max-width: 350px;
        height: 300px;
        flex-direction: column;
        margin: auto;
    }
    .caja__atras div {
        margin: 0px;
        position: absolute;
    }
    .cont__l-r {
        top: -10px;
        left: -5px;
        margin: auto;
    }
    .cont__l-r form {
        position: relative;
    }
}

</style>
