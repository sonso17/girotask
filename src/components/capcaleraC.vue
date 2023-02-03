<template>
    <div id="capcaleraGeneral">
        <div id="capLogo"></div>
        <div id="capNomP"></div>
        <div id="capInfoUsuari">
            <div id="capNomUsuari">{{ nomUsuari }}</div>
            <div id="capRolUsuari">{{ rolUsuari }}</div>
        </div>
    </div>
</template>

<script>

</script>

<style>
#capcaleraGeneral{
    position: absolute;
    top: 0%;
    height: 9%;
    width: 100%;
    /* top: 91%; */
    left: 0%;
    background-color: #FE7373;
}
#capLogo{
    position: relative;
    height: 97%;
    width: 5%;
    left: 1%;
    top: -2%;
    background-image: url('../assets/LogoDefinitiu.png');
    background-repeat: no-repeat;
    background-size: cover;
}

#capNomP{
    
}
</style>