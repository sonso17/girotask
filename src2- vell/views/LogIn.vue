<template>
  <div id="divfondoLogIn">
    <div id="containerLogIn">
      <div style="margin-top:15px;font-size: 2em; font-weight: 700;">GiroTask</div>
      <div style="display: flex; flex-direction: column;">
        <label class="labelLogin" for="emailUsuari">Correu</label>
          <input class="inputlogin" id="emailUsuariinput" v-model="emailUsuari" type="text" name="emailUsuari">
          <br>
          <br>
          <label class="labelLogin" for="passwd">Contrassenya</label>
          <br>
          <input class="inputlogin" id="passwdinput" v-model="passwd" type="text" name="passwd">
          <br>
          <br>
          <button id="buttonlogin" @click="enviarDadesLogIn()" value="Log In">Log in</button>
      </div>
    </div>
  </div>
</template>

<script>
import router from '@/router';
import axios from 'axios'
export default {
  name: 'logIn',
  data() {
    return {
      tokenJSON: {},
      emailUsuari: "",
      passwd: "",
    }
  },
  methods: {
    getTokenConvidat() {
      axios.get("http://localhost/API/TokenConvidat")
        .then(resultat => {
          this.tokenJSON = resultat.data
          sessionStorage.setItem('TokenConvidat', resultat.data);
        });
    },
    enviarDadesLogIn() {
      // var credencialsUsuari = { email: this.emailUsuari, passwd: this.passwd }
      // console.log(credencialsUsuari)
      this.emailUsuari = document.getElementById("emailUsuariinput").value;
      this.passwd = document.getElementById("passwdinput").value;

      console.log("email: " + this.emailUsuari + " Passwd: " + this.passwd)
      axios.post('http://localhost/API/'+ this.tokenJSON +'/LogIn' ,
      { data: { "emailUsuari": this.emailUsuari, "passwd": this.passwd }}
      ).then((response)=>{
        sessionStorage.setItem('tokenUsuari', response.data[0].Token);
        console.log(response)
        sessionStorage.setItem('usuari', response.data[0].Nom);
        sessionStorage.setItem('Rol', response.data[0].Rol);
        sessionStorage.setItem('IDUsuari', response.data[0].UsuariID);

        // var tokenusuari = response.data[0].Token
        document.getElementById("capNomUsuari").innerHTML= sessionStorage.getItem('usuari', response.data[0].Nom);
    document.getElementById("capRolUsuari").innerHTML=  sessionStorage.getItem('Rol', response.data[0].Rol);
        router.push(  
  '/LlistaTasques');
        // console.log(response.data[0].Token);
        // console.log(tokenusuari)
      })

    },

  },
  created() {
   
    this.getTokenConvidat();
    
  }
}
</script>

<style>

#divfondoLogIn {
  opacity: 1;
  background: url('https://s27363.pcdn.co/wp-content/uploads/2016/10/Girona-Spain-1.jpg.optimal.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  position: relative;
  align-items: center;
  justify-items: center;
  justify-content: center;
  align-content: center;
  text-align: center;
  width: 100%;
  height: 100vh;
  margin: 0;
}

#containerLogIn {
  border-radius: 20px;
  position: relative;
  background-color: gray;
  align-items: center;
  align-content: center;
  opacity: 1;
  height: 40%;
  width: 40%;
  display: flex;
  flex-direction: column;
  min-height: 300px;
  min-width: 290px;
}

.inputlogin {
  font-size: 1.5em;
}

.labelLogin {
  font-size: 2em;
}

#buttonlogin {
  background-color: salmon;
  color: #fff;
  border: none;
  border-radius: 5px;
  height: 2rem;
  width: 40%;
  padding: 0.5rem;
  font-size: 1.25rem;
  cursor: pointer;
}
</style>