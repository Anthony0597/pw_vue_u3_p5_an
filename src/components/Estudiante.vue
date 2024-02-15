<template>
  <h1>Componente Estudiante</h1>
  <input v-model="id" type="text" />
  <button @click="consultarPorId">Consultar</button>
  <input v-model="nombre" type="text" />
  <button @click="insertar">insertar</button>
  <input v-model="apellido" type="text">
</template>

<script>
import { consultarEstudianteFachada } from "../helpers/clienteEstudiante.js";
import { insertarFachada } from "../helpers/clienteEstudiante.js";

export default {
  data() {
    return {
      id: null,
      nombre: null,
      apellido: null
    };
  },
  methods: {
    async consultarPorId() {
      const data = await consultarEstudianteFachada(this.id);
      console.log("Test de componente");
      console.log(data);
      this.nombre = data.nombre;
    },
    async insertar() {
      const estuBody = {
        cedula: "1758693256",
        nombre: "Maria",
        apellido: this.apellido,
        genero: "F",
        direccion: "Conocoto",
        nacionalidad: "ecuatoriana",
        telefono: "0961223647",
        email: "example@example.com",
        fechaNacimiento: "2010-08-14T00:00:00",
      };
      await insertarFachada(estuBody);
    },
  },
};
</script>

<style>
</style>