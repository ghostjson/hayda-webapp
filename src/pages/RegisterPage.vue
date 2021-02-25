<template>
    <div class="container">
        <div class="row">
           <div class="col-md-12 m-t-60">
               <div class="card">
                   <div class="card-header">
                       <h5 class="card-title">Register</h5>
                   </div>
                   <div class="card-body">
                       <form @submit="registerFormSubmit">
                           <div class="form-group">
                               <label class="form-label">Username</label>
                               <input type="text" v-model="registerForm.name" class="form-control" placeholder="imjohn" required="">
                           </div>
                           <div class="form-group">
                               <label class="form-label">Email</label>
                               <input type="email" v-model="registerForm.email"  class="form-control" placeholder="example@example.com" required="">
                           </div>
                           <div class="form-group">
                               <label class="form-label">Password</label>
                               <input type="password"  v-model="registerForm.password"  class="form-control" placeholder="*********" required="">
                           </div>
                           <div class="form-group">
                               <label class="form-label">Confirm Password</label>
                               <input type="password"  v-model="registerForm.confirm_password"  class="form-control" placeholder="*********" required="">
                           </div>

                           <div class="custom-control custom-checkbox mb-4">
                               <input required type="checkbox" class="custom-control-input" id="customCheck1">
                               <label class="custom-control-label" for="customCheck1">By signing in, you agree to our <router-link to="/terms">Terms & Conditions</router-link> and <router-link to="/terms">Privacy Statement</router-link></label>
                           </div>

                           <button type="submit" class="btn btn-primary">Register</button>

                           <p style="margin-top: 10px">Already have an account? <router-link to="/login">login</router-link></p>
                       </form>
                   </div>
               </div>
           </div>
        </div>
    </div>
</template>

<script>
    import Auth from "../services/auth";

    export default {
        name: 'RegisterPage',
        data(){
            return {
                registerForm: {}
            }
        },
        methods: {
            async registerFormSubmit(e){ e.preventDefault()
                let status = await Auth.register(this.registerForm)
                if(status === 200){
                    await this.$router.push({ name: 'Home' })
                }else{
                    this.error = 'Error in registration'
                }
                // window.location.reload()
            }
        }
    }
</script>
