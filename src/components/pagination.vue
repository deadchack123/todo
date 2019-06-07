<template>
  <div class="secondButton">
                <button 
                    class="button"
                    v-bind:class="{'disabled': pageNumber === 0}"
                    :disabled="pageNumber === 0"
                    @click="prevPage"
                    > <- </button>
                <button 
                    class="button"
                    v-for="(button, index) in buttons"
                    v-bind:key="`b${index}`"
                    v-bind:class="{'is-link': buttonActive(button)}"
                    @click="nowPage(button)"
                    >{{ button }}</button>
                <button 
                    class="button"
                    v-bind:class="{'disabled': pageNumber >= pageCount - 1}"
                    :disabled="pageNumber >= pageCount - 1"
                    @click="nextPage"
                    >-></button>
        </div>
</template>

<script>
export default {
  name: "pagination",
  methods: {
        nextPage(){
            this.$store.dispatch('nextPage');
            let z = this.pageNumber + 1
            this.$router.push({path: `/todolist/${z}`})
        },
        prevPage(){
            this.$store.dispatch('prevPage');
            let x = this.pageNumber + 1
            this.$router.push({path: `/todolist/${x}`})
        },
        nowPage(button){
            this.$store.dispatch('nowPage', button)
            this.$router.push({path: `/todolist/${button}`})
        },
        buttonActive(button){
            return this.$store.state.pageNumber === button - 1
        }
    },
    computed: {
        pageNumber(){
            return this.$store.getters.pageNumberCount
        },
        pageCount(){
            return this.$store.getters.pageCount
        },
        buttons(){
            return this.$store.getters.pageButton
        },
        
    }
};
</script>


<style scoped>
</style>
