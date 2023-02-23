<template>
  <div id="divfondoRegistre">
    <div id="containerRegistre">
      <div id="quadrat">
        <div id="titol">Modifiacar usuari</div>
        <div class="container1">
          <div class="container2">
            <label class="labelregistre" for="fnUsuari">Nom d'usuari</label>
            <input
              class="inputregistre"
              id="nomusuarimod"
              type="text"
              name="fnUsuari"
            />
          </div>
          <div class="container2">
            <label class="labelregistre" for="lnUsuari">Cognom d'usuari</label>
            <input
              class="inputregistre"
              id="cognomusuarimod"
              type="text"
              name="lnUsuari"
            />
          </div>
        </div>
        <div class="container1">
          <div class="container2">
            <label class="labelregistre" for="emailusuari"
              >Correu de l'usuari</label
            >
            <input
              class="inputregistre"
              id="correuusuarimod"
              type="text"
              name="emailUsuari"
            />
          </div>
          <div class="container2">
            <label class="labelregistre" for="passwd">Contrassenya</label>
            <input
              class="inputregistre"
              id="passwdusuarimod"
              type="text"
              name="passwd"
            />
          </div>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center">
          <select class="selectrol" id="rolusuarimod" name="rolUsuari">
            <option class="optionrol" value="Tecnic" selected>Tecnic</option>
            <option class="optionrol" value="Admin">Admin</option>
            <option class="optionrol" value="Gestor">Gestor</option>
          </select>
          <br />
          <br />
          <div>
            <button
              class="botochulo"
              id="botoactualitzarusuari"
              @click="ActualitzarUsuari()"
              type="submit"
            >
              Actualitzar
            </button>
           
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import router from "@/router";
export default {
  name: "ModificarUsuari",

  data() {
    return {
      usuariJSON: {},
      // identificador: "1"
      nomUsuari: "",
      cognomUsuari: "",
      emailUsuari: "",
      passwd: "",
      selectRol: "",
    };
  },
  methods: {
    /*
    Function: getUsuari

      funcio que agafales dades de l'usuari seleccionat i les posa en el formulari de modificar usuari
    */
    getUsuari() {
      let params = window.location.hash;
      let idusuariurl = params.substring(18, 21);
      axios
        .get(
          "http://girotask.daw.institutmontilivi.cat/API/" +
            sessionStorage.tokenUsuari +
            "/selectOneUser/" +
            idusuariurl
        )
        .then((resultat) => {
          this.user = resultat.data;
          document.getElementById("nomusuarimod").value = this.user[0].Nom;
          document.getElementById("cognomusuarimod").value =
            this.user[0].Cognom;
          document.getElementById("correuusuarimod").value = this.user[0].Email;
          document.getElementById("passwdusuarimod").value =
            this.user[0].Contrassenya;
          document.getElementById("rolusuarimod").value = this.user[0].Rol;
        });
    },
    /*
    Function: ActualitzarUsuari()

      Funcio que actualitza les dades de del formulari a la base de dades de l'usuari
    */
    ActualitzarUsuari() {
      let params = window.location.hash;
      let iduserurl = params.substring(18, 21);

      this.nomUsuari = document.getElementById("nomusuarimod").value;
      this.cognomUsuari = document.getElementById("cognomusuarimod").value;
      this.emailUsuari = document.getElementById("correuusuarimod").value;
      this.passwd = document.getElementById("passwdusuarimod").value;
      this.selectRol = document.getElementById("rolusuarimod").value;

      axios
        .post(
          "http://girotask.daw.institutmontilivi.cat/API/" +
            sessionStorage.tokenUsuari +
            "/modificarUsuari/" +
            iduserurl,
          {
            data: {
              nomUsuari: this.nomUsuari,
              cognomUsuari: this.cognomUsuari,
              emailUsuari: this.emailUsuari,
              passwd: this.passwd,
              selectRol: this.selectRol,
              userID: iduserurl,
            },
          }
        )
        .then(() => {
          router.push("/llistaUsuaris");
        });
    },
  },
  created() {
    this.getUsuari();
  },
};
</script>

<style>
body {
  margin: 0;
}

@media only screen and (max-width: 920px) {
  .container1 {
    flex-wrap: wrap;
    text-align: center;
    justify-content: center;
    align-items: center;
  }

  @media only screen and (max-height: 600px) {
    #divfondoRegistre {
      min-height: 600px;
    }
  }

  .container2 {
    width: 100%;
  }
}

#divfondoRegistre {
  opacity: 1;
  background: url("@/assets/backgroundGirona.png");
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

#containerRegistre {
  min-width: 500px;
  position: relative;
  background-color: gray;
  align-items: center;
  align-content: center;
  opacity: 1;
  height: 95%;
  width: 70%;
  display: flex;
  flex-direction: column;
}

.labelregistre {
  font-size: 2em;
  font-weight: 600;
}

.inputregistre {
  font-size: 1.5em;
  background-color: salmon;
}

.container2 {
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: center;
  margin: 10px;
  flex-wrap: wrap;
}

#quadrat {
  opacity: 1;
  width: 100%;
  min-width: 500px;
  height: 100%;
  align-content: space-around;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-around;
  flex-wrap: wrap;
}

#titol {
  font-weight: 700;
  font-size: 2.5em;
  font-family: porkys;
}

.container1 {
  width: 100%;
  display: flex;
  /* flex-wrap: wrap; */
}

.selectrol {
  width: 100px;
  height: 3em;
  border-radius: 10px;
  opacity: 1;
  border: 2px solid black;
  background-color: salmon;
  border: 2px solid black;
  font-weight: 700;
}

@font-face {
  font-family: porkys;
  src: url("@/assets/PORKYS_.TTF");
}

#botoactualitzarusuari {
  --c: rgb(170, 222, 255);
}

#botoeliminarusuari {
  --c: rgb(255, 30, 0);
}

.botochulo {
  --b: 3px;
  /* border thickness */
  --s: 0.15em;
  /* size of the corner */

  padding: calc(0.05em + var(--s)) calc(0.3em + var(--s));
  color: var(--c);
  --_p: var(--s);
  background: conic-gradient(
      from 90deg at var(--b) var(--b),
      #0000 90deg,
      var(--c) 0
    )
    var(--_p) var(--_p) / calc(100% - var(--b) - 2 * var(--_p))
    calc(100% - var(--b) - 2 * var(--_p));
  transition: 0.3s linear, color 0s, background-color 0s;
  outline: var(--b) solid #0000;
  outline-offset: 0.2em;
}

.botochulo:hover,
.botochulo:focus-visible {
  --_p: 0px;
  outline-color: var(--c);
  outline-offset: 0.05em;
}

.botochulo:active {
  background: var(--c);
  color: #fff;
}

.botochulo {
  font-family: system-ui, sans-serif;
  font-weight: bold;
  font-size: 2rem;
  cursor: pointer;
  border: none;
  margin: 0.1em;
}
</style>
