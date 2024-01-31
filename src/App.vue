<template>
  <form action="">
    <div>
      <label for="userId">ID:</label>
      <input id="userId" type="text" v-model="username">
    </div>

    <div>
      <label for="password">PW:</label>
      <input id="password" type="text" v-model="password">
    </div>
    <button type="submit">제출하기</button>
  </form>
</template>

<script>
  export default {
    data() {
      return {
        username: '',
        password: '',
      }
    },
  }
</script>

<style scoped>

</style>