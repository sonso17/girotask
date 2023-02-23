<template>
    <div @click.stop="barralateralPopup()" class="tasca" :id= "tasca.TascaID">
        <div style="display:flex">
            <div class="marca"></div>
            <div class="titoltasca">{{ tasca.Nom }}</div>
            <div class="marca" id="marcastatus"></div>
        </div>
        <div style="text-align: center;">Data Inici: {{ tasca.DataInici }}</div>
        <div style="text-align: center;">Data de venciment: {{ tasca.DataVenciment }}</div>
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
    methods: {
        barralateralPopup() {
            document.getElementById("filtre").style.right = "0px";
            var id = document.getElementById(this).id;
            console.log(id)
            // document.getElementById("nomfiltre").innerHTML = ;
        }
    }
}

</script>

<style>
.marca {
    height: 30px;
    width: 30px;
}

.marcastatus {
    background-color: green;
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
    background-color: rgba(136, 136, 32);
}
.titoltasca {
    width: 90%;
    text-align: center;
    font-size: 2em;
}
</style>

