<template>
  <div id="divfondoLogIn">
    <div id="containerLogIn">
      <div style="margin-top:15px;font-size: 2em; font-weight: 700;">GiroTask</div>
      <div style="display: flex; flex-direction: column;"><label class="labelLogin" for="emailUsuari">Correu</label>


        <form onsubmit="handleSubmit">
          
          <!-- :action="'http://localhost/API/'+ tokenJSON +'/LogIn'" method="post" -->
          <input class="inputlogin" type="text" v-model="emailUsuari" name="emailUsuari">
          <br>
          <br>
          <label class="labelLogin" for="passwd">Contrassenya</label>
          <br>
          <input class="inputlogin" type="text" v-model="passwd" name="passwd">
          <br>
          <br>
          <button id="buttonlogin" type="submit" value="Log In" @click="enviarDadesLogIn">Log in</button>
        </form>

        
      </div>

    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'logIn',
  data() {
    return {
      tokenJSON: {},
      emailUsuari: "",
      passwd: ""
    }
  },
  methods: {
    getTokenConvidat() {
      axios.get("http://localhost/API/TokenConvidat")
        .then(resultat => {
          this.tokenJSON = resultat.data
          console.log(resultat.data)
          sessionStorage.setItem('Token', resultat.data);
        });
    },
    enviarDadesLogIn() {
      // console.log("email",this.emailUsuari)
      // console.log("passwd",this.passwd)

      // var credencialsUsuari = {email:this.emailUsuari, passwd: this.passwd }
      // console.log(credencialsUsuari)
      // axios.post('http://localhost/API/' + this.tokenJSON + '/LogIn', credencialsUsuari)
      // axios({
      //   method: 'POST',
      //   url: 'http://localhost/API/' + this.tokenJSON + '/LogIn',
      //   data: {
      //     "emailUsuari": this.emailUsuari,
      //     "passwd": this.passwd
      //   }
      // })

    }
  },
  created() {
    this.getTokenConvidat();
  }
}
</script>

<style>
body {
  width: 100%;
  height: 100%;
  margin: 0;
}

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