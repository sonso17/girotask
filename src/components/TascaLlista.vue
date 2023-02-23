<template>
    <div @click.stop="barralateralPopup(tasca.TascaID, tasca.Descripcio, tasca.Nom)" class="tasca" :id= "tasca.TascaID">
        <div style="display:flex">
            <div class="marca"></div>
            <div class="titoltasca">{{ tasca.Nom }}</div>
            <div v-if="estatus=='Per fer'" class="marca" id="marcastatusred"></div>
            <div v-else-if="estatus=='En proces'" class="marca" id="marcastatusorange"></div>
            <div v-else-if="estatus=='Fet'" class="marca" id="marcastatusgreen"></div>
        </div>
        <div style="text-align: center;" id="datainici">Data Inici: {{ tasca.DataInici.substring(0,10) }}</div>
        <div style="text-align: center;" id="datavenciment">Data de venciment: {{ tasca.DataVenciment.substring(0,10) }}</div>
        <br>
        <br>
        <div id="descripcio">
            {{ tasca.Descripcio }}
        </div>
        <div>
            Estat de la tasca: <b>{{ tasca.Estat }}</b>
        </div>

        <div id="container3">
            <div> ID Usuari Assignat: {{ tasca.Tecnic }}</div>
            <div>Prioritat: {{ tasca.Prioritat }}</div>
        </div>

    </div>
</template>

<script>
export default {
    name: "veureTasca",
    props: ["tasca"],
    data(){
    return {
      estatus: ""
    }
  },
    methods: {
        /*
        Function: barralateralPopup()

            Funcio que fa apareixe la barra lateral un cop clicada una tasca amb les seves dades
        */
        barralateralPopup(id, descripcio , titol) {
            document.getElementById("filtre").style.right = "0px";
            document.getElementById("nomfiltre").innerHTML = descripcio
            document.getElementById("nomtitolfiltre").innerHTML = titol
            document.getElementById("hiddenid").value = id
        },
        /*
        Function: marcaestatus()

        Funcio que cambia el requadre d'estat de la tasca de color
        */
        marcaestatus(){
            this.estatus = this.tasca.Estat
        }
    },
    created(){
    this.marcaestatus()
  }
}

</script>

<style>
.marca {
    height: 30px;
    width: 30px;
    /* background-color: green; */
}

#marcastatusgreen {
    background-color: green;
    height: 30px;
    width: 30px;
}
#marcastatusorange {
    background-color: orange;
    height: 30px;
    width: 30px;
}
#marcastatusred {
    background-color: red;
    height: 30px;
    width: 30px;
}

#descripcio {
    height: 50%;
    margin-left: 10px;
    margin-right: 10px;
}

#container3 {
    justify-content: space-between;
    display: flex;
    margin-left: 10px;
    margin-right: 10px;
}

#datainici{
 /* font-size: 25px; */
}

#datavenciment{

}
/* Estils de un component */
.tasca {
    height: 300px;
    width: 400px;
    background-color: rgb(217, 217, 105);
    position: relative;
    margin-top: 20px;
    margin-left: 30px;
    margin-right: 30px;
    margin-bottom: 0;
    justify-content: center;
    text-align: center;
}
.tasca:hover{
    cursor: pointer;
    background-color: rgb(136, 136, 32);
}
.titoltasca {
    width: 90%;
    text-align: center;
    font-size: 2em;
    font-family: porkys;
}

@font-face {
    font-family: porkys;
    src: url('@/assets/PORKYS_.TTF');
}
</style>

