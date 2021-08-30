<template>
  <div class="verify">
    <div class="container">
      <div class="row">
        <div class="col-md-12 m-t-60">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Verify Email</h5>
              <p>Enter the code we just sent to your email.</p>
            </div>
            <div class="card-body">
              <form @submit.prevent="checkOTP">
                <alert-box :error="error"></alert-box>
                <div class="form-group">
                  <label class="form-label" for="otp">OTP</label>
                  <input
                    type="number"
                    min="111111"
                    max="999999"
                    class="form-control"
                    v-model="otp"
                  />
                </div>
                <button type="submit" class="btn btn-primary btn-sm">
                  Submit
                </button>
                <a class="btn btn-secondary btn-sm" href="/verify"
                  >Resend OTP</a
                >
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
  name: "VerfiyPage",
  data() {
    return {
      otp: null,
      error: "",
    };
  },
  methods: {
    async checkOTP() {
      if (this.otp != null) {
        const response = await auth.verifyEmailOTP(this.otp);

        console.log(response.data);
        if (response === undefined) {
          this.error = "Given OTP is incorrect.";
        } else if (response.status === 200) {
          const user = await auth.fetchUser();
          localStorage.setItem("User", JSON.stringify(user.data));
          this.$router.push({ name: "Home" });
        }
      }
    },
    async sendOTP() {
      const response = await auth.sendEmailOTP();
      if (response.data.message === "Already verified") {
        this.$router.push({ name: "Home" });
      }
    },
  },
  mounted() {
    this.sendOTP();
  },
};
</script>

<style scoped>
.verify {
  min-height: 70vh;
}
</style>
