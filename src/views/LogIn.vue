<template>
    <div id="divfondoLogIn">
        <div id="containerLogIn">
            <div style="margin-top:15px;font-size: 2em; font-weight: 700;">GiroTask</div>
            <div style="display: flex; flex-direction: column;"><label class="labelLogin" for="emailUsuari">Correu</label>
                <form action="http://localhost/API/AaBbCc/LogIn" method="post">
                    <input class="inputlogin" type="text" name="emailUsuari">
                    <br>
                    <br>
                    <label class="labelLogin" for="passwd">Contrassenya</label>
                    <br>
                    <input class="inputlogin" type="text" name="passwd">
                    <br>
                    <br>
                    <button id="buttonlogin" type="submit" value="Log In">Log in</button>
                </form>
            </div>

        </div>
    </div>
</template>

<script>
// import axios from 'axios'

// axios({
//     method: 'get',
//     url: `http://girotask.daw.institutmontilivi.cat`,
//     // withCredentials: false,
//     params: {
//     //   access_token: SECRET_TOKEN,
//     },
//   })
//   .then(response => {
//     // handle success
//     console.log(response.data)
//   })
//   .catch(error => {
//     // handle error
//     console.log(error)
//   })

</script>

<style>
body {
    width: 100%;
    height: 100%;
    margin: 0;
}

#divfondoLogIn {
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

#containerLogIn {
    border-radius: 20px;
    position: relative;
    background-color: gray;
    align-items: center;
    align-content: center;
    opacity: 1;
    height: 40%;
    width: 40%;
    display: flex;
    flex-direction: column;
    min-height: 300px;
    min-width: 290px;
}


.inputlogin{
    font-size: 1.5em;
}
.labelLogin {
    font-size: 2em;

}

#buttonlogin {
    background-color: salmon;
  color: #fff;
  border: none;
  border-radius: 5px;
  height: 2rem;
  width: 40%;
  padding: 0.5rem;
  font-size: 1.25rem;
  cursor: pointer;
}
</style>