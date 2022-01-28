<template>
  <div class="container">
    <h1>Vue 3 Todo App</h1>
    <todoform />
    <todolist />
  </div>

</template>

<script>
  import todoform from './components/TodoForm.vue'
  import todolist from './components/TodoList.vue'
  export default {
    name: "App",
    components: {
      todoform,
      todolist
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