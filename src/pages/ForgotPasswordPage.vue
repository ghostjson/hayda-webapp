<template>
  <div class="forgot-password">
    <div class="container">
      <div class="row">
        <div class="col-md-12 m-t-60">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Change Password</h5>
              <p>Enter your new password</p>
            </div>
            <div class="card-body">
              <form @submit.prevent="changePassword">
                <alert-box :error="error"></alert-box>
                <div class="form-group">
                  <label for="password">New Password</label>
                  <input
                    type="password"
                    id="password"
                    v-model="password"
                    class="form-control"
                  />
                </div>
                <div class="form-group">
                  <label for="confirm_password">Confirm Password</label>
                  <input
                    type="password"
                    id="confirm_password"
                    v-model="confirm_password"
                    class="form-control"
                  />
                </div>

                <button type="submit" class="btn btn-primary btn-sm">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AlertBox from "../components/AlertBox.vue";
import auth from "../services/auth";
export default {
  components: { AlertBox },
  name: "ForgotPasswordPage",
  data() {
    return {
      password: null,
      confirm_password: null,
      error: "",
    };
  },

  methods: {
    async changePassword() {
      if (this.password === this.confirm_password) {
        const response = await auth.changePassword(
          this.$route.params.code,
          this.password
        );

        if (response.status === 200) {
          this.$router.push({ name: "Login" });
        } else {
          this.error = "Invalid Request";
        }
      } else {
        this.error = "Both passwords should be same.";
      }
    },
  },
};
</script>
