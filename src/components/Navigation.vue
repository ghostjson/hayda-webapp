<template>
    <header id="header" data-fullwidth="true" data-transparent="false">
        <div class="header-inner">
            <div class="container">
                <!--Logo-->
                <router-link to="/">
                    <div id="logo">
                        <img class="logo" src="./../assets/logo-with-caption.png" alt="Logo">
                    </div>
                </router-link>
                <!--End: Logo-->


                <!--Navigation Resposnive Trigger-->
                <div id="mainMenu-trigger">
                    <a class="lines-button x"><span class="lines"></span></a>
                </div>
                <!--end: Navigation Resposnive Trigger-->
                <!--Navigation-->
                <div id="mainMenu">
                    <div class="container">
                        <nav>
                            <ul class="navigation-menu">
                                <li>
                                    <router-link to="/">Home</router-link>
                                </li>
                                <li class="dropdown"><span class="dropdown-arrow"></span><a href="#">Health Hub</a>
                                    <ul class="dropdown-menu" style="">
                                        <li v-for="(category,index) in health_links_category" :key="index"
                                            class="dropdown-submenu"><span
                                                class="dropdown-arrow"></span>
                                            <a href="#">{{ capitalize(category) }}</a>
                                            <ul class="dropdown-menu" style="">
                                                <li v-for="(links,index) in health_links[category]" :key="index">
                                                    <a target="_blank" :href="'//'+links.link">{{ links.caption }}</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>

                                <li>
                                    <router-link to="/blog">In the know</router-link>
                                </li>
<!--                                <li>-->
<!--                                    <router-link to="/">Chat with HAYDA</router-link>-->
<!--                                </li>-->
                                <li class="dropdown">
                                    <router-link to="/">Services</router-link>
                                    <ul class="dropdown-menu">
                                        <li class="">
                                            <router-link to="/services/geolocation">Geolocation</router-link>
                                        </li>
                                        <li>
                                            <router-link to="/pricing">Pricing</router-link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <router-link to="/">Set your goals</router-link>
                                    <ul class="dropdown-menu">
                                        <li class="">
                                            <router-link to="/set-your-goals/weight-goals">Weight Goals</router-link>
                                        </li>
<!--                                        <li class="">-->
<!--                                            <router-link to="/set-your-goals/nutrition-goals">Nutrition Goals</router-link>-->
<!--                                        </li>-->
                                        <li class="">
                                            <router-link to="/set-your-goals/workout-routines">Workout Routines</router-link>
                                        </li>
                                    </ul>
                                </li>
                                <li v-if="!isLoggedIn">
                                    <router-link to="/login">Login</router-link>
                                </li>
                                <li v-else>
                                    <a @click="logout" href="#">Logout</a>
                                </li>


                            </ul>
                        </nav>
                    </div>
                </div>
                <!--end: Navigation-->
            </div>
        </div>
    </header>
</template>


<style>

    #header .header-inner {
        background-color: var(--primary-color) !important;
    }
    #header .header-inner .navigation-menu > li > a {
        color: white;
    }
    #header .header-inner a:hover, #header .header-inner a:active {
        color: black;
        font-size: 1em;
    }
    .logo {
        width: 160px;
    }

</style>

<script>
    import HealthHub from "../services/healthHub";
    import capitalize from "../helpers/capitalize";
    import Auth from '../services/auth'

    export default {
        name: 'Navigation',
        data() {
            return {
                health_links: {},
                health_links_category: []
            }
        },
        methods: {
            capitalize(value) {
                return capitalize(value)
            },
            logout(){
                Auth.logout()
                window.location.reload()
            },
            changeLanguage(){
                let d = document.getElementsByClassName('goog-te-combo')[0];
                d.click()
            }
        },
        computed: {
            isLoggedIn() {
                return Auth.isLogged()
            }
        },
        mounted() {
            HealthHub.get()
                .then(res => res.data)
                .then(data => {
                    this.health_links_category = Object.keys(data)
                    this.health_links = data
                })
        },
    }
</script>
