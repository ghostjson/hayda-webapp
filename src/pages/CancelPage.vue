<template>
    <div class="container" id="success">
        <div class="card" style="width: inherit; height: fit-content;margin-top: 40px;">
            <div class="card-body">
                <h3>Payment Cancelled! Contact Us if you face any issues</h3>
                <a :href="`mailto:${email}?subject=I face an issue with payment`">Go to contact</a>
            </div>
        </div>

    </div>
</template>

<style>
    #success{
        display: flex;
        height: 80vh;
        width: 100%;
        justify-content: center;
        align-items: center;
    }
</style>

<script>
    import auth from "../services/auth";
    import api from "../modules/Api";

    export default {
        name: 'CancelPage',
        data(){
          return {
              email: ''
          }
        },
        created() {
            auth.updateUser()

            api.get('/settings/contact-email').then(res => {
                this.email = res.data
            })
        }
    }
</script>
