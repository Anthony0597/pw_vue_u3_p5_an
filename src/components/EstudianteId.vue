<template>
  <div class="container">
    <div class="form">
      <p type="Id:"><input v-model="id" type="text" /></p>
      <div class="bot">
        <button v-if="flag" @click="enviar">{{ btnText }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: null,
    };
  },
  props: {
    btnText: "",
    flag:false
  },
  methods: {
    enviar() {
      this.$emit("ingresa", {
        id: this.id,
      });
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
  height: 120px;
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
.cabecera {
  margin-bottom: 20px;
}
</style>