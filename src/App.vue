<template>
    <div id="app">

        <spinner-component v-if="spinner"></spinner-component>

        <div class="body-inner">
            <top-bar></top-bar>
            <navigation></navigation>
            <router-view/>
            <footer-section></footer-section>

        </div>
        <chat></chat>
    </div>
</template>
<script>
    import TopBar from "./components/TopBar";
    import Navigation from "./components/Navigation";
    import FooterSection from "./components/FooterSection";
    import Chat from "./components/Chat";
    import SpinnerComponent from "./components/SpinnerComponent";
    import Api from "./modules/Api";

    export default {
        components: {SpinnerComponent, Chat, FooterSection, Navigation, TopBar},

        data(){
            return {
                spinner: true
            }
        },
        created() {
            Api.interceptors.request.use(req => {
                setTimeout( ()=>{
                    this.spinner = false;
                }, 1000)
                return req;
            });

            Api.interceptors.response.use(res => {
                this.spinner = false
                return res;
            });


        }
    }
</script>
