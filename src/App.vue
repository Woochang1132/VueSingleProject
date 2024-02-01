<template>
  <!-- form에서 발생 한 이벤트를 감지할 수 있어야 한다. -->
  <form action="" @submit.prevent="submitForm">
    <div>
      <label for="userId">ID:</label>
      <input id="userId" type="text" v-model="username">
    </div>

    <div>
      <label for="password">PW:</label>
      <input id="password" type="text" v-model="password">
    </div>
    <button type="submit">로그인</button>
  </form>
</template>

<script>
import axios from 'axios'
import { ref } from 'vue';

  export default {
/*     
    data() {
      return {
        username: '',
        password: '',
      }
    },
    methods:{
      submitForm(){
        const data = {
          username: this.username,
          password: this.password,
        }

        axios.post('https://jsonplaceholder.typicode.com/users/', data)
        .then(response => {
          console.log(response);
        })
        console.log("제출됨")
      }
    } 
  */
    setup() {
      //data
      let username = ref('');
      let password = ref('');

      //methods
      let submitForm = () => {
        axios.post('https://jsonplaceholder.typicode.com/users/', {
          username: username.value,
          password: password.value
        }).then(reponse => {
          console.log(reponse);
        } )
      }
      return {username, password, submitForm}
    },  
  }
</script>

<style scoped>

</style>