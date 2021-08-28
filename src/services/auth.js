import Api from "../modules/Api";

export default {
  async login(credentials) {
    try {
      let response = await Api.post("/auth/login", credentials);

      localStorage.setItem("expiry", new Date().getTime().toString());
      localStorage.setItem("Token", response.data.access_token);
      localStorage.setItem("User", JSON.stringify(response.data.user));

      return response.status;
    } catch (e) {
      console.log(e);
    }
  },

  updateUser() {
    Api.get("/auth/user").then((user) => {
      localStorage.setItem("User", JSON.stringify(user.data.data));
    });
  },

  async updateRemoteUser(user) {
    return await Api.post("/auth/user/update", user);
  },

  isLogged() {
    if (localStorage.getItem("expiry") === null) return false;

    let minutes =
      (new Date().getTime().toString() - localStorage.getItem("expiry")) /
      60000;
    if (minutes < 30 && localStorage.getItem("Token") !== null) {
      return true;
    } else {
      localStorage.removeItem("Token");
      localStorage.removeItem("User");
      return false;
    }
  },

  async logout() {
    localStorage.removeItem("Token");
    localStorage.removeItem("User");
    await Api.get("auth/logout").finally(() => this.$router.push("/login"));
  },

  getUser() {
    return JSON.parse(localStorage.getItem("User"));
  },

  async register(form) {
    try {
      let response = await Api.post("/auth/register", form);
      localStorage.setItem("expiry", new Date().getTime().toString());
      localStorage.setItem("Token", response.data.access_token);
      localStorage.setItem("User", JSON.stringify(response.data.user));
      return response.status;
    } catch (e) {
      return e.response.status;
    }
  },

  async isEmailExist(email) {
    try {
      let response = await Api.post("/auth/is_exist", {
        email: email,
      });
      return response.data;
    } catch (e) {
      return e.response.status;
    }
  },

  async fetchUser() {
    return await Api.get("/auth/user");
  },

  async sendEmailOTP() {
    return await Api.post("/auth/user/send_verify");
  },

  async verifyEmailOTP(otp) {
    return await Api.post("/auth/user/verify", { verification_code: otp });
  },
};
