<template>
    <div class="container" id="success">
        <div class="card" style="width: inherit; height: fit-content;margin-top: 40px;">
            <div class="card-body">
                <h3>Success! You're now subscribed.</h3>
                <router-link to="/">Go to Home</router-link>
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

    export default {
        name: 'SuccessPage',
        created() {
            auth.updateUser()
        }
    }
</script>
