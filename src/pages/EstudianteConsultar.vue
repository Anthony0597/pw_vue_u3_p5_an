<template>
  <h1>Página Consultar</h1>
  <EstudianteId :flag="true" btnText="Consultar" @selecciono="insertar($event)" />
  <Estudiante :flag="false" :flag1="false" btnText="consultar" @selecciono="insertar($event)" />
</template>

<script>
import { consultarEstudianteFachada } from '@/helpers/clienteEstudiante';
import EstudianteId from "@/components/EstudianteId.vue";
import Estudiante from "../components/Estudiante.vue";
export default {
  components: {
    Estudiante,
    EstudianteId
  },
  methods: {
    async consultar(id) {
      await consultarEstudianteFachada(id);
    },
  },
  data() {
    return {
      id: null,
    };
  },
};
</script>

<style>
</style>