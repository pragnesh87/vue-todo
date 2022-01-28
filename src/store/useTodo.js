import { reactive, readonly, computed } from "vue";

const todo = reactive([]);

const getters = {
    getTodos: () => {
      return computed(() => todo);
    },
  };

const actions = {
    addTodo: (item) => {
      todo.push({
          id: Date.now(),
          done: false,
          content: item.value
      });
    },
    removeTodo: (item) => {
        todo.splice(item, 1);      
    },
    toggleDone(todo) {
      todo.done = !todo.done;
    }
  };

export default () => ({
    state: readonly(todo),
    ...getters,
    ...actions,
});