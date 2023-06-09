<template>
  <AppHeader />
  <div class="addreataurant">
    <h1>Add Restaurant</h1>
    <form @submit.prevent="createRestaurant">
      <input type="text" v-model="name" placeholder="Name" />
      <input type="text" v-model="contact" placeholder="Contact" />
      <input type="text" v-model="address" placeholder="Address" />
      <button type="submit">CREATE RESTAURANT</button>
    </form>
  </div>
</template>

<script>
import AppHeader from "./AppHeader.vue";
import axios from "axios";
export default {
  name: "AddRestaurant",
  components: {
    AppHeader,
  },
  data() {
    return {
      name: "",
      contact: "",
      address: "",
    };
  },
  mounted() {
    let user = localStorage.getItem("user");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
  },
  methods: {
    async createRestaurant() {
      let result = await axios.post("http://localhost:3000/restaurants", {
        name: this.name,
        contact: this.contact,
        address: this.address,
      });
      console.log(result);
      if (result.status === 201) {
        alert(`Restaurant ${result.data.name} created successfully!`);
      } else {
        alert(`Error`);
      }
    },
  },
};
</script>
