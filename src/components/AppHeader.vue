<template>
  <div id="appheader">
    <div class="wrapper">
      <div class="s1">
        <img src="/restaurant-logo.png" alt="Restaurant Logo" />
      </div>
      <div class="s2">
        <router-link to="/">Home</router-link>
        <router-link to="/add-restaurant">Add Restaurant</router-link>
        <a v-on:click="logout" href="#">Logout</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
  methods: {
    logout() {
      localStorage.removeItem("user");
      this.$router.push({ name: "SignIn" });
    },
  },
};
</script>

<style>
#appheader {
  display: flex;
  height: 60px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
  padding: 5px 20px;
}

#appheader .wrapper {
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
}

#appheader .wrapper .s1 {
  height: 100%;
}
#appheader .wrapper .s1 img {
  height: 100%;
  width: 100%;
}

#appheader .wrapper .s2 {
  display: flex;
  gap: 20px;
}
#appheader .wrapper .s2 a {
  color: black;
  text-decoration: none;
}
</style>
