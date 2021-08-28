<template>
  <div>
    <spinner-component v-if="loading"></spinner-component>
    <div class="container">
      <div class="row">
        <div class="col-md-12 m-t-60">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Profile</h5>
            </div>
            <div class="card-body">
              <form @submit="updateProfile">
                <alert-box :error="error"></alert-box>
                <div
                  v-if="success !== ''"
                  class="alert alert-success"
                  role="alert"
                  style="z-index: 4 !important;"
                >
                  {{ success }}
                </div>
                <h6>Personal Information</h6>
                <div class="form-group">
                  <label for="zip_code">Zip Code</label>
                  <input
                    required
                    type="number"
                    autocomplete="__away"
                    name="zip_code"
                    class="form-control"
                    v-model="profile.zip_code"
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
                    required
                    type="number"
                    autocomplete="__away"
                    name="weight"
                    class="form-control"
                    v-model="profile.weight"
                    id="weight"
                  />
                </div>
                <div class="form-group">
                  <label for="age">Age</label>
                  <input
                    required
                    type="number"
                    autocomplete="__away"
                    name="age"
                    class="form-control"
                    v-model="profile.age"
                    id="age"
                  />
                </div>
                <div class="form-group">
                  <label for="gender">Gender</label>
                  <select
                    required
                    id="gender"
                    name="gender"
                    class="form-control"
                    v-model="profile.gender"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <button class="btn btn-primary" type="submit">Update</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AlertBox from "../components/AlertBox";
import auth from "../services/auth";
import SpinnerComponent from "../components/SpinnerComponent";

export default {
  name: "ProfilePage",
  components: { SpinnerComponent, AlertBox },
  data() {
    return {
      error: "",
      success: "",
      loading: false,
      profile: {
        age: null,
        email: null,
        gender: null,
        height: null,
        name: null,
        weight: null,
        zip_code: null,
      },
      height: {
        feet: 0,
        inches: 0,
      },
    };
  },
  methods: {
    async updateProfile(e) {
      e.preventDefault();
      this.loading = true;
      try {
        this.profile.height = this.height.feet * 12 + this.height.inches;
        await auth.updateRemoteUser(this.profile);
        this.success = "Profile is successfully updated";
      } catch (e) {
        console.log(e.response.error());
        this.error = "Something went wrong. Try later";
      }
      auth.updateUser();
      this.loading = false;
    },
    async fetchProfile() {
      this.loading = true;
      let response = await auth.fetchUser();
      this.profile = response.data.data;
      this.loading = false;

      this.height = {
        feet: Math.floor(this.profile.height / 12),
        inches: this.profile.height % 12,
      };
    },
  },
  created() {
    this.fetchProfile();
  },
};
</script>
