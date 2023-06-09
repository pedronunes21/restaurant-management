<template>
  <AppHeader />
  <div class="updatereataurant">
    <h1>Update Restaurant</h1>
    <form @submit.prevent="updateRestaurant">
      <input type="text" v-model="name" placeholder="Name" />
      <input type="text" v-model="contact" placeholder="Contact" />
      <input type="text" v-model="address" placeholder="Address" />
      <button type="submit">UPDATE RESTAURANT</button>
    </form>
  </div>
</template>

<script>
import AppHeader from "./AppHeader.vue";
import axios from "axios";
export default {
  name: "UpdateRestaurant",
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
  methods: {
    async updateRestaurant() {
      const id = this.$route.params.id;
      let result = await axios.put(`http://localhost:3000/restaurants/${id}`, {
        name: this.name,
        contact: this.contact,
        address: this.address,
      });
      console.log(result);
      if (result.status === 200) {
        alert(`Restaurant ${result.data.name} updated successfully!`);
      } else {
        alert(`Error`);
      }
    },
  },
  async mounted() {
    let user = localStorage.getItem("user");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    } else {
      const id = this.$route.params.id;
      let restaurant = (
        await axios.get(`http://localhost:3000/restaurants/${id}`)
      ).data;
      this.name = restaurant.name;
      this.contact = restaurant.contact;
      this.address = restaurant.address;
      console.log(restaurant);
    }
  },
};
</script>
