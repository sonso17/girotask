<template>
  <option :value="usuari.UsuariID">{{ usuari.Nom }}</option>
</template>

<script>
export default {
   /*
        Function: getUsuaris()

            agafa i per cada usuari genera un option passant-li el nom i l'ID
    */
  name: "usuariLlista",
  props: ["usuari"],
};
</script>
