<template>
  <ul class="list-group">
    <li v-for="(todo, index) in todos" :key="todo.id" class="list-group-item d-flex justify-content-between">
      <h3 :class="{ 'text-decoration-line-through': todo.done }" @click="toggleDone(todo)">{{todo.content}}</h3>

      <div>
        <button class="btn btn-outline-success" @click="toggleDone(todo)"><i
            class="bi bi-check-square-fill"></i></button>
        <button @click="removeTodo(index)" class="btn btn-outline-danger"><i class="bi bi-x-circle-fill"></i></button>
      </div>

    </li>
  </ul>
</template>

<script>
  import useTodo from '../store/useTodo.js'
  export default {
    name: 'TodoList',
    setup: () => {
      const {
        getTodos,
        removeTodo,
        toggleDone
      } = useTodo();

      return {
        todos: getTodos(),
        removeTodo,
        toggleDone
      };
    }
  };
</script>

<style>
</style>