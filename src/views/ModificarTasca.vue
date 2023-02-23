<template>
  <div id="formCrearTascaGeneral">
    <div id="container1">
      <div style="display: flex; flex-direction: column">
        <label for="nomTasca" id="nomTascaTitol" class="labelcreartasca"
          >Nom de la tasca</label
        >
        <br /><br />
        <input :readonly="rol ==='Tecnic'" type="text" v-model="nomTasca" id="NomTasca" name="nomTasca" />
      </div>
      <label
        for="descripcioTasca"
        id="descripcioTascaTitol"
        class="labelcreartasca"
        >Descripcio de la tasca</label
      >
      <textarea
      :readonly="rol ==='Tecnic'"
        type="text"
        v-model="descripcioTasca"
        id="descripciotascamod"
        class="descripcioTasca"
        name="descripcioTasca"
      ></textarea>
      <label for="comentari" class="labelcreartasca">Comentari</label><br />
      <textarea
        type="text"
        v-model="Comentaris"
        id="comentaritascamod"
        class="descripcioTasca"
        name="comentari"
      ></textarea>
    </div>
    <div id="container2">
      <div id="formulari">
        <div class="xd">
          <div style="display: flex; flex-direction: column">
            <label class="labelformularicreartasca" for=""
              >Usuari responsable</label
            >
            <br />
            <select  :disabled="rol ==='Tecnic'"  class="selectcreartasca" name="Tecnic" id="selecttecnicmod" v-model="tecnic">
              <usuariLlista
                v-for="(usuari, i) in this.usuarisJSON"
                :key="i"
                :usuari="usuari"
              >
              </usuariLlista>
            </select>
           
          </div>

          <div style="display: flex; flex-direction: column">
            <label class="labelformularicreartasca" for="">Prioritat</label>
            <br />
            <select
            :disabled="rol ==='Tecnic'"
              class="selectcreartasca"
              v-model="prioritatTasca"
              id="selectprioritat"
              name="SelectPrioritat"
            >
              <option value="1" selected>1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
            </select>
          </div>
        </div>
        <div class="xd">
          <div>
            <label class="labelformularicreartasca" for=""
              >Status de la tasca</label
            >
            <br />
            <br />
            <select
              class="selectcreartasca"
              id="selectstatus"
              v-model="statusTasca"
              name="SelectStatus"
            >
              <option value="Fet" selected>Fet</option>
              <option value="En proces">En proces</option>
              <option value="Per fer">Per fer</option>
            </select>
          </div>
          <div>
            <label class="labelformularicreartasca" for="DataVenciment"
              >Data Venciment</label
            >
            <br />
            <br />
            <input
            :readonly="rol ==='Tecnic'"
              id="inputformularicreartasca"
              v-model="dataVenciment"
              type="date"
              name="DataVenciment"
            />
          </div>
        </div>
        <!-- <input id="botocreartasca"type="submit" > -->
        <div style="display: flex">
          <button
            @click="ActualitzarTasca()"
            id="actualitzartasca"
            class="botochulo"
            type="submit"
          >
            Actualitzar
          </button>
          <button  v-if="rol != 'Tecnic'" @click="eliminartasca()" id="eliminartasca" class="botochulo" type="submit">
            Eliminar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import router from "@/router";
