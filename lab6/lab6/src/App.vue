<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Head msg="Lab 6 - Aplikacja Vue 1" />
    <ShoppingList hed="Lista Zakupów" />
  </div>
</template>

<script>
import Head from "./components/Head.vue";
import ShoppingList from "./components/Table.vue";

export default {
  name: "App",
  components: {
    Head,
    ShoppingList,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
