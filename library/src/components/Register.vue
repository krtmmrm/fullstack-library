<template>
  <vs-row vs-justify="center">
    <vs-col type="flex" vs-justify="center" vs-align="center" vs-lg="3" vs-sm="6" vs-xs="10">
      <vs-card actionable>
        <div slot="header">
          <h3>Register</h3>
        </div>
        <div class="centerx">
          <vs-row vs-justify="center">
            <vs-input class="input" size="large" type="email" name="email" v-model="email" placeholder="Email"/>
            <br>
            <vs-input class="input" size="large" type="password" name="password" v-model="password" placeholder="Password"/>
          </vs-row>
           <vs-row vs-justify="center">
            <vs-button size="large" type="gradient" color="primary" @click="register">Register</vs-button>
          </vs-row>
        </div>
      </vs-card>
    </vs-col>
  </vs-row>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        console.log(response)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
.error {
  color: red;
}
.input{
  padding: 0 0 10pt 0;
}
</style>
