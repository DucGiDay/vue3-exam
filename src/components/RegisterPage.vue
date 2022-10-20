<template>
  <div class="card">
    <h1>Register</h1>

    <label for="">Email:</label>
    <br />
    <input v-model="email" type="text" placeholder="Full name">
    <br/>

    <label for="">Full name:</label>
    <br />
    <input v-model="fullName" type="text" placeholder="Full name">
    <br/>

    <label for="username">Username:</label>
    <br />
    <input v-model="username" type="text" id="username" name="username" placeholder="Username">
    <br/>

    <label for="password">Password:</label>
    <br />
    <input v-model="password" type="password" id="password" name="password" placeholder="Password">
    <button @click="login" :disabled='disabled'>Login</button>
    <nav>Already account? <router-link class="routerLink" to="/login">Login</router-link></nav>

  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      errRequireUsername: '',
      errRequirePassword: '',
      errIncorrectUsername: ''
    }
  },
  mounted() {
    this.errRequireUsername = "Username is require"
    this.errRequirePassword = "Password is require"
    this.errIncorrectUsername = ""
  },
  methods: {
    login() {
      console.log("username: ", this.username)
      console.log("password: ", this.password)
    }
  }
}
</script>

<style>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 350px;
  margin: auto;
  text-align: center;
  font-family: arial;
  padding: 1rem 0;
  position: relative;
}


.card button {
  border: none;
  outline: 0;
  padding: 12px;
  color: white;
  background-color: red;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
  width: 70%;
  font-size: 18px;
}

.card button:hover {
  opacity: 0.7;
}

label {
  position: absolute;
  left: 13%;
  /* right: inherit; */
}

.card input {
  border: 2px solid #eee;
  width: 70%;
  border-radius: 4px;
  padding: .6em .6em;
  margin: .5rem 0 1.5rem;
}

.noti {
  color: red;
  font-size: small;
}
.routerLink{
  color: red;
  cursor: pointer;
}
</style>
