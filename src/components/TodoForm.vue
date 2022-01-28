<template>
  <form @submit.prevent="addNewTodo">
    <div class="input-group mb-3">
      <input type="text" class="form-control" v-model="newTodo" placeholder="Enter Todo" aria-label="Enter todo"
        aria-describedby="button-addon2" />
      <button class="btn btn-outline-secondary">
        Add
      </button>
    </div>
  </form>
</template>

<script>
  import {
    ref
  } from 'vue';
  import useTodo from '../store/useTodo.js'
  export default {
    name: 'TodoForm',
    setup: () => {
      const newTodo = ref('');

      const {
        addTodo
      } = useTodo();

      function addNewTodo() {
        addTodo(newTodo);
        newTodo.value = '';
      }

      return {
        newTodo,
        addNewTodo
      };
    }
  };
</script>

<style>
</style>