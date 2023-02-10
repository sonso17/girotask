<template>
    <div id="infoUsuariGeneral">
        <div id="nomUsuari">{{ nomUsuari }}Nom Usuari</div>
        <div id="emailUsuari">{{ emailUsuari }}Email Usuari</div>
        <div id="rolUsuari">{{ rolUsuari }}Rol Usuari</div>
    </div>
</template>
<script>

</script>

<style>
#infoUsuariGeneral {
    background-color: white;
    border: 1px solid black;
    height: 4%;
    padding: 2em 1em;
    margin: 1em;
    border-radius: 20px;
    font-size: 20px;
}

#nomUsuari {
    position: absolute;
    left: 6%;
    /* top: 0%; */
}

#emailUsuari {
    position: absolute;
    left: 30%;
}

#rolUsuari {
    position: absolute;
    left: 58%;
}
</style>