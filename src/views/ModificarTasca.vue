<template>
    <div id="formCrearTascaGeneral">
        <form style=" min-height: 100vh; width: 100%; height: 100vh; display: flex; flex-wrap: wrap;" action="">
            <div id="container1">
            <label for="nomTasca" id="nomTascaTitol">Nom de la tasca</label>
            <input type="text" id="nomTasca" name="nomTasca">
            <label for="descripcioTasca" id="descripcioTascaTitol">Descripcio de la tasca</label>
            <input type="text" id="descripcioTasca" name="descripcioTasca">
        </div>
            <div id="container2">
                <div id="formulari">
                    <div style="display: flex; justify-content: space-around; width: 100%;">
                            <div style="display:flex; flex-direction: column; " >
                                <label  style="width: 100%;" for="">Usuari responsable</label>
                                <br>
                                <br>
                                <select style="width: 100%;" name="" id="">
                                    <option value="Elvis">Elvis</option>
                                </select>
                            </div>
                            <div style="display:flex; flex-direction: column;">
                                <label for="">Prioritat</label>
                                <br>
                                <br>
                                <select id="selectprioritat" name="Selectprioritat" >
                            <option value="1" selected>1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                        </select>
                            </div>
                    </div>
                    <div style="display: flex;justify-content: space-around; width: 100%;">
                            <div style="display:flex; flex-direction: column;">
                                <label for="">Status de la tasca</label>
                                <br>
                                <br>
                                <select id="selectstatus" name="Selectstatus" >
                            <option value="Fet" selected>Fet</option>
                            <option value="En proces">En proces</option>
                            <option value="Per fer">Per fer</option>
                        </select>
                            </div>
                            <div style="display:flex; flex-direction: column;">
                                <label for="">Data Venciment</label>
                                <br>
                                <br>
                                <input type="text" name="" id="">
                            </div>
                    </div>
                    <div style="display: flex;">
                    <input type="submit" value="Actualitzar">  <input type="submit" name="" id="" value="Eliminar">
                    </div>
                </div>
                
            </div>
        </form>
    </div>

</template>

<style>
#formCrearTascaGeneral {
    opacity: 1;
    background: url('https://s27363.pcdn.co/wp-content/uploads/2016/10/Girona-Spain-1.jpg.optimal.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    display: flex;
    position: relative;
    width: 100%;
    height: 100%;
    margin: 0;
    min-height: 100vh;
    height: fit-content;
    /* flex-direction: column; */
}
#container1{
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-around;
    color: black;
    text-align: center;
    align-items: center;
    width: 50%;
    min-width: 400px;
}
#container2{
    width:50%;
    height: 100%;
    /* background-color: gray; */
    justify-content: center;
    text-align: center;
    display: flex;
    align-items: center;
}
#nomTascaTitol{
    /* position: absolute; */
    left: 0%;
}

#formulari{
    width: 70%;
    height: 70%;
    background-color: gray;
    justify-content: space-around; 
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    font-size: 0.75em;
}

#descripcioTascaTitol{

}

#descripcioTasca{
height:  30%;
}
</style>