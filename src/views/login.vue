<template>
  <div id="divfondoLogIn">
    <div id="containerLogIn">
      <div style="margin-top:15px;font-size: 2em; font-weight: 700; font-family: porkys;">GiroTask</div>
      <div style="display: flex; flex-direction: column;">
        <label class="labelLogin" for="emailUsuari">Correu</label>
          <input class="inputlogin" id="emailUsuariinput" v-model="emailUsuari" type="email" name="emailUsuari">
          <br>
          <br>
          <label class="labelLogin" for="passwd">Contrassenya</label>
          <br>
          <input class="inputlogin" type="password" id="passwdinput" v-model="passwd"  name="passwd">
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
    /*
    Function: getTokenConvidat()

      Funcio que demana un token convidat al servidor i li dona al client
     */
    getTokenConvidat() {
      axios.get("http://girotask.daw.institutmontilivi.cat/API/TokenConvidat")
        .then(resultat => {
          this.tokenJSON = resultat.data
          sessionStorage.setItem('TokenConvidat', resultat.data);
        });
    },

    /*
    Function: enviarDadesLogIn()
      Funcio que envia les dades de login al servidor per logar a l'usuari
    */
    enviarDadesLogIn() {
      this.emailUsuari = document.getElementById("emailUsuariinput").value;
      this.passwd = document.getElementById("passwdinput").value;

      axios.post('http://girotask.daw.institutmontilivi.cat/API/'+ this.tokenJSON +'/LogIn' ,
      { data: { "emailUsuari": this.emailUsuari, "passwd": this.passwd }}
      ).then((response)=>{
        sessionStorage.setItem('tokenUsuari', response.data[0].Token);
        sessionStorage.setItem('usuari', response.data[0].Nom);
        sessionStorage.setItem('Rol', response.data[0].Rol);
        sessionStorage.setItem('IDUsuari', response.data[0].UsuariID);

        document.getElementById("capNomUsuari").innerHTML= sessionStorage.getItem('usuari', response.data[0].Nom);
    document.getElementById("capRolUsuari").innerHTML=  sessionStorage.getItem('Rol', response.data[0].Rol);
        router.push('/LlistaTasques');
      })

    },

  },
  created() {
   
    this.getTokenConvidat();
    
  }
}
</script>

<style>

@font-face {
    font-family: porkys;
    src: url('@/assets/PORKYS_.TTF');
}

#divfondoLogIn {
  opacity: 1;
  background: url('@/assets/backgroundGirona.png');
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
    left: 30%;
    top: 83%;
    position: absolute;
}
</style>