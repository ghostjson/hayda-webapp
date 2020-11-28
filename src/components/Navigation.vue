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
                                        <li v-for="(category,index) in health_links_category" :key="index" class="dropdown-submenu"><span
                                                class="dropdown-arrow"></span>
                                            <a href="#">{{ capitalize(category) }}</a>
                                            <ul class="dropdown-menu" style="">
                                                <li v-for="(links,index) in health_links[category]" :key="index">
                                                    <a target="_blank" :href="links.link">{{ links.caption }}</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <!--                                    <ul class="dropdown-menu" style="">-->
                                    <!--                                        <li class="dropdown-submenu"><span class="dropdown-arrow"></span><a href="#">Body-->
                                    <!--                                            Health</a>-->
                                    <!--                                            <ul class="dropdown-menu" style="">-->
                                    <!--                                                <li><a href="#">Know your sugar</a></li>-->
                                    <!--                                                <li><a href="#">Fitness Tool</a></li>-->
                                    <!--                                            </ul>-->
                                    <!--                                        </li>-->
                                    <!--                                        <li class="dropdown-submenu"><span class="dropdown-arrow"></span><a href="#">Brain-->
                                    <!--                                            Health</a>-->
                                    <!--                                            <ul class="dropdown-menu" style="">-->
                                    <!--                                                <li><a href="#">Stroke Video</a></li>-->
                                    <!--                                            </ul>-->
                                    <!--                                        </li>-->
                                    <!--                                        <li><a href="#">Heart Health</a>-->
                                    <!--                                        </li>-->
                                    <!--                                        <li><a href="#">Insure Your Health</a>-->
                                    <!--                                        </li>-->
                                    <!--                                        <li class="dropdown-submenu"><span class="dropdown-arrow"></span><a href="#">Wealth-->
                                    <!--                                            Tips</a>-->
                                    <!--                                            <ul class="dropdown-menu" style="">-->
                                    <!--                                                <li><a href="#">Mint App</a></li>-->
                                    <!--                                            </ul>-->
                                    <!--                                        </li>-->
                                    <!--                                    </ul>-->
                                </li>

                                <li>
                                    <router-link to="/blog">In the know</router-link>
                                </li>
                                <li>
                                    <router-link to="/">Chat with HAYDA</router-link>
                                </li>
                                <li class="dropdown">
                                    <router-link to="/">Premium Services</router-link>
                                    <ul class="dropdown-menu">
                                        <li class=""><a href="#">Pricing</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <router-link to="/">Set your goals</router-link>
                                </li>
                                <li>
                                    <router-link to="/login">Login</router-link>
                                </li>

                                <li>
                                    <router-link to="/login">Get App</router-link>
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


<style lang="scss">

    #header {
        .header-inner {
            background-color: var(--primary-color) !important;

            .navigation-menu > li > a {
                color: white;

            }

            a:hover, a:active {
                color: black;
                font-size: 1em;
            }
        }
    }

    .logo {
        width: 160px;
    }
</style>

<script>
    import HealthHub from "../services/healthHub";
    import capitalize from "../helpers/capitalize";

    export default {
        name: 'Navigation',
        data() {
            return {
                health_links: {},
                health_links_category: []
            }
        },
        methods: {
          capitalize(value){
              return capitalize(value)
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
        computed: {}
    }
</script>
