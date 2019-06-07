<template>
  <div class="mainButton">
    <input 
        type="text"
        autofocus
        v-model='value' 
        :placeholder= note.title
    >
    <router-link to="/todolist/1">
    <button
        class="button"
        @click="editmes({id: id, value: value})">
        Сохранить
        </button>
        </router-link><br>
    <router-link
        class="button"
        to="/todolist/1">
        Назад
        </router-link><br>
    </div>
</template>

<script>
export default {
  name: 'editList',
  data () {
    return {
      value: ''
    }
  },
  props: ['id'],
  computed:{
    note(){
            return this.$store.getters.notes.find(not => not.id == this.id)
        }
  },
  methods:{
    editmes(payload){
            this.$store.dispatch('editNote', payload);
        }
  }
}
</script>


<style scoped>

</style>
