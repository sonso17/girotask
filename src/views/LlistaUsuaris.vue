<template>
    <div id="llistaUsuarisGeneral">
       
        <div id="llistaUsuarisTitol">Llista d'Usuaris:</div>
        
        <img src="@/assets/useradd.png" alt=""  class="icones" @click="GotoCrearUsuari()">

            <div id="titolsllistausuaris">
            
        <div id="NomUsuariT">Nom d'usuari:</div>
        <div id="emailUsuariT">Email:</div>
        <div id="rolUsuariT">Rol: </div>
        <div id="apiKeyUsuari"> API-KEY: </div>
        <div id="idUsuari">ID: </div>
    </div>
        <div id="llistaUsuaris">
            
            <infoUsuari v-for="(usuari, i) in usuarisJSON" :key="i" :usuari="usuari">

            </infoUsuari>
        </div>
    </div>
</template>
<script>
import router from "@/router";
import infoUsuari from '../components/infoUsuari.vue'
import axios from 'axios';
export default {
    name: 'llistaUsuaris',
    components: {
        infoUsuari
    },
    data() {
        return {
            usuarisJSON: {},
            // identificador: "1"
        }
    },
    methods: {
        /*
        Function: getUsuaris()

            funcio que llista tots els usuaris en pantalla
        */
        getUsuaris() {
            axios.get("http://girotask.daw.institutmontilivi.cat/API/"+ sessionStorage.tokenUsuari +"/getAllUsers")
                .then(resultat => {
                    this.usuarisJSON = resultat.data
                });
        },
        /*
        Function: GotoCrearUsuari()

            funcio que redirigeix al formulari de crear usuari
        */
        GotoCrearUsuari(){
            router.push("/registrar")
        }
    },
    created(){
        this.getUsuaris();
    }
}

</script>

<style>
#llistaUsuarisGeneral {
    opacity: 1;
    background: url('@/assets/backgroundGirona.png');
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    width: 100%;
    height: 100vh;
    justify-content: space-evenly;
    text-align: center;
    align-items: center;
    align-items: center;
    display: flex;
    flex-direction: column;
}
#titolsllistausuaris{
    display:flex; 
    justify-content: space-around; 
    min-width: 1110px;
    width: 60%;
}


#llistaUsuarisTitol {
    /* background-color: red; */
    font-size: 36px;
    font-family: porkys;
}
@font-face {
    font-family: porkys;
    src: url('@/assets/PORKYS_.TTF');
}

#NomUsuariT {
    font-size: 27px;
    width:15%;
    margin-left: 50px;
    
}

#emailUsuariT {
    font-size: 27px;
    width:25%;
    
}


#rolUsuariT {
    font-size: 27px;
    width:15%;
    margin-left: 15px;
}

#llistaUsuaris {
    /* background-color: aqua; */
    overflow: hidden;
    overflow-y: scroll;
    height: 400px;
    min-width: 1110px;
    width: 60%;
}
@media only screen and (max-width: 1150px)
{
    #titolsllistausuaris{
        min-width: 1150px;
      
    }
    #llistaUsuaris{
        overflow-x:scroll;  
    }
}
#apiKeyUsuari{
    font-size: 27px;
    width:20%
}

#idUsuari{
    font-size: 27px;
    width:15%;
}

</style>