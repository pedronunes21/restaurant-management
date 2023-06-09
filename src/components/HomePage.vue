<template>
  <AppHeader />
  <div class="homepage">
    <h1>Restaurants</h1>
    <table border="1">
      <tr>
        <td>Name</td>
        <td>Contact</td>
        <td>Address</td>
        <td>Actions</td>
      </tr>
      <tr v-for="item in restaurants" :key="item.id">
        <td>{{ item.name }}</td>
        <td>{{ item.contact }}</td>
        <td>{{ item.address }}</td>
        <td>
          <router-link :to="'/update-restaurant/' + item.id"
            >Update</router-link
          >
          <button class="delete-btn" v-on:click="deleteRestaurant(item.id)">
            Delete
          </button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import AppHeader from "./AppHeader.vue";
export default {
  name: "HomePage",
  data() {
    return {
      name: "",
      restaurants: [],
    };
  },
  components: {
    AppHeader,
  },
  methods: {
    async deleteRestaurant(id) {
      let result = await axios.delete(
        `http://localhost:3000/restaurants/${id}`
      );
      if (result.status === 200) {
        this.$router.go();
      } else {
        alert("An error occured!");
      }
    },
  },
  async mounted() {
    let user = localStorage.getItem("user");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    } else {
      this.name = JSON.parse(user).name;

      let result = await axios.get("http://localhost:3000/restaurants");
      this.restaurants = result.data;
    }
  },
};
</script>

<style>
table {
  margin: 0 auto;
}
td {
  width: 250px;
  text-align: left;
}

.delete-btn {
  background: transparent;
  color: #551aa9;
  font-weight: 400;
  text-decoration: underline;
}
</style>
