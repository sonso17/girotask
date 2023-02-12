<template>
    <input type="checkbox" name="|||" id="checkboxdesplegable" style="display: none" onchange="checkdesplegable()">
    <div id="divfondoLlistaTasques">
        <div id="funcionalitats">
            <!-- <img src="usuaris.png" alt="" class="icones"> -->
            <!-- <img src="tasques.png" alt="" class="icones"> -->
        </div>
        <div id="div-tasques">
            <TascaLlista v-for="(tasca, i) in TasquesJSON" :key="i" :item="tasca">

            </TascaLlista>
            <!-- {{ TasquesJSON }} -->
        </div>

        <div id="filtre"></div>
    </div>
    <label for="checkboxdesplegable" id="desplegable">|||</label>

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
            // identificador: "1"
        }

    },
    methods: {
        getTasques() {
            axios.get("http://localhost/API/AaBbCc/seleccionarTasquesUsuari/1")
                .then(resultat => {
                    this.TasquesJSON = resultat.data
                    console.log(resultat.data)
                });
        },
        checkdesplegable() {
            if (!document.getElementById("checkdesplegable").checked)
                document.getElementById("filtre").style.right = "-200px";
            else {
                document.getElementById("filtre").style.right = "0px";
            }
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
    height: 50;
    margin: 5px
}

#divfondoLlistaTasques {
    opacity: 1;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin: 0;
    overflow-x: hidden;
}

#filtre {
    position: fixed;
    width: 200px;
    height: 100%;
    top: 0px;
    right: -200px;
    background-color: red;
    transition: right 0.7s;
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
#checkdesplegable:checked~#desplegable {
    right: 200px;
}

#checkdesplegable:checked~#filtre {
    right: 200px;
}

#funcionalitats {
    width: 100%;
    height: 50px;
    margin: 10px;
}

#div-tasques {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

}
</style>