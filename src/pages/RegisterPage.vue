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
                                <input type="text" v-model="registerForm.name" class="form-control" placeholder="imjohn"
                                       required="">
                            </div>
                            <div class="form-group">
                                <label class="form-label">Email</label>
                                <input type="email" v-model="registerForm.email" class="form-control"
                                       placeholder="example@example.com" required="">
                            </div>
                            <div class="form-group">
                                <label class="form-label">Password</label>
                                <input type="password" v-model="registerForm.password" class="form-control"
                                       placeholder="*********" required="">
                            </div>
                            <div class="form-group">
                                <label class="form-label">Confirm Password</label>
                                <input type="password" v-model="registerForm.confirm_password" class="form-control"
                                       placeholder="*********" required="">
                            </div>

                            <div class="custom-control custom-checkbox mb-4">
                                <input required type="checkbox" class="custom-control-input" id="customCheck1">
                                <label class="custom-control-label" for="customCheck1">By signing in, you agree to our
                                    <router-link to="/terms">Terms & Conditions</router-link>
                                    and
                                    <router-link to="/terms">Privacy Statement</router-link>
                                </label>
                            </div>

                            <button type="submit" class="btn btn-primary">Register</button>

                            <p style="margin-top: 10px">Already have an account?
                                <router-link to="/login">login</router-link>
                            </p>
                        </form>
                        <!-- End Form 1 -->
                        <!-- Form 2 -->
                        <div v-if="current_form === 'form2'">
                            <div class="form-group">
                               <input type="email" value="test@example.com" style="display: none">
                                <input type="password" value="1234" style="display: none">
                            </div>
                            <div class="form-group">
                                <label for="zip_code">Zip Code</label>
                                <input type="number" autocomplete="__away" name="zip_code" class="form-control" v-model="registerForm.zip_code" id="zip_code">
                            </div>
                            <div class="form-group">
                                <label for="height">Height (inches)</label>
                                <input type="number" autocomplete="__away" name="height" class="form-control" v-model="registerForm.height" id="height">
                            </div>
                            <div class="form-group">
                                <label for="weight">Weight (pounds)</label>
                                <input type="number" autocomplete="__away" name="weight" class="form-control" v-model="registerForm.weight" id="weight">
                            </div>
                            <div class="form-group">
                                <label for="age">Age</label>
                                <input type="number" autocomplete="__away"  name="age" class="form-control" v-model="registerForm.age" id="age">
                            </div>
                            <div class="form-group">
                                <label for="gender">Gender</label>
                                <select id="gender" name="gender" class="form-control" v-model="registerForm.gender">
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <button type="button" class="btn btn-primary" @click="registerFormSubmit">Register</button>
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
        name: 'RegisterPage',
        components: {SpinnerComponent},
        data() {
            return {
                registerForm: {
                    name: '',
                    email: '',
                    password: '',
                    confirm_password: '',
                    zip_code: '',
                    height: '',
                    weight: '',
                    age: '',
                    gender: ''
                },
                current_form: 'form1',
                loader: false
            }
        },
        methods: {
            nextForm(e) {
                e.preventDefault()
                if (this.current_form === 'form1') {
                    this.current_form = 'form2'
                }
            },
            async registerFormSubmit() {
                let status = await Auth.register(this.registerForm)
                if (status === 200) {
                    this.loader = true
                    await this.$router.push({name: 'Home'})
                    this.loader = false
                    location.reload()
                } else {
                    this.error = 'Error in registration'
                }
            }
        }
    }
</script>
