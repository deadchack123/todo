<template>
  <div class="container">
    <h1>Todo list</h1>
    <input-and-button></input-and-button>
    <todo-item></todo-item>
    <pagination></pagination>
    </div>
</template>

<script>
import todoitem from './item'
import inputAndButton from './input'
import pagination from './pagination'

export default {
  name: "mainPage",
  components: {
        'todo-item': todoitem,
        'input-and-button': inputAndButton,
        'pagination': pagination
    },
    props: ['page'],
    created (){
      this.$store.dispatch('setPagPage', this.page)      
    }
};
</script>


<style scoped>
</style>
