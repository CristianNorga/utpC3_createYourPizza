<template>
<b-container><br><br>
  <b-card title="Módulo de PQRS" sub-title="Registra tu solicitud" border-variant="primary">
    <b-card-text>
      <b-form @submit.prevent="sendTask" v-if="show">
          
        <b-row>
            <b-col><div class="b-form-group">
                                <label for="nombre">Nombres </label>
                                <input type="text" class="form-control" id="nombre" v-model="form.nombres" placeholder="" required>
                            </div></b-col>
            <b-col><div class="b-form-group">
                                <label for="apellido">Apellidos </label>
                                <input type="text" class="form-control" id="apellidos" v-model="form.apellidos" placeholder="" required>
                            </div></b-col>
            <b-col><div class="b-form-group">
                              <label for="contacto">N° Contacto</label>
                              <input type="tel" class="form-control" id="contacto" v-model="form.contacto" placeholder="" required>
                            </div></b-col>
            <b-col><div class="b-form-group">
                                <label for="correo">Correo Electronico</label>
                                <input type="email" class="form-control" id="correo" v-model="form.correo"  placeholder="" required>
                            </div></b-col>

            <b-col>
                        <b-form-group>

                            <label for="tipo">Tipo De Solicitud</label>
                             <select name="" id="tipo" class="form-control" v-model="form.tipo" required>
                                    <option value=" " selected disabled >Seleccionar</option>
                                    <option value="Peticion">Peticion</option>
                                    <option value="Queja">Queja </option>
                                    <option value="Reclamo">Reclamo</option>
                                </select>
                        </b-form-group>
            </b-col>
        </b-row><br>
        <b-row>
            
            <b-col cols="12">
                <div class="form-group">
                    <textarea class="form-control" placeholder="Describe la solicitud" v-model="form.solicitud
"></textarea>
                   </div>
            </b-col>
        </b-row>  <br><br> 
        <template v-if="edit === false">
              <b-button type="submit" variant="primary">Enviar</b-button>
        </template >
         <template v-else>
              <b-button type="submit" variant="primary">Editar</b-button>
        </template >  
           
    
     </b-form>
  
    </b-card-text>

</b-card>
<div class="col-md-12>">
      <table class="table table-bordered">
         <thead>
           <tr>
             <th>Nombre</th>
              <th>Apellidos</th>
               <th>Contacto</th>
                <th>Correo</th>
                <th>Tipo</th>
                <th>Descripcion</th>
           </tr>
         </thead>
         <tbody>
           <tr v-for="pqr of forms">
             <td>{{pqr.nombres}}</td>
              <td>{{pqr.apellidos}}</td>
               <td>{{pqr.contacto}}</td>
                <td>{{pqr.correo}}</td>
                <td>{{pqr.tipo}}</td>
                <td>{{pqr.solicitud}}</td>
                <td><button @click="deletePqr(pqr._id)" class="btn btn-danger">X</button>
                <button @click="updatePqr(pqr._id)" class="btn btn-success">!</button></td>
           </tr>
         </tbody>
      </table>
</div>
</b-container>

</template>
<script>


  export default {
    data() {
      return {
        form: {
          
          nombres:'',
          apellidos:'',
          correo: '',
          tipo: '',
          contacto: '',
          
        },
        forms:[],

        edit:false,
        toEdit:'',         
        show: true
      }
    },
    created(){
      this.getPqrs();
    },

    methods: {
      sendTask(event) {
        if(this.edit === false){
          fetch('/api/pqrs',{
              method:'POST',
              body:JSON.stringify(this.form),
              headers:{
                  'Accept':'application/json',
                  'Content-type':'application/json',
              }
          })
          this.nombres='',
          this.apellidos='',
          this.correo= '',
          this.tipo= '',
          this.contacto= ''
        event.preventDefault()
       
      } else {
              fetch('api/pqrs/'+toEdit, {
                method:'PUT',
                body: JSON.stringify(this.pqrs),
                headers:{
                  'Accept':'application/json',
                  'Content-type':'application/json',
                },
              })
            .then(res=>res.json())
            .then(data =>console.log(data));
      }
          this.getPqrs();
      },
      getPqrs(){
        fetch('/api/pqrs')
          .then(res=>res.json())
          .then(data=>{
            this.forms = data
          });

      },
      deletePqr(id){
         fetch('/api/pqrs/' + id,{
              method:'DELETE',
              headers:{
                  'Accept':'application/json',
                  'Content-type':'application/json',
              }

        
      })
      .then(res => res.json())
      .then(data=>{
              alert('delete'+id);
              this.getPqrs();

      });
       
    },
    updatePqr(id){
      fetch('/api/pqrs/'+ id)
        .then(res =>res.json())
        .then(data=>{
          this.form = data
          this.toEdit=data._id;
          this.edit=true
      });
          

    }
   }
  }
</script>


