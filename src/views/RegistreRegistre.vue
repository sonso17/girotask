<template>
    <div id="divfondoRegistre">
        <div id="containerRegistre">
            <form style="width: 100%; height: 100%;" action="http://localhost/API/AaBbCc/registrar" method="post">
                <div id="quadrat">
                    <div id="titol">Registre d'usuari</div>
                    <div class="container1">
                        <div class="container2"><label class="labelregistre" for="fnUsuari">Nom d'usuari</label>
                            <input class="inputregistre" type="text" name="fnUsuari">
                        </div>
                        <div class="container2">
                            <label class="labelregistre" for="lnUsuari">Cognom d'usuari</label>
                            <input class="inputregistre" type="text" name="lnUsuari">
                        </div>
                    </div>
                    <div class="container1">
                        <div class="container2"><label class="labelregistre" for="emailusuari">Correu de l'usuari</label>
                            <input class="inputregistre" type="text" name="emailUsuari">
                        </div>
                        <div class="container2">
                            <label class="labelregistre" for="passwd">Contrassenya</label>
                            <input class="inputregistre" type="text" name="passwd">
                        </div>
                    </div>
                    <div style="display: flex; flex-direction: column;">
                        <select class="selectrol" name="rolUsuari" >
                            <option value="Tecnic" selected>Tecnic</option>
                            <option value="Admin">Admin</option>
                            <option value="Gestor">Gestor</option>
                        </select>
                        <br>
                        <br>
                        <button type="submit">Registrar usuari</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>

</script>

<style>

#divfondoRegistre {
    opacity: 1;
    background: url('https://s27363.pcdn.co/wp-content/uploads/2016/10/Girona-Spain-1.jpg.optimal.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    position: relative;
    align-items: center;
    justify-items: center;
    justify-content: center;
    align-content: center;
    text-align: center;
    width: 100%;
    height: 100vh;
    background-color: green;
    margin: 0;
}

#containerRegistre {
    position: relative;
    background-color: gray;
    align-items: center;
    align-content: center;
    opacity: 1;
    height: 95%;
    width: 70%;
    display: flex;
    flex-direction: column;
}

.labelregistre{
    font-size: 2em;
}
.inputregistre{
    font-size: 1.5em;
}
.container2 {
    display: flex;
    flex-direction: column;
    width: 50%;
    align-items: center;
    margin: 10px;
    flex-wrap: wrap;
}

#quadrat {
    opacity: 1;
    width: 100%;
    height: 100%    ;
    align-content: space-around;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: space-around;
    flex-wrap: wrap;
}

#titol {
    font-weight: 700;
    font-size: 2.5em;
    font-family: porkys;
}

.container1 {
    width: 100%;
    display: flex;
    /* flex-wrap: wrap; */
}

#selectrol {
    width: 100px;
    height: 3em;
    border-radius: 10px;
    opacity: 1;
    border: 2px solid black;
    background-color: white;
}


@font-face {
    font-family: porkys;
    src: url('@/assets/PORKYS_.TTF');
}
</style>