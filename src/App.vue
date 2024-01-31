<template>
  <div>
    {{message}}
  </div>
  <button @click="showAlert">경고</button>

</template>

<script>
  export default {
    data() {
      return {
        message: 'hi'
      }
    },
    methods:{
      showAlert(){
        alert('hello')
      }
    }
  }
</script>

<style scoped>

</style>