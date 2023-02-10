<template>
    <div id="llistaUsuarisGeneral">
        <div id="llistaUsuarisTitol">Llista d'Usuaris:</div>
        <div id="NomUsuariT">Nom de l'usuari:</div>
        <div id="emailUsuariT">Email:</div>
        <div id="rolUsuariT">Rol: </div>
        <div id="llistaUsuaris">
            <infoUsuari v-for="i in 6" :key="i">

            </infoUsuari>
        </div>
    </div>
</template>
<script>
import infoUsuari from '../components/infoUsuari.vue'
export default {
    name: 'llistaUsuaris',
    components: {
        infoUsuari
    }
}

</script>

<style>
#llistaUsuarisGeneral {
    opacity: 1;
    background: url('https://s27363.pcdn.co/wp-content/uploads/2016/10/Girona-Spain-1.jpg.optimal.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    position: relative;
    width: 100%;
    height: 700px;
    background-color: green;
    margin: 0;
}

#llistaUsuarisTitol {
    /* background-color: red; */
    position: absolute;
    height: 5%;
    width: 22%;
    top: 9%;
    left: 8%;
    font-size: 36px;
}

#NomUsuariT {
    position: absolute;
    height: 5%;
    width: 22%;
    top: 18%;
    left: 4%;
    font-size: 27px;
}

#emailUsuariT {
    position: absolute;
    height: 5%;
    width: 22%;
    top: 18%;
    left: 24%;
    font-size: 27px;
}


#rolUsuariT {
    position: absolute;
    height: 5%;
    width: 22%;
    top: 18%;
    left: 48%;
    font-size: 27px;
}

#llistaUsuaris {
    position: absolute;
    height: 69%;
    width: 88%;
    top: 23%;
    left: 6%;
    background-color: aqua;
    overflow:scroll;
    overflow-x:hidden;
}
</style>