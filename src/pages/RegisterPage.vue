<template>
  <div class="container">
    <spinner-component v-if="loader"></spinner-component>
    <div class="row">
      <div class="col-md-12 m-t-60">
        <div class="card">
          <div class="card-header">
            <h5 class="card-title">Register</h5>
          </div>
          <div class="card-body">
            <!-- Form 1 -->
            <form @submit="nextForm($event)" v-if="current_form === 'form1'">
              <div class="form-group">
                <label class="form-label">Username</label>
                <input
                  type="text"
                  v-model="registerForm.name"
                  class="form-control"
                  placeholder="imjohn"
                  required=""
                />
              </div>
              <div class="form-group">
                <label class="form-label">Email</label>
                <input
                  type="email"
                  v-model="registerForm.email"
                  class="form-control"
                  placeholder="example@example.com"
                  required=""
                  v-on:focusout="checkEmail"
                />
                <small v-if="email_exist_message" class="text-danger"
                  >Already registered email. Try
                  <a href="/login">login</a></small
                >
              </div>
              <div class="form-group">
                <label class="form-label">Password</label>
                <input
                  v-on:focusout="passSet"
                  type="password"
                  v-model="registerForm.password"
                  class="form-control"
                  placeholder="*********"
                  required=""
                />
                <small v-if="password_set" class="text-danger"
                  >Password should be at least 8 characters.</small
                >
              </div>
              <div class="form-group">
                <label class="form-label">Confirm Password</label>
                <input
                  type="password"
                  v-model="registerForm.confirm_password"
                  class="form-control"
                  placeholder="*********"
                  required=""
                />
              </div>

              <div class="custom-control custom-checkbox mb-4">
                <input
                  required
                  type="checkbox"
                  class="custom-control-input"
                  id="customCheck1"
                />
                <label class="custom-control-label" for="customCheck1"
                  >By signing in, you agree to our
                  <router-link to="/terms">Terms & Conditions</router-link>
                  and
                  <router-link to="/terms">Privacy Statement</router-link>
                </label>
              </div>

              <button
                type="submit"
                class="btn btn-primary"
                :disabled="!correct_email"
              >
                Register
              </button>

              <p style="margin-top: 10px">
                Already have an account?
                <router-link to="/login">login</router-link>
              </p>
            </form>
            <!-- End Form 1 -->
            <!-- Form 2 -->
            <div v-if="current_form === 'form2'">
              <div class="form-group">
                <input
                  type="email"
                  value="test@example.com"
                  style="display: none"
                />
                <input type="password" value="1234" style="display: none" />
              </div>
              <div class="form-group">
                <label for="zip_code">Zip Code</label>
                <input
                  type="number"
                  autocomplete="__away"
                  name="zip_code"
                  class="form-control"
                  v-model="registerForm.zip_code"
                  id="zip_code"
                />
              </div>
              <div class="form-group">
                <label for="height">Height (inches)</label>
                <div class="row">
                  <div class="col-md-6">
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <div class="input-group-text">Feet</div>
                      </div>
                      <input
                        type="number"
                        v-model="height.feet"
                        class="form-control"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <div class="input-group-text">Inches</div>
                      </div>
                      <input
                        type="number"
                        class="form-control"
                        v-model="height.inches"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label for="weight">Weight (pounds)</label>
                <input
                  type="number"
                  autocomplete="__away"
                  name="weight"
                  class="form-control"
                  v-model="registerForm.weight"
                  id="weight"
                />
              </div>
              <div class="form-group">
                <label for="age">Age</label>
                <input
                  type="number"
                  autocomplete="__away"
                  name="age"
                  class="form-control"
                  v-model="registerForm.age"
                  id="age"
                />
              </div>
              <div class="form-group">
                <label for="gender">Gender</label>
                <select
                  id="gender"
                  name="gender"
                  class="form-control"
                  v-model="registerForm.gender"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <button
                type="button"
                class="btn btn-primary"
                @click="registerFormSubmit"
              >
                Register
              </button>
            </div>
            <!-- End Form 2 -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Auth from "../services/auth";
import SpinnerComponent from "../components/SpinnerComponent";

export default {
  name: "RegisterPage",
  components: { SpinnerComponent },
  data() {
    return {
      registerForm: {
        name: "",
        email: "",
        password: "",
        confirm_password: "",
        zip_code: "",
        height: "",
        weight: "",
        age: "",
        gender: "",
      },
      height: {
        feet: null,
        inches: null,
      },
      current_form: "form1",
      loader: false,
      correct_email: false,
      email_exist_message: false,
      password_set: false,
    };
  },
  methods: {
    nextForm(e) {
      e.preventDefault();

      // password check
      if (this.registerForm.password.length < 8) {
        this.password_set = true;
        return;
      }

      if (this.current_form === "form1") {
        this.current_form = "form2";
      }
    },
    async checkEmail() {
      let is_exist = await Auth.isEmailExist(this.registerForm.email);
      if (is_exist === "TRUE") {
        // email exist
        this.email_exist_message = true;
        this.correct_email = false;
      } else {
        // email not exist
        this.correct_email = true;
        this.email_exist_message = false;
      }
    },
    passSet() {
      if (this.registerForm.password.length < 8) {
        this.password_set = true;
      } else {
        this.password_set = false;
      }
    },
    async registerFormSubmit() {
      this.registerForm.height = this.height.feet * 12 + this.height.inches;

      let status = await Auth.register(this.registerForm);

      // password check
      if (this.registerForm.password.length < 8) {
        this.password_set = true;
        return;
      }

      if (status === 200) {
        this.loader = true;
        await this.$router.push({ name: "Home" });
        this.loader = false;
        location.reload();
      } else {
        this.error = "Error in registration";
      }
    },
  },
};
</script>
