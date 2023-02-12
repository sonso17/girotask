<template>
    <div id="divfondoRegistre">
        <div id="containerRegistre">
            <form style="width: 100%; height: 100%;" action="" method="post">
                <div id="quadrat">
                    <div id="titol">Modifica d'usuari</div>
                    <div class="container1">
                        <div class="container2"><label for="">Nom d'usuari</label>
                            <input type="text" name="nomUsuari">
                        </div>
                        <div class="container2">
                            <label for="">Cognom d'usuari</label>
                            <input type="text">
                        </div>
                    </div>
                    <div class="container1">
                        <div class="container2"><label for="">Correu de l'usuari</label>
                            <input type="text">
                        </div>
                        <div class="container2">
                            <label for="">Contrassenya</label>
                            <input type="text">
                        </div>
                    </div>
                    <div style="display: flex; flex-direction: column; text-align: center; justify-content: center; align-items: center;">
                        <select id="selectrol" name="Rol" >
                            <option value="Tecnic" selected>Tecnic</option>
                            <option value="Admin">Admin</option>
                            <option value="Gesstor">Gestor</option>
                        </select>
                        <br>
                        <br>
                        <div style="display: flex;">
                    <input type="submit" value="Actualitzar">  <input type="submit" name="" id="" value="Eliminar">
                    </div>
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

.container2 {
    display: flex;
    flex-direction: column;
    width: 50%;
    align-items: center;
    margin: 10px;
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
}

#titol {
    font-weight: 700;
    font-size: 2.5em;
    font-family: porkys;
}

.container1 {
    width: 100%;
    display: flex;
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