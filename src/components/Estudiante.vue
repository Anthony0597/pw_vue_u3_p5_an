<template>
  <div class="container">
    <div class="cabecera">
      <h1>Componente Estudiante</h1>
      <input v-model="id" type="text" />
      <button @click="consultarPorId">Consultar</button>
    </div>

    <div class="form">
      <h2>Estudiante</h2>
      <p type="C&eacute;dula:"><input v-model="cedula" type="text" /></p>
      <p type="Nombre:"><input v-model="nombre" type="text" /></p>
      <p type="Apellido:"><input v-model="apellido" type="text" /></p>
      <p type="G&eacute;nero:"><input v-model="genero" type="text" /></p>
      <p type="Nacionalidad:"><input v-model="nacionalidad" type="text" /></p>
      <p type="Direcci&oacute;n:"><input v-model="direccion" type="text" /></p>
      <p type="Tel&eacute;fono:"><input v-model="telefono" type="text" /></p>
      <p type="Email:"><input v-model="email" type="text" /></p>
      <p type="Fecha de nacimiento:">
        <input v-model="fechaNacimiento" type="datetime-local" />
      </p>
      <div class="bot">
        <button @click="insertar">Insertar</button>
      </div>
    </div>
  </div>
</template>

<script>
import { consultarEstudianteFachada } from "../helpers/clienteEstudiante.js";
import { insertarFachada } from "../helpers/clienteEstudiante.js";

export default {
  data() {
    return {
      id: null,
      cedula: null,
      nombre: null,
      apellido: null,
      genero: null,
      direccion: null,
      nacionalidad: null,
      telefono: null,
      email: null,
      fechaNacimiento: null,
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
        cedula: this.cedula,
        nombre: this.nombre,
        apellido: this.apellido,
        genero: this.genero,
        direccion: this.direccion,
        nacionalidad: this.nacionalidad,
        telefono: this.telefono,
        email: this.email,
        fechaNacimiento: this.fechaNacimiento,
      };
      await insertarFachada(estuBody);
    },
  },
};
</script>

<style scoped>
p:before {
  content: attr(type);
  display: block;
  margin: 10px 2px;
  font-size: 16px;
  color: #5a5a5a;
}
.container {
  display: grid;
  justify-content: center;
  align-items: center;
}

.form {
  width: 340px;
  height: 700px;
  background-color: #e6e6e6;
  border-radius: 15px;
  padding: 20px 30px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  box-shadow: 0 0 20px -10px #000;
}

.bot {
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  height: 25px;
  width: 75px;
  color: #414141;
  background-color: #59abe3;
  border: 0;
  border-radius: 5px;
}
.cabecera{
  margin-bottom: 20px;
}
</style>