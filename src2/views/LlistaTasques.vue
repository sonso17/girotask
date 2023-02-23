<template>
   
    <div @click="barralateralPopout()" class="divfondoLlistaTasques"  >
        <div id="funcionalitats">
            <img src="@/assets/Usuaris.png" alt=""  class="icones" @click="GotoUsuarisPag()">
            <img src="@/assets/CrearTasca.png" alt=""   class="icones" @click="GotoCrearTasca()">
        </div>
        <div id="div-tasques">
            <TascaLlista v-for="(tasca, i) in TasquesJSON" :key="i" :tasca="tasca">

            </TascaLlista>
            <!-- {{ TasquesJSON }} -->
        </div>

        <div id="filtre">

            <label id="nomtitolfiltre"></label>
            <br>
            <br>
            <br>
            <label id="nomfiltre"></label>
            <br>
            <br>
            <br>
            
            <button id="botoentrartasca" @click="ModificarTasca()">Entra a la tasca</button>
            <label id="hiddenid" hidden></label>
        </div>
    </div>
   

</template>

<script>
import router from "@/router";
import axios from "axios";//importo axios
import TascaLlista from '../components/TascaLlista.vue'
export default {
    name: 'LlistaTasques',
    components: {
        TascaLlista
    },
    data() {
        return {
            checkboxdesplegable: false,
            TasquesJSON: {},
            idtascs: "",
            // identificador: "1"
        }

    },
    methods: {
        getTasques() {
           var  tokenusuari =sessionStorage.getItem('tokenUsuari');
            axios.get('http://localhost/API/'+ tokenusuari + '/seleccionarTasquesUsuari/'+ sessionStorage.getItem("IDUsuari"))
                .then(resultat => {
                    this.TasquesJSON = resultat.data
                });
        },
        barralateralPopout() {
                document.getElementById("filtre").style.right = "-200px";
        },
        ModificarTasca(){

                    this.idtasca= document.getElementById("hiddenid").value,
            
               router.push("/modificarTasca/"+this.idtasca)
        },
        GotoUsuarisPag(){
            router.push("/llistaUsuaris")
        },
        GotoCrearTasca(){
            router.push("/crearTasca")
        }

    },
    created(){
        this.getTasques();
    }

}
</script>

<style>
.icones {
    width: 50px;
    height: 50px;
}
.icones:hover{
    cursor: pointer;
}

.divfondoLlistaTasques {
    opacity: 1;
    background: url('https://s27363.pcdn.co/wp-content/uploads/2016/10/Girona-Spain-1.jpg.optimal.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin: 0;
    overflow-x: hidden;
    min-height: 100vh;
}

#filtre {
    text-align: center;
    justify-content: center;
    align-items: center;
    align-items: center;

    position: fixed;
    width: 200px;
    height: 50%;
    top: 25%;
    right: -210px;
    background-color: salmon;
    transition: right 0.7s;
    border: 4px solid black;
}
#botoentrartasca{
    --c: #69c1f7;
    margin: 5px
}
.checkbox {
    opacity: 0;
    position: absolute;
}

/* Caldrar borrar el desplegable al final */
#desplegable {
    width: 2.2rem;
    height: 2.7rem;
    background: gray;
    border-radius: 0.5rem;
    position: absolute;
    top: 50%;
    right: 0px;
    font-size: 1.5rem;
    color: white;
    text-align: center;
    transition: right 0.7s;
    border-radius: 0.5rem 0 0 0.5rem;
    border: 2px solid white;
}

/* Caldrar borrar el desplegable al final */

#nomfiltre{
    overflow-wrap: break-word;
    width: 150px;
    display: flex;
    margin-left: 25px;
}
#nomtitolfiltre{
    overflow-wrap: break-word;
    width: 180px;
    display: flex;
    margin-left: 10px;
    text-align: center;
    font-size: 1.5em;
    font-weight: 700;
}


#funcionalitats {
    width: 100%;
    height: 50px;
    margin: 10px;
    text-align: left;
    display: flex;
    justify-content: center;
}

#div-tasques {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

}
</style>