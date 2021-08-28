<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 m-t-60">
        <div class="card">
          <div class="card-header">
            <h5 class="card-title">Login</h5>
          </div>
          <div class="card-body">
            <form @submit="loginSubmit">
              <alert-box :error="error"></alert-box>
              <div class="form-group">
                <label class="form-label">Email</label>
                <input
                  v-model="credential.email"
                  type="email"
                  class="form-control"
                  placeholder="example@example.com"
                  required=""
                />
              </div>
              <div class="form-group">
                <label class="form-label">Password</label>
                <input
                  v-model="credential.password"
                  type="password"
                  class="form-control"
                  placeholder="*********"
                  required=""
                />
                <p style="margin-top: 10px">
                  <small
                    ><a href="#" @click="forgotPassword"
                      >Forgot Password</a
                    ></small
                  >
                </p>
              </div>

              <button type="submit" class="btn btn-primary">Login</button>

              <p style="margin-top: 10px">
                Don't have an account?
                <router-link to="/register">Register</router-link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AlertBox from "../components/AlertBox";
import auth from "../services/auth";

export default {
  name: "RegisterPage",
  components: { AlertBox },
  data() {
    return {
      credential: {
        email: "",
        password: "",
      },
      error: "",
    };
  },
  methods: {
    async loginSubmit(e) {
      e.preventDefault();
      let status = await auth.login(this.credential);
      console.log(status);

      if (status === 200) {
        await this.$router.push({ name: "Home" });
        window.location.reload();
      } else {
        this.error = "Email or password is incorrect";
      }
    },

    async forgotPassword() {
      if (
        this.credential.email === null ||
        this.credential.email === "" ||
        this.credential.email === undefined
      ) {
        this.error = "Enter your email to send link.";
      } else {
        const response = await auth.sendForgotPasswordLink(
          this.credential.email
        );
        if (response.status === 200) {
          this.error = "Check email to reset password.";
        }
      }
    },
  },
  mounted() {
    if (auth.isLogged()) {
      this.$router.push({ name: "Home" });
    }
  },
};
</script>
