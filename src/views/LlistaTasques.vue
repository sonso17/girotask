<template>
   
    <div @click="barralateralPopout()" class="divfondoLlistaTasques"  >
        <div  id="funcionalitats">
            <img  v-if=" rol ==='Admin'" src="@/assets/Usuaris.png" alt=""  class="icones" @click="GotoUsuarisPag()">
            <img v-if=" rol ==='Gestor' || rol==='Admin'" src="@/assets/CrearTasca.png" alt=""   class="icones" @click="GotoCrearTasca()">
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
            rol: sessionStorage.Rol
            // identificador: "1"
        }

    },
    methods: {
        /*
        Function: Gettasques()
            funcio que agafa totes les tasques disponibles a l'usuari
        */
        getTasques() {
           var  tokenusuari =sessionStorage.getItem('tokenUsuari');
           if(sessionStorage.Rol ==="Tecnic")
           {
            axios.get('http://girotask.daw.institutmontilivi.cat/API/'+ tokenusuari + '/seleccionarTasquesUsuari/'+ sessionStorage.getItem("IDUsuari"))
                .then(resultat => {
                    this.TasquesJSON = resultat.data
                });
           }
           else{
            axios.get('http://girotask.daw.institutmontilivi.cat/API/'+ tokenusuari + '/getAllTasks/')
                .then(resultat => {
                    this.TasquesJSON = resultat.data
                });
           }
           
        },
        /*
        Function: barralateralPopout()
        
            funcio que desplaca la barra lateral a fora de la pantalla
         */
        barralateralPopout() {
                document.getElementById("filtre").style.right = "-210px";
        },
        /*
        Function: ModificarTasca()
        
            funcio que agafa la id de la tasca i redirigeix a l'usuari al formulari de modificar tasca
         */
        ModificarTasca(){

                    this.idtasca= document.getElementById("hiddenid").value,
            
               router.push("/modificarTasca/"+this.idtasca)
        },
         /*
        Function: GotoUsuarisPag()
        
            funcio  redirigeix a l'usuari a la llista d'usuaris 
         */
        GotoUsuarisPag(){
            router.push("/llistaUsuaris")
        },
         /*
        Function: GotoCrearTasca()
        
            funcio redirigeix a l'usuari al formulari de crear tasca
         */
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
    background: url('@/assets/backgroundGirona.png');
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin: 0;
    overflow-x: hidden;
    overflow-y: hidden;
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