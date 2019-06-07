<template>
  <div>
    <router-link class="button" to="/todolist" >
      <div class="mainButton">
        <a class="button">Назад</a>
      </div>
    </router-link>
    <br>
    {{ JSON.stringify(notes) }}
  </div>
</template>

<script>
export default {
  name: "jsonList",
  data() {
    return {
      qwe: { name: "dsfdf", id: 1 }
    };
  },
  computed: {
    notes() {
      return this.$store.getters.notes;
    }
  },
  
};
</script>


<style scoped>
</style>
