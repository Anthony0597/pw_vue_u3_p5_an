<template>
  <h1>Página Guardar</h1>
  <Estudiante  btnText="Guardar" @selecciono="insertar($event)" />
</template>

<script>
import { insertarFachada } from '@/helpers/clienteEstudiante';
import Estudiante from "../components/Estudiante.vue";
export default {
  components: {
    Estudiante
  },
  methods:{
    async insertar(estuBody) {
      await insertarFachada(estuBody);
    },
  },
  
};
</script>

<style>
</style>