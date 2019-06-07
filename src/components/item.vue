<template>
  <div class="col">
    <ul class="list">
      <li v-for="(note, index) in notes" v-bind:key="index" v-bind:class="{'is-Done': note.isDone}">
        <p>{{ note.id }}) {{ note.title }}</p>
        <div class="iconButton">
          <router-link :to="{ name: 'listId', params: { id: note.id }}">
            <img src="https://img.icons8.com/ios/50/000000/pencil-tip.png">
          </router-link>
          <a>
            <img @click="doneNode(note)" src="https://img.icons8.com/ios/50/000000/lock.png">
          </a>
          <a>
            <img @click="delNote(note.id)" src="https://img.icons8.com/ios/50/000000/waste.png">
          </a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "todoitem",
  data() {
    return {
      value: ""
    };
  },
  computed: {
    notes() {
      return this.$store.getters.paginatedData;
    }
  },
  methods: {
    delNote(index) {
      this.$store.dispatch("delNote", index);
    },
    doneNode(note) {
      this.$store.dispatch("doneNode", note);
    }
  }
};
</script>


<style scoped>
</style>
