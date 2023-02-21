<template>
   
    <div @click="barralateralPopout()" class="divfondoLlistaTasques"  >
        <div id="funcionalitats">
            <img src="@/assets/Usuaris.png" alt=""  class="icones">
            <img src="@/assets/CrearTasca.png" alt=""   class="icones">
        </div>
        <div id="div-tasques">
            <TascaLlista v-for="(tasca, i) in TasquesJSON" :key="i" :tasca="tasca">

            </TascaLlista>
            <!-- {{ TasquesJSON }} -->
        </div>

        <div id="filtre">
            <button id="botoentrartasca">Entra a la tasca</button>
            <br>
            <br>
            <br>
            <label id="nomfiltre"> </label>
        </div>
    </div>
</template>

<script>
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
            usuariJSON: {}
        }

    },
    methods: {
        getUsuari(){
            axios.get("http://localhost/API/xv4NotybJhmL9h53300gxRsBzwS84LkU7wUi28XB52CJM114jbNKUcy15Ky9fQ92/selectOneUser/1")
                .then(resultat => {
                    this.usuariJSON = resultat.data
                    console.log(resultat.data)
                    localStorage.setItem('Token', resultat.data);
                });
        },
        getTasques() {
            axios.get("http://localhost/API/xv4NotybJhmL9h53300gxRsBzwS84LkU7wUi28XB52CJM114jbNKUcy15Ky9fQ92/seleccionarTasquesUsuari/1")
                .then(resultat => {
                    this.TasquesJSON = resultat.data
                    console.log(resultat.data)
                });
        },
        barralateralPopout() {
            console.log("-210")
                document.getElementById("filtre").style.right = "-200px";
        }, 
        extreureIDUsuari(){
            // var idUsuari = this.$cookie.getCookie('usuariIDGT');
            
            // console.log(idUsuari)
        }
    },
    created(){
        this.getTasques();
        this.getUsuari();
        this.extreureIDUsuari();
    }
}
</script>

<style>
.icones {
    width: 50px;
    height: 50px;
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




#funcionalitats {
    width: 100%;
    height: 50px;
    margin: 10px;
    text-align: left;
}

#div-tasques {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

}
</style>