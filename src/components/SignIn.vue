<template>
  <div id="signin">
    <img class="logo" src="/restaurant-logo.png" alt="Restaurant Logo" />
    <h1>Sign in</h1>
    <div class="login">
      <form>
        <input type="email" v-model="email" placeholder="Email" />
        <input type="password" v-model="password" placeholder="Password" />
        <button v-on:click="login" type="submit">SIGN IN</button>
        <small
          >Doesn't have an account?
          <router-link to="/sign-up">Sign up here.</router-link></small
        >
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SignIn",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      let result = await axios.get(
        `http://localhost:3000/users?email=${this.email}&password=${this.password}`
      );
      console.log(result);
      if (result.data) {
        localStorage.setItem("user", JSON.stringify(result.data[0]));
        this.$router.push({ name: "HomePage" });
      } else {
        alert("User or password incorrect!  ");
      }
    },
  },
};
</script>

<style>
#signin {
  width: 100%;
}

.logo {
  width: 100%;
  max-width: 200px;
}

.login {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