import usuariLlista from "@/components/usuariLlista.vue";
export default {
  name: "ModificarTasca",
  components: {
    usuariLlista,
  },
  data() {
    return {
      idtasca: "",

      nomTasca: "",
      descripcioTasca: "",
      usuariResponsable: "",
      prioritatTasca: "",
      statusTasca: "",
      dataVenciment: "",
      Comentaris: "",
      usuarisJSON: {},
      rol: sessionStorage.Rol,
      tecnic: ""
    };
  },
  methods: {
    /*
    Function: modtasca()
      funcio que agafa les dades de la tasca seleccionada i posa les dades al formulari automaticament
    */
    modtasca() {
      let params = window.location.hash;
      let idtasca = params.substring(17, 20);

      axios
        .get(
          "http://girotask.daw.institutmontilivi.cat/API/" +
            sessionStorage.tokenUsuari +
            "/selectOneTask/" +
            idtasca
        )
        .then((resultat) => {
          this.tasca = resultat.data;
          this.nomTasca = this.tasca[0].Nom;
          this.descripcioTasca = resultat.data[0].Descripcio;
          this.Comentaris = resultat.data[0].Comentaris;
          this.prioritatTasca = resultat.data[0].Prioritat;
          this.statusTasca =  resultat.data[0].Estat;
          this.dataVenciment = resultat.data[0].DataVenciment.substring(0, 10);

            this.tecnic = resultat.data[0].Tecnic
        });
    },
    /*
    Function: ActualitzarTasca()

      Funcio que actualitza les dades de la tasca seleccionada
    */
    ActualitzarTasca() {
      let params = window.location.hash;
      let idtasca = params.substring(17, 20);

     
      axios.post(
          "http://girotask.daw.institutmontilivi.cat/API/" +
            sessionStorage.tokenUsuari +
            "/modificarTasca/" +
            idtasca,
          {
            data: {
              nomTasca: this.nomTasca,
              descripcioTasca: this.descripcioTasca,
              Comentaris: this.Comentaris,
              usuariResponsable: this.tecnic,
              prioritatTasca: this.prioritatTasca,
              statusTasca: this.statusTasca,
              dataVenciment: this.dataVenciment,
              idtasca: idtasca,
            },
          }
        )
        .then(() => {
          router.push("/LlistaTasques");
        });
      
    },

    /*
    Function: eliminartasca

        Funcio que elimina la tasca seleccionada
    */
    eliminartasca() {
        let params = window.location.hash;
      let idtasca = params.substring(17, 20);
      axios.post(
          "http://girotask.daw.institutmontilivi.cat/API/" +
            sessionStorage.tokenUsuari +
            "/eliminarTasca/" +
            idtasca,
          {
            data: {
              idtasca: idtasca,
            },
          }
        )
        .then(() => {
          router.push("/LlistaTasques");
        });
    },
    /*
    Function: getUsuaris

      Funcio que llista els usuaris a un select
      */
    getUsuaris() {
      var tokenusuari = sessionStorage.getItem("tokenUsuari");
      axios
        .get("http://girotask.daw.institutmontilivi.cat/API/" + tokenusuari + "/getAllUsers")
        .then((resultat) => {
          this.usuarisJSON = resultat.data;
        });
    },
  },
  created() {
    this.modtasca();
    this.getUsuaris();
  },
};
</script>

<style>
@media only screen and (min-width: 816px) {
  #formCrearTascaGeneral {
    opacity: 1;
    background: url('@/assets/backgroundGirona.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    display: flex;
    position: relative;
    width: 100%;
    height: 100%;
    margin: 0;
    min-height: 100vh;
    height: fit-content;
    /* flex-direction: column; */
  }
}

@media only screen and (max-width: 816px) {
  #formCrearTascaGeneral {
    opacity: 1;
    background: url("https://s27363.pcdn.co/wp-content/uploads/2016/10/Girona-Spain-1.jpg.optimal.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    display: flex;
    position: relative;
    width: 100%;
    height: 100%;
    margin: 0;
    min-height: 200vh;
    height: fit-content;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    text-align: center;
    /* flex-direction: column; */
  }
}
#container1 {
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-around;
  color: black;
  text-align: center;
  align-items: center;
  width: 50%;
  min-width: 400px;
}
#container2 {
  width: 50%;
  height: 100vh;
  /* background-color: gray; */
  justify-content: center;
  text-align: center;
  display: flex;
  align-items: center;
}
#nomTascaTitol {
  /* position: absolute; */
  left: 0%;
}
#comentaritascamod{
  resize: none;
}
#formulari {
  width: 70%;
  height: 70%;
  background-color: gray;
  justify-content: space-around;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  min-width: 400px;
}
.labelcreartasca {
  /* background-color: yellow; */
  color: white;
  font-size: 2em;
  font-weight: 1000;
}
#NomTasca {
  background-color: yellow;
  font-size: 1.5em;
  text-align: center;
}
.xd {
  display: flex;
  width: 100%;
  justify-content: space-around;
}
.descripcioTasca {
  background-color: yellow;
  width: 60%;
  min-width: 300px;
  height: 40%;
  min-width: 300px;
}

.labelformularicreartasca {
  font-size: 1.5em;
  color: white;
}
#botocreartasca {
  background-color: red;
  font-size: 1.5em;
}

.selectcreartasca {
  background-color: salmon;
}

#inputformularicreartasca {
  background-color: salmon;
}

#actualitzartasca {
  --c: #69c1f7;
}

#eliminartasca {
  --c: #ff4000;
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
