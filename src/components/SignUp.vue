<template>
  <div id="signup">
    <img class="logo" src="/restaurant-logo.png" alt="Restaurant Logo" />
    <h1>Sign up</h1>
    <div class="register">
      <div class="wrapper">
        <input type="text" v-model="name" placeholder="Name" />
        <input type="email" v-model="email" placeholder="Email" />
        <input type="password" v-model="password" placeholder="Password" />
        <button v-on:click="signUp" type="submit">SIGN UP</button>
        <small
          >Already has an account?
          <router-link to="/sign-in">Sign in here.</router-link></small
        >
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async signUp() {
      let result = await axios.post("http://localhost:3000/users", {
        email: this.email,
        name: this.name,
        password: this.password,
      });

      if (result.status === 201) {
        localStorage.setItem("user", JSON.stringify(result.data));
        this.$router.push({ name: "HomePage" });
      }
    },
  },
  mounted() {
    // Redirect if user is already logged in
    let user = localStorage.getItem("user");
    if (user) {
      this.$router.push({ name: "HomePage" });
    }
  },
};
</script>

<style>
#signup {
  width: 100%;
}
.logo {
  width: 100%;
  max-width: 200px;
}

.register {
  display: flex;
  align-items: center;
  justify-content: center;
}
.register .wrapper {
  max-width: 350px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
