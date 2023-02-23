<template>
    <div @click="GoToUsuari(usuari.UsuariID)" class="infoUsuariGeneral" :id="usuari.UsuariID" >
        <div id="nomUsuari">{{ usuari.Nom }} {{ usuari.Cognom }}</div>
        <div id="emailUsuari">{{ usuari.Email }}</div>
        <div id="rolUsuari">{{ usuari.Rol }}</div>
        <div id="ApiKeyUsuari">{{ usuari.ApiKey }}</div>
        <div id="IdUsuari">{{ usuari.UsuariID }}</div>
    </div>
</template>
<script>
import router from "@/router";
export default{
    name: "infoUsuari",
    props: ["usuari"],
    methods: {
        GoToUsuari(id) {
            console.log(id)
            // console.log(usuari)
            router.push("/modificarUsuari/"+id)
        }
    }
}
</script>

<style>
.infoUsuariGeneral {
    background-color:  rgb(217, 217, 105);
    border: 1px solid black;
    height: 4%;
    padding: 2em 1em;
    margin: 1em;
    border-radius: 20px;
    font-size: 20px;
    display: flex;
    justify-content: space-around;
}
.infoUsuariGeneral:hover{
    background-color: rgba(136, 136, 32) ;
    cursor: pointer;
}
@media only screen and (max-width: 1150px)
{
    .infoUsuariGeneral{
        min-width: 1150px;
      width: 1110px;
    }
}

#nomUsuari {
    width:15%
}

#emailUsuari {
    width:20%
}

#rolUsuari {
    width:10%
}

#ApiKeyUsuari{
    width:20%
}
#IdUsuari{
    width:10%
}
</style>