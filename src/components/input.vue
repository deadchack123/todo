<template>
  <div>
    <input
      type="text"
      autofocus
      placeholder="Введите заметку"
      v-model="value"
      @keyup.enter="addmes"
    >

    <div class="mainButton">
      <a class="button" @click="addmes">Добавить</a>
      <a class="button" @click="revNotes">Перевернуть</a>
      <router-link class="button" to="/jsonlist" tag="a">JSON</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "inputAndButton",
  data() {
    return {
      value: ""
    };
  },
  methods: {
    addmes() {
      this.$store.dispatch("addNote", this.value);
      this.value = "";
    },
    revNotes() {
      this.$store.dispatch("revNotes");
    }
  }
};
</script>


<style scoped>
</style>
