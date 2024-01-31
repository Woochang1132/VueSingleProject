<template>
  <AppHeader></AppHeader>
  <div>
    {{message}}
  </div>
  <button @click="showAlert">경고</button>

</template>

<script>
  import AppHeader from './components/AppHeader.vue'

export default {
  components: {
    // '컴포넌트 이름' : 컴포넌트 내용
    //'AppHeader' : AppHeader
    AppHeader
  },  
  data() {
    return {
      message: '앱 헤더 컴포넌트'
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