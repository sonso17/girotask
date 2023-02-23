<template>
    <div id="formCrearTascaGeneralcreartasca">
       
            <div id="container1creartasca">
                <div style="display: flex; flex-direction: column">
                    <label for="nomTasca" id="nomTascaTitol" class="labelcreartasca">Nom de la tasca</label>
                    <br /><br />
                    <input type="text" id="NomTasca" v-model="nomTasca" name="nomTasca" />
                </div>
                <div style="height: 70%">
                    <label for="descripcioTasca" id="descripcioTascaTitol" class="labelcreartasca">Descripcio de la
                        tasca</label>
                    <textarea type="text"  id="descripcioTasca" v-model="descripcioTasca" name="descripcioTasca" ></textarea>
                </div>
            </div>
            <div id="container2creartasca">
                <div id="formulari">
                    <div class="xd">
                        <div style="display: flex; flex-direction: column">
                            <label class="labelformularicreartasca" for="">Usuari responsable</label>
                            <br />
                            <select class="selectcreartasca" v-model="usuariResponsable" name="Tecnic" id="usuariResponsablecreartasca">
                                <!-- <option value="1">Elvis</option> -->
                                <usuariLlista v-for="(usuari, i) in this.usuarisJSON" :key="i" :usuari="usuari">

                                </usuariLlista>
                                
                            </select>
                        </div>
                        <div style="display: flex; flex-direction: column">
                            <label class="labelformularicreartasca" for="">Prioritat</label>
                            <br />
                            <select class="selectcreartasca" v-model="prioritatTasca" id="selectprioritat"
                                name="SelectPrioritat">
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
                        <div style="display: flex; flex-direction: column">
                            <label class="labelformularicreartasca" for="">Status de la tasca</label>
                            <br />
                            <select class="selectcreartasca" v-model="statusTasca" id="selectstatus" name="SelectStatus">
                                <option value="Fet" selected>Fet</option>
                                <option value="En proces">En proces</option>
                                <option value="Per fer">Per fer</option>
                            </select>
                        </div>
                        <div>
                            <label style="display: flex; flex-direction: column" class="labelformularicreartasca"
                                for="DataVenciment">Data Venciment</label>
                            <br />
                            <input id="inputformularicreartasca" v-model="dataVenciment" type="date" name="DataVenciment" />
                        </div>
                    </div>
                    <!-- <input id="botocreartasca"type="submit" > -->
                    <button  @click="enviarCrearTasca()" value="Enviar">
                        Enviar
                    </button>
                </div>
            </div>
    </div>
</template>

<script>
import axios from 'axios'
import router from '@/router';
import usuariLlista from '@/components/usuariLlista.vue'
export default {
    name: 'crearTasca',
    components: {
        usuariLlista
    },
    data() {
        return {
            nomTasca: "",
            descripcioTasca: "",
            usuariResponsable: "",
            prioritatTasca: "",
            statusTasca: "",
            dataVenciment: "",
            usuarisJSON: {}
        }
    },
    methods: {

    /*
    Function: enviarCrearTasca
    
        Funcio que agafa les dades del formulari i llença una peticio axios a la API
    
    */
        enviarCrearTasca() 
        {
            // this.nomTasca = document.getElementById("nomTasca").value;
            // this.descripcioTasca = document.getElementById("descripcioTasca").value;
            // this.usuariResponsable = document.getElementById("usuariResponsablecreartasca").value;
            // this.prioritatTasca = document.getElementById("selectprioritat").value;
            // this.statusTasca = document.getElementById("selectstatus").value;
            // this.dataVenciment = document.getElementById("inputformularicreartasca").value;


            axios.post('http://girotask.daw.institutmontilivi.cat/API/' + sessionStorage.tokenUsuari + '/crearTasca',
                { data: { 
                    nomTasca: this.nomTasca,
                    descripcioTasca: this.descripcioTasca ,
                    usuariResponsable: this.usuariResponsable, 
                    prioritatTasca: this.prioritatTasca ,
                    statusTasca: this.statusTasca ,
                    dataVenciment: this.dataVenciment 
                    } 
                }
            ).then(() => {
                router.push('/LlistaTasques');
            })
        },
        /*
        Function: getUsuaris
            Funcio que llista els usuaris en un select
        */
        getUsuaris(){
            var  tokenusuari =sessionStorage.getItem('tokenUsuari');
            axios.get('http://girotask.daw.institutmontilivi.cat/API/'+ tokenusuari + '/getAllUsers')
                .then(resultat => {
                    this.usuarisJSON = resultat.data
                });
        }
    },
    created(){
        this.getUsuaris()
    }
}
</script>

<style>
@media (min-width: 816px) {
    #formCrearTascaGeneralcreartasca {
        opacity: 1;
        background: url('@/assets/backgroundGirona.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;
        display: flex;
        position: relative;
        width: 100%;
        height: 100vh;
        margin: 0;
        min-height: 100vh;
        height: fit-content;
        min-height: 100vh;
        
        

        /* flex-direction: column; */
    }
}
    
@media (max-width: 816px) {
    #formCrearTascaGeneralcreartasca {
        opacity: 1;
        background: url("https://s27363.pcdn.co/wp-content/uploads/2016/10/Girona-Spain-1.jpg.optimal.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;
        display: flex;
        position: relative;
        width: 100%;
        height: 200%;
        margin: 0;
        min-height: 200vh;
        height: fit-content;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        text-align: center;
        /* flex-direction: column; */
    }
}

#container1creartasca {
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

#container2creartasca {
    width: 50%;
    height: 100vh;
    /* background-color: gray; */
    justify-content: center;
    text-align: center;
    display: flex;
    align-items: center;
    min-width: 400px;

}

#nomTascaTitol {
    /* position: absolute; */
    left: 0%;
    font-family: porkys;
    color: black;
}

#descripcioTascaTitol{
    color: black;
}

@font-face {
    font-family: porkys;
    src: url('@/assets/PORKYS_.TTF');
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
    /* color: white; */
    font-size: 2em;
    font-weight: 1000;
    font-family: porkys;
    color: black;

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

#descripcioTasca {
    background-color: yellow;
    width: 60%;
    min-width: 300px;
    height: 60%;
    min-width: 300px;
    text-align: left;
    resize:none;    
}

.labelformularicreartasca {
    font-size: 2em;
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

button {
    --b: 3px;
    /* border thickness */
    --s: 0.15em;
    /* size of the corner */
    --c: #f88f6c;

    padding: calc(0.05em + var(--s)) calc(0.3em + var(--s));
    color: var(--c);
    --_p: var(--s);
    background: conic-gradient(from 90deg at var(--b) var(--b),
            #0000 90deg,
            var(--c) 0) var(--_p) var(--_p) / calc(100% - var(--b) - 2 * var(--_p)) calc(100% - var(--b) - 2 * var(--_p));
    transition: 0.3s linear, color 0s, background-color 0s;
    outline: var(--b) solid #0000;
    outline-offset: 0.2em;
}

button:hover,
button:focus-visible {
    --_p: 0px;
    outline-color: var(--c);
    outline-offset: 0.05em;
}

button:active {
    background: var(--c);
    color: #fff;
}

button {
    font-family: system-ui, sans-serif;
    font-weight: bold;
    font-size: 2rem;
    cursor: pointer;
    border: none;
    margin: 0.1em;
}
</style>
