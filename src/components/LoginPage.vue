<template>
  <div class="card">
    <h1>Login</h1>

    <label for="username">Username:</label>
    <br/>
    <input v-model="username" type="text" id="username" name="username" placeholder="Username">
    <p class="noti">{{errRequireUsername}}</p>

    <label for="password">Password:</label>
    <br/>
    <input v-model="password" type="password" id="password" name="password" placeholder="Password">
    <p class="noti">{{errRequirePassword}}</p>
    <p class="noti">{{errIncorrectUsername}}</p>
    
    <button @click="login" :disabled='disabled'>Login</button>
    
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

  watch: {
    username() {
      if (this.username.length) {
        this.errRequireUsername = ''
      } else {
        this.errRequireUsername = 'Username is require'
      }
    },
    password() {
      const password = "123"
      const username = "ducht"
      if (this.password.length && this.username.length) {
        this.errRequirePassword = ""
        if (this.password !== password || this.username !== username) {
          this.errIncorrectUsername='User is incorrect'
        } else {
          this.errIncorrectUsername = ''
        }
      } else {
        this.errRequirePassword = "Password is require"
        this.errIncorrectUsername = ''
      }
    }
  },
  methods: {
    login() {
      console.log("username: ", this.username)
      console.log("password: ", this.password)
    }
  },
  computed: {
    disabled() {
      if (this.errRequirePassword.length || this.errRequireUsername) {
        return true
      }
      return false
    },
    opacity() {
      if (this.errRequirePassword.length || this.errRequireUsername) {
        return 0.7
      }
      return 1
    }
  }
}
</script>

<style>
.card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    max-width: 300px;
    margin: auto;
    text-align: center;
    font-family: arial;
    padding: 1rem 0;
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
    margin-left: -8rem;
  }
  .card input {
    /* border: 1px; */
    border: 2px solid #eee;
    width: 70%;
    border-radius: 4px;
    padding: .6em .6em;
  }
  .noti {
    color: red;
    font-size: small;
  }
</style>
