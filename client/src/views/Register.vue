<template>
  <div>
    <h1>Hello this is Register page</h1>

    <input type="email" name="email" placeholder="Email" v-model="email" />
    <br />
    <input
      type="password"
      name="password"
      placeholder="Password"
      v-model="password"
    />
    <br />
    <button @click="register">Register</button>
  </div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
export default {
  name: "register",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async register() {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password,
      });
      console.log("response: ", response.data);
    },
  },
};
</script>
