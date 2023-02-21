<template>
    <div id="llistaUsuarisGeneral">
        <br>
        <div id="llistaUsuarisTitol">Llista d'Usuaris:</div>
        <br>
        <br>
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
        getUsuaris() {
            axios.get("http://localhost/API/xv4NotybJhmL9h53300gxRsBzwS84LkU7wUi28XB52CJM114jbNKUcy15Ky9fQ92/getAllUsers")
                .then(resultat => {
                    this.usuarisJSON = resultat.data
                    console.log(resultat.data)
                });
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
    background: url('https://s27363.pcdn.co/wp-content/uploads/2016/10/Girona-Spain-1.jpg.optimal.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    width: 100%;
    height: 700px;
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
}

#NomUsuariT {
    font-size: 27px;
    width:15%;
    margin-left: 50px;
    
}

#emailUsuariT {
    font-size: 27px;
    width:25%
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