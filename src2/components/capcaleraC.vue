<template>
    <div id="capcaleraGeneral">
        <img src="@/assets/LogoDefinitiu.png" id="capLogo" @click="GotoHome()">
        <img src="@/assets/girotaskLletres.png" id="capNomP">
        
        <div id="capInfoUsuari">
            <div id="capNomUsuari"> {{  }}</div>
            <div id="capRolUsuari"> {{  }}</div>
        </div>
    </div>
</template>

<script>
import router from '@/router';

export default {
    name:"capcaleraC",
    props:["infoUsuari"],
    methods: {
    GotoHome(){
        router.push("/LlistaTasques")
    }
    }
}
</script>

<style>
#capcaleraGeneral {
    position: relative;
    display: flex;
    padding: 22px;
    justify-content: space-between;
    background: #FE7373;
    color: white;
    font-size: 25px;
}

#capLogo {
    position: relative;
    height: 97%;
    width: 7%;
    font-size: 25px;
}
#capLogo:hover{
    cursor: pointer;
}
#capNomP {
    position: relative;
    height: 97%;
    width: 15%;
}


#capInfoUsuari {
    position: relative;
    height: 97%;
    width: 15%;
    font-size: 25px;
}
</style>