<template>
    <div id="divfondoRegistre">
        <div id="containerRegistre">
                <div id="quadrat">
                    <div id="titol">Registre d'usuari</div>
                    <div class="container1">
                        <div class="container2"><label class="labelregistre" for="fnUsuari">Nom d'usuari</label>
                            <input class="inputregistre" id="nomUsuari" type="text" name="fnUsuari">
                        </div>
                        <div class="container2">
                            <label class="labelregistre" for="lnUsuari">Cognom d'usuari</label>
                            <input class="inputregistre" id="cognomUsuari" type="text" name="lnUsuari">
                        </div>
                    </div>
                    <div class="container1">
                        <div class="container2"><label class="labelregistre" for="emailusuari">Correu de
                                l'usuari</label>
                            <input class="inputregistre" id="emailUsuari" type="text" name="emailUsuari">
                        </div>
                        <div class="container2">
                            <label class="labelregistre" for="passwd">Contrassenya</label>
                            <input class="inputregistre" id="passwd" type="text" name="passwd">
                        </div>
                    </div>
                    <div style="display: flex; flex-direction: column; align-items: center;">
                        <select class="selectrol" id="selectRol" name="rolUsuari">
                            <option class="optionrol" value="Tecnic" selected>Tecnic</option>
                            <option class="optionrol" value="Admin">Admin</option>
                            <option class="optionrol" value="Gestor">Gestor</option>
                        </select>
                        <br>
                        <br>
                        <button class="botochulo" id="botoregistrarusuari" @click="enviarDadesRegistre()"
                            type="submit">Registrar </button>
                    </div>
                </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
// import router from '@/router';
export default {
    name: 'RegistreRegistre',
    data() {
        return {
            nomUsuari: "",
            cognomUsuari: "",
            emailUsuari: "",
            passwd: "",
            selectRol: ""
        }
    },
    methods: {
        enviarDadesRegistre() {
            var dadesUsuari = { nomUsuari: this.nomUsuari, cognomUsuari: this.cognomUsuari, email: this.emailUsuari, passwd: this.passwd, rol: this.selectRol }
            console.log(dadesUsuari)
           
            this.nomUsuari = document.getElementById("nomUsuari").value,
            this.cognomUsuari = document.getElementById("cognomUsuari").value,
            this.emailUsuari = document.getElementById("emailUsuari").value,
            this.passwd = document.getElementById("passwd").value,
            this.selectRol = document.getElementById("selectRol").value
            axios.post('http://localhost/API/' + sessionStorage.tokenUsuari + '/registrar',
                { data: { 
                    "nomUsuari": this.nomUsuari,
                    "cognomUsuari": this.cognomUsuari ,
                    "emailUsuari": this.emailUsuari, 
                    "passwd": this.passwd ,
                    "selectRol": this.selectRol ,
                    } 
                }
            ).then((response) => {
               console.log(response);
                // router.push('/LlistaTasques');
            })
        },
    }
}
</script>
<style>
body {
    margin: 0
}

@media only screen and (max-width: 920px) {
    .container1 {
        flex-wrap: wrap;
        text-align: center;
        justify-content: center;
        align-items: center;
    }

    @media only screen and (max-height: 600px) {
        #divfondoRegistre {
            min-height: 600px;
        }
    }

    .container2 {
        width: 100%;
    }
}

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
    margin: 0;
}

#containerRegistre {
    min-width: 500px;
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

.labelregistre {
    font-size: 2em;
    font-weight: 600;
}

.inputregistre {
    font-size: 1.5em;
    background-color: salmon;
}

.container2 {
    display: flex;
    flex-direction: column;
    width: 50%;
    align-items: center;
    margin: 10px;
    flex-wrap: wrap;
}

#lol {
    min-width: 500px;
    width: 100%;
    height: 100%;
}

#quadrat {
    opacity: 1;
    width: 100%;
    min-width: 500px;
    height: 100%;
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

.selectrol {
    width: 100px;
    height: 3em;
    border-radius: 10px;
    opacity: 1;
    border: 2px solid black;
    background-color: salmon;
    border: 2px solid black;
    font-weight: 700;
}


@font-face {
    font-family: porkys;
    src: url('@/assets/PORKYS_.TTF');
}

#botoregistrarusuari {
    --c: rgb(249, 249, 143);
}

.botochulo {
    --b: 3px;
    /* border thickness */
    --s: .15em;
    /* size of the corner */


    padding: calc(.05em + var(--s)) calc(.3em + var(--s));
    color: var(--c);
    --_p: var(--s);
    background:
        conic-gradient(from 90deg at var(--b) var(--b), #0000 90deg, var(--c) 0) var(--_p) var(--_p)/calc(100% - var(--b) - 2*var(--_p)) calc(100% - var(--b) - 2*var(--_p));
    transition: .3s linear, color 0s, background-color 0s;
    outline: var(--b) solid #0000;
    outline-offset: .2em;
}

.botochulo:hover,
.botochulo:focus-visible {
    --_p: 0px;
    outline-color: var(--c);
    outline-offset: .05em;
}

.botochulo:active {
    background: var(--c);
    color: #fff;
}

.botochulo {
    font-family: system-ui, sans-serif;
    font-weight: bold;
    font-size: 2rem;
    cursor: pointer;
    border: none;
    margin: .1em;
}
</style>