<template>
  <h1>Página Actualizar</h1>
  <Estudiante :flag1="true" :flag="true" btnText="Actualizar" @selecciono="actualizar($event)" />
</template>

<script>
import Estudiante from "@/components/Estudiante.vue";
import EstudianteId from "@/components/EstudianteId.vue";
import {actualizarFachada} from "@/helpers/clienteEstudiante"

export default {
  components: {
    Estudiante,
    EstudianteId
  },
  methods: {
    async actualizar(estuBody) {
      await actualizarFachada(estuBody.id, estuBody);
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