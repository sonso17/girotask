<template>
    <div id="veureTascaGeneral">
        <div id="nomTascaT">Nom de la tasca</div>
        <div id="DescripcioTascaRequadre">
            <div id="DescripcioTasca">
                Descripcio Tasca
            </div>
        </div>
        <div id="comentariT">
            Comentari:
        </div>
        <div id="comentariRequadre">
            <div id="comentariText">
                Això és un comentari
            </div>
        </div>
        <div id="altresParametres">
            <div id="usuariResponsableT">Usuari responsable:</div>
            <div id="usuariResponsable"> NomUsuari </div>
            <div id="statusT">Status de la tasca:</div>
            <div id="status">Pendent</div>
            <div id="prioritatT">Prioritat:</div>
            <div id="prioritat">5</div>
            <div id="dataVencimentT">Data Venciment:</div>
            <div id="dataVenciment">14-04-2023</div>
            <a href="/editar"><button id="editarTascaButton">Editar Tasca</button></a>
        </div>
    </div>
</template>

<style>
#veureTascaGeneral {
    opacity: 1;
    background: url('https://s27363.pcdn.co/wp-content/uploads/2016/10/Girona-Spain-1.jpg.optimal.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    position: relative;
    width: 100%;
    height: 100vh;
    background-color: green;
    margin: 0;
}

#nomTascaT {
    background-color: aqua;
    position: absolute;
    height: 6%;
    width: 22%;
    font-size: 42px;
    left: 14%;
    top: 5%;
}

#DescripcioTascaRequadre {

    background-color: yellow;
    position: absolute;
    height: 34%;
    width: 39%;
    left: 7%;
    top: 15%;
    border-radius: 20px;
}

#DescripcioTasca {
    position: absolute;
    font-size: 25px;
    background-color: red;
    height: 84%;
    width: 92%;
    left: 4%;
    top: 8%;

}

#comentariT {
    background-color: aqua;
    position: absolute;
    height: 6%;
    width: 22%;
    font-size: 42px;
    left: 14%;
    top: 53%;
}

#comentariRequadre {
    background-color: yellow;
    position: absolute;
    height: 25%;
    width: 39%;
    left: 7%;
    top: 63%;
    border-radius: 20px;

}

#comentariText {
    position: absolute;
    font-size: 25px;
    background-color: red;
    height: 84%;
    width: 92%;
    left: 4%;
    top: 8%;
}

#altresParametres {
    position: absolute;
    height: 71%;
    width: 38%;
    top: 10%;
    left: 55%;
    background-color: gray;
    border-radius: 30px;
}
/*parametres com nom usuari responsable, prioritat,etc*/

#usuariResponsableT {
    position: absolute;
    left: 10%;
    top: 13%;
    height: 7%;
    width: 47%;
    font-size: 30px;
    background-color: red;

}

#usuariResponsable {
    position: absolute;
    left: 24%;
    top: 23%;
    height: 6%;
    width: 20%;
    font-size: 24px;
    background-color: red;

}

#statusT {
    position: absolute;
    left: 13%;
    top: 39%;
    height: 7%;
    width: 43%;
    font-size: 30px;
    background-color: red;
}

#status {
    position: absolute;
    left: 24%;
    top: 50%;
    height: 6%;
    width: 20%;
    font-size: 24px;
    background-color: red;

}

#prioritatT {
    position: absolute;
    left: 65%;
    top: 13%;
    height: 7%;
    width: 25%;
    font-size: 30px;
    background-color: red;
}

#prioritat {
    position: absolute;
    left: 72%;
    top: 23%;
    height: 7%;
    width: 13%;
    font-size: 24px;
    background-color: red;

}

#dataVencimentT {
    position: absolute;
    left: 60%;
    top: 39%;
    height: 7%;
    width: 36%;
    font-size: 30px;
    background-color: red;
}

#dataVenciment {
    position: absolute;
    left: 66%;
    top: 50%;
    height: 6%;
    width: 25%;
    font-size: 24px;
    background-color: red;
}

#editarTascaButton{
    position: absolute;
    left: 44%;
    top: 65%;
    height: 6%;
    width: 25%;
    font-size: 24px;
    color: white;
    background-color: blue;
    border-radius: 10px;
}
</style>