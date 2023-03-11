<template>
  <div>
    <button class="bth bth-primary" @click="sendRequest">
          click
    </button>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
      data:null
    }
  },
  methods: {
    async sendRequest(){
      const body = {
        login:this.data.login,
        password:this.data.password
      }
      this.data = await axios.post('https://127.0.0.1:3000/user/create', body, {
        headers: {
          'Access-Control-Allow-Origin': '*'
        },
      })
        console.log(this.data)
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
