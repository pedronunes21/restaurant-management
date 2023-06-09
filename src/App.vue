<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
body,
html {
  margin: 0;
  font-family: Poppins;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  min-height: 100vh;
}
input,
button,
textarea {
  font-family: Poppins;
}
form {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 450px;
  gap: 10px;
  margin: 0 auto;
}
input {
  border: 1px solid #bbbbbb;
  border-radius: 3px;
  outline: none;
  padding: 7px 10px;
  font-size: 16px;
}
button {
  padding: 7px 10px;
  border-radius: 3px;
  font-size: 16px;
  background: #f69202;
  border: none;
  outline: none;
  font-weight: 700;
  color: white;
}
button:hover {
  cursor: pointer;
}
</style>
