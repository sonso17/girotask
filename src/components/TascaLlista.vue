<template> 
<div class="tasca">
                <div style="display:flex">
                    <div class="marca"></div>
                    <div class="titoltasca">Titol</div>
                    <div class="marca" id="marcastatus"></div>
                </div>
                <div style="text-align: center;">Data de venciment: 01/01/2000</div>
                <br>
                <br>
                <div id="descripcio">
                    Aquest es un exemple de descripcio en el qual vul veure com queda l'overflow del text de una
                    descripció d'exemple

                </div>
                <!-- <br> -->
                <div id="container3">
                    <div>Bernat Bigas</div>
                    <div>Prioritat: 9</div>
                </div>
            </div>
</template>

<script>

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
    background-color: yellow;
    position: relative;
    margin-top: 20px;
    margin-left: 30px;
    margin-right: 30px;
    margin-bottom: 0;
    justify-content: center;
    text-align: center;
}
.titoltasca{
    width: 90%;
    text-align: center;
    font-size: 2em;
}
</style>

