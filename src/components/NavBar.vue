<template>
  <div>
    <router-link to="/guardar">Guardar</router-link>
    <router-link to="/eliminar">Eliminar</router-link>
    <router-link to="/consultar">Consultar</router-link>
    <router-link to="/actualizar">Actualizar</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style>
div a{
    color: #0954b6;
    margin: 0px 10px;
    font-weight: bold;
    border: solid;
    border-radius: 10px;
    background-color: #e6e6e6;
    padding: 10px 10px;
}
.router-link-exact-active{
    background-color: #898787;
}
</style>