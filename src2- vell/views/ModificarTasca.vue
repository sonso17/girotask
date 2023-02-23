<template>
    <div id="formCrearTascaGeneral">
      
            <div id="container1">
                <div style="display: flex; flex-direction: column;"><label for="nomTasca" id="nomTascaTitol"
                        class="labelcreartasca">Nom de la tasca</label>
                    <br><br>
                    <input type="text" id="nomTasca" name="nomTasca">

                </div><label for="descripcioTasca" id="descripcioTascaTitol" class="labelcreartasca">Descripcio de la
                    tasca</label>
                <input type="text" id="descripciotascamod" class="descripcioTasca" name="descripcioTasca">
                <label for="comentari" class="labelcreartasca">Comentari</label><br>
                <input type="text" id="comentaritascamod" class="descripcioTasca" name="comentari">
            </div>
            <div id="container2">
                <div id="formulari">
                    <div class="xd">
                        <div style="display:flex; flex-direction: column; ">
                            <label class="labelformularicreartasca" for="">Usuari responsable</label>
                            <br>
                            <select class="selectcreartasca" name="Tecnic" id="selecttecnicmod">
                                <option value="1">Elvis</option>
                            </select>
                        </div>

                        <div style="display:flex; flex-direction: column; ">
                            <label class="labelformularicreartasca" for="">Prioritat</label>
                            <br>
                            <select class="selectcreartasca" id="selectprioritat" name="SelectPrioritat">
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
                            <label class="labelformularicreartasca" for="">Status de la tasca</label>
                            <br>
                            <br>
                            <select class="selectcreartasca" id="selectstatus" name="SelectStatus">
                                <option value="Fet" selected>Fet</option>
                                <option value="En proces">En proces</option>
                                <option value="Per fer">Per fer</option>
                            </select>
                        </div>
                        <div>
                            <label class="labelformularicreartasca" for="DataVenciment">Data Venciment</label>
                            <br>
                            <br>
                            <input id="inputformularicreartasca" type="date" name="DataVenciment">
                        </div>
                    </div>
                    <!-- <input id="botocreartasca"type="submit" > -->
                    <div style="display: flex;">
                        <button @click="ActualitzarTasca()" id="actualitzartasca" class="botochulo" type="submit">Actualitzar</button>
                        <button id="eliminartasca" class="botochulo" type="submit">Eliminar</button>
                    </div>
                </div>

            </div>

    </div>

</template>

<script>
import axios from 'axios'
import router from '@/router';
export default {
  name: 'logIn',
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
    }
  },
  methods: {
    modtasca() {
        let params = window.location.hash
        let idtasca = params.substring(17, 20)
    //  console.log(params.substring(17, 20))

     axios.get('http://localhost/API/' + sessionStorage.tokenUsuari + '/selectOneTask/' + idtasca,)
     .then(resultat => {
        console.log(resultat.data)
                    this.tasca = resultat.data
                    document.getElementById("nomTasca").value = resultat.data[0].Nom
                    document.getElementById("descripciotascamod").value = resultat.data[0].Descripcio
                    document.getElementById("comentaritascamod").value = resultat.data[0].Comentaris
                    document.getElementById("selecttecnicmod").value = resultat.data[0].Tecnic
                    document.getElementById("selectprioritat").value = resultat.data[0].Prioritat
                    document.getElementById("selectstatus").value = resultat.data[0].Estat
                    document.getElementById("inputformularicreartasca").value = resultat.data[0].DataVenciment.substring(0,10)
                });

    },
    ActualitzarTasca() {
        let params = window.location.hash
        let idtasca = params.substring(17, 20)

                    this.nomTasca= document.getElementById("nomTasca").value
                    this.descripcioTasca = document.getElementById("descripciotascamod").value 
                    this.Comentaris = document.getElementById("comentaritascamod").value 
                    this.usuariResponsable= document.getElementById("selecttecnicmod").value 
                    this.prioritatTasca = document.getElementById("selectprioritat").value
                    this.statusTasca = document.getElementById("selectstatus").value 
                    this.dataVenciment=  document.getElementById("inputformularicreartasca").value

        console.log(idtasca)
        axios.post('http://localhost/API/' + sessionStorage.tokenUsuari + '/modificarTasca/' + idtasca,
                { data: { 
                    "nomTasca": this.nomTasca,
                    "descripcioTasca": this.descripcioTasca ,
                    "Comentaris": this.Comentaris,
                    "usuariResponsable": this.usuariResponsable, 
                    "prioritatTasca": this.prioritatTasca ,
                    "statusTasca": this.statusTasca ,
                    "dataVenciment": this.dataVenciment ,
                    "idtasca": idtasca
                    } 
                }
            ).then((response) => {
               console.log(response.data);
               
            })
    },
    lol()
    {
        router.push('/LlistaTasques');
    }
  },
  created() {
   
    this.modtasca();
    
  }
}
</script>

<style>


@media only screen and (min-width: 816px) {
    #formCrearTascaGeneral {
        opacity: 1;
        background: url('https://s27363.pcdn.co/wp-content/uploads/2016/10/Girona-Spain-1.jpg.optimal.jpg');
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
        background: url('https://s27363.pcdn.co/wp-content/uploads/2016/10/Girona-Spain-1.jpg.optimal.jpg');
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
    font-size: 2em;
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
    --s: .15em;
    /* size of the corner */
    padding: calc(.05em + var(--s)) calc(.3em + var(--s));
    color: var(--c);
    --_p: var(--s);
    background:
        conic-gradient(from 90deg at var(--b) var(--b), #0000 90deg, var(--c) 0) var(--_p) var(--_p)/calc(100% - var(--b) - 2*var(--_p)) calc(100% - var(--b) - 2*var(--_p));
    transition: .3s linear, color 0s, background-color 0s;
    outline: var(--b) solid #0000;
    outline-offset: .2em;
}

.botochulo:hover,
.botochulo:focus-visible {
    --_p: 0px;
    outline-color: var(--c);
    outline-offset: .05em;
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
    margin: .1em;
}
</style>