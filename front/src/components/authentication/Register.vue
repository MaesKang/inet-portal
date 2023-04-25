<template>
  <div id="app">
    <!-- <img src="src/assets/itnd.png" width="250px"> -->
    <h3>ADD TEST</h3>
    <form>
      <div class="container" >
      <label for="uname"><b>Name</b></label>
      <input v-model="name" type="email" placeholder="" name="uname" required>
      <br>
      <label for="email"><b>Email</b></label>
      <input v-model="email" type="email" placeholder="" name="email" required>
      <br>
      <label for="pass"><b>Password</b></label>
      <br>
      <button type="submit">ADD</button>
      </div>
    </form>


  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      name:'',
      email:'',
      password:''
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


input[type=email], input[type=password] {
  width: 25%;
  padding: 10px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

/* Set a style for all buttons */
button {
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 10%;
}

/* Add a hover effect for buttons */
button:hover {
  opacity: 0.8;
}


/* Add padding to containers */
.container {
  padding: 16px;
}

/* The "Forgot password" text */
span.psw {
  float: right;
  padding-top: 16px;
}


</style>
