<template>
  <div class="card">
    <h1>Login</h1>

    <!-- <InputText v-model="username" v-bind:props="propsUserName"/> -->
    <label for="username" class="label-input">Username:</label>
    <br />
    <InputText v-bind:props="propsUserName" v-on:model-value="getTextFromComponent" />
    <p v-if="errRequireUsername.length" class="noti">{{errRequireUsername}}</p>

    <!-- <InputText v-model="username" v-bind:props="propsPassword" /> -->
    <label for="password" class="label-input">Password:</label>
    <br />
    <InputText v-bind:props="propsPassword" v-on:model-value="getTextFromComponent" />
    <p v-if="errRequirePassword.length" class="noti">{{errRequirePassword}}</p>
    <p v-if="errIncorrectUsername.length" class="noti">{{errIncorrectUsername}}</p>
    
    <button @click="login" :disabled='disabled'>Login</button>
    <p>Already account? <router-link class="routerLink" to="/register">Register</router-link></p>
    
  </div>
</template>

<script>
import InputText from '../../components/children-components/InputText.vue'
export default {
  components: {
    InputText
  },
  data() {
    return {
      username: '',
      password: '',
      errRequireUsername: '',
      errRequirePassword: '',
      errIncorrectUsername: '',
      propsUserName: {},
      propsPassword: {}
    }
  },

  mounted() {
    this.errRequireUsername = "Username is require"
    this.errRequirePassword = "Password is require"
    this.errIncorrectUsername = ""
    this.propsUserName = {
      label: "Username",
      placeholder: "Username",
      idAndName:'username',
      type: "text",
    }
    this.propsPassword = {
      label: "Password",
      placeholder: "Password",
      idAndName: 'password',
      type: "password",
    }
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
    },
    getTextFromComponent(temp, idAndName) {
      if (idAndName === "username") {
        this.username = temp
      } else {
        this.password = temp
      }
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

.noti {
  color: red;
  font-size: small;
}

.routerLink {
  color: red;
  cursor: pointer;
}
</style>
