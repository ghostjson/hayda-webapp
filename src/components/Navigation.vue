<template>
    <header id="header" data-fullwidth="true" data-transparent="false" style="position: fixed;margin-top: 40px;">
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
                <div id="mainMenu-trigger" @click="openNav">
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
                                <li>
                                    <router-link to="/health-hub">Health Hub</router-link>
                                </li>
<!--                                <li class="dropdown"><span class="dropdown-arrow"></span><a href="#">Health Hub</a>-->
<!--                                    <ul class="dropdown-menu" style="">-->
<!--                                        <li v-for="(category,index) in health_links_category" :key="index"-->
<!--                                            class="dropdown-submenu"><span-->
<!--                                                class="dropdown-arrow"></span>-->
<!--                                            <a href="#">{{ capitalize(category) }}</a>-->
<!--                                            <ul class="dropdown-menu" style="">-->
<!--                                                <li v-for="(links,index) in health_links[category]" :key="index">-->
<!--                                                    <a target="_blank" v-on:click="linkInterrupt" :href="links.link">{{-->
<!--                                                        links.caption }}</a>-->
<!--                                                </li>-->
<!--                                            </ul>-->
<!--                                        </li>-->
<!--                                    </ul>-->
<!--                                </li>-->

                                <li class="dropdown">
                                    <router-link to="/">In the know</router-link>
                                    <ul class="dropdown-menu">
                                        <li class="">
                                            <a href="/blog">Blogs</a>

                                        </li>
                                        <li class="dropdown-submenu"><span
                                                class="dropdown-arrow"></span>
                                            <a href="#">Games</a>
                                            <ul class="dropdown-menu" style="">
                                                <li v-for="(game, index) in games" :key="index">
                                                    <a target="_blank" v-on:click="linkInterrupt" :href="game.link">{{
                                                        game.title }}</a>
                                                </li>
                                            </ul>
                                        </li>

                                        <li class="dropdown-submenu"><span
                                                class="dropdown-arrow"></span>
                                            <a href="#">Podcasts</a>
                                            <ul class="dropdown-menu" style="">
                                                <li v-for="(podcast, index) in podcasts" :key="index">
                                                    <a target="_blank" v-on:click="linkInterrupt" :href="podcast.link">{{
                                                        podcast.title }}</a>
                                                </li>
                                            </ul>
                                        </li>

                                    </ul>
                                </li>
                                <li class="dropdown">
                                    <router-link to="/">Services</router-link>
                                    <ul class="dropdown-menu">
                                        <li class="">
                                            <router-link to="/services/geolocation">Discover Places</router-link>
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
                                        <li class="">
                                            <router-link to="/set-your-goals/workout-routines">Workout Routines
                                            </router-link>
                                        </li>
                                    </ul>
                                </li>
                                <li v-if="!isLoggedIn">
                                    <router-link to="/login">Login</router-link>
                                </li>
                                <li v-else>
                                    <a>Hi, {{ user.name }}</a>
                                    <ul class="dropdown-menu" style="right: 0px;">
                                        <li class="">
                                            <router-link to="/profile">Profile</router-link>
                                        </li>
                                        <li class="">
                                            <a @click="logout" href="#">Logout</a>
                                        </li>
                                    </ul>
                                </li>


                            </ul>
                        </nav>
                    </div>
                </div>
                <!--end: Navigation-->
            </div>
        </div>

        <div class="mobile-navigation">
            <ul class="navigation-menu" v-if="current_navigation === 1">
                <li>
                    <router-link @click.native="closeNav" to="/">Home</router-link>
                </li>
                <li class="dropdown-mobile">
                    <a href="#" @click="current_navigation = 2">Health Hub</a>
                </li>

                <li>
                    <a href="#" @click="current_navigation = 5">In the know</a>

                </li>
                <!--                                <li>-->
                <!--                                    <router-link to="/">Chat with HAYDA</router-link>-->
                <!--                                </li>-->
                <li class="dropdown">
                    <a href="#" @click="current_navigation = 3">Services</a>
                </li>
                <li>
                    <a href="#" @click="current_navigation = 4">Set your goals</a>

                </li>
                <li v-if="!isLoggedIn">
                    <router-link @click.native="closeNav" to="/login">Login</router-link>
                </li>
                <li v-else>
                    <a @click="logout();closeNav()" href="#">Logout</a>
                </li>


            </ul>
            <ul class="dropdown-menu-mobile" style="" v-if="current_navigation === 2">
                <li v-for="(category,index) in health_links_category" :key="index"
                    class="dropdown-submenu"><span
                        class="dropdown-arrow"></span>
                    <a href="#" @click="healthHubCategoryClicked(index)">{{ capitalize(category) }}</a>
                    <ul style="padding-left: 20px; display: none" :id="'healthHubLink-'+index">
                        <li v-for="(links,index) in health_links[category]" :key="index">

                            <a target="_blank" @click="closeNav();linkInterrupt($event)" :href="links.link">{{ links.caption
                                }}</a>
                        </li>
                    </ul>
                </li>
            </ul>
            <ul class="dropdown-menu-mobile" v-if="current_navigation === 3">
                <li class="">
                    <router-link @click.native="closeNav" to="/services/geolocation">Discover Places</router-link>
                </li>
                <li>
                    <router-link @click.native="closeNav" to="/pricing">Pricing</router-link>
                </li>
            </ul>
            <ul class="dropdown-menu-mobile" v-if="current_navigation === 4">
                <li class="">
                    <router-link @click.native="closeNav" to="/set-your-goals/weight-goals">Weight Goals</router-link>
                </li>

                <li class="">
                    <router-link @click.native="closeNav" to="/set-your-goals/workout-routines">Workout Routines
                    </router-link>
                </li>
            </ul>
            <ul class="dropdown-menu-mobile" v-if="current_navigation === 5">
                <li class="">
                    <router-link @click.native="closeNav" to="/blog">Blogs</router-link>
                </li>
                <li class="dropdown-submenu"><span
                        class="dropdown-arrow"></span>
                    <a href="#">Games</a>
                    <ul class="dropdown-menu" style="">
                        <li v-for="(game, index) in games" :key="index">
                            <a target="_blank" v-on:click="linkInterrupt" :href="game.link">{{
                                game.title }}</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#" @click="current_navigation = 7;closeNav">Podcasts</a>
                </li>
            </ul>


        </div>
    </header>


</template>


<style scoped>

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

    a {
        font-size: 1.2em !important;
    }

    .mobile-navigation {
        background-color: white;
        border: 1px solid #c8c8c8;
        padding-left: 30px;
        max-height: 70vh !important;
        overflow-y: auto;
    }

    .mobile-navigation ul {
        list-style: none;
    }

    .mobile-navigation ul li {
        line-height: 40px;
    }

    @media only screen and (min-width: 1086px) {
        .mobile-navigation {
            display: none !important;
        }
    }

</style>

<script>
    import HealthHub from "../services/healthHub";
    import capitalize from "../helpers/capitalize";
    import Auth from '../services/auth'
    import api from "../modules/Api";
    import cache from "../services/cache";
    import auth from "../services/auth";

    export default {
        name: 'Navigation',
        data() {
            return {
                health_links: {},
                health_links_category: [],
                current_navigation: 0,
                games: [],
                podcasts: [],
                user: {
                    name: ''
                }
            }
        },
        methods: {
            capitalize(value) {
                return capitalize(value)
            },
            logout() {
                Auth.logout()
                window.location.reload()
            },
            changeLanguage() {
                let d = document.getElementsByClassName('goog-te-combo')[0];
                d.click()
            },
            openNav() {
                if (this.current_navigation === 0) {
                    this.current_navigation = 1;
                    document.getElementById('route-view').style.display = 'none'
                    document.getElementsByTagName('footer')[0].style.display = 'none'

                } else {
                    this.closeNav()
                }
            },
            closeNav() {
                console.log('working')
                this.current_navigation = 0;
                document.getElementById('route-view').style.display = 'block'
                document.getElementsByTagName('footer')[0].style.display = 'block'
            },
            linkInterrupt(e) {
                let r = confirm('You are leaving this website, are you sure you want to continue?')
                console.log(r)
                if (r === false) {
                    e.preventDefault()
                }
            },
            healthHubCategoryClicked(index) {
                let link = document.getElementById('healthHubLink-' + index);
                if (link.style.display === 'none') {
                    link.style.display = 'block';
                } else {
                    link.style.display = 'none';
                }
            },
            fetchGamesAndPodcast() {
                api.get('/podcasts').then(res => {
                    this.podcasts = res.data.data
                })

                api.get('/games').then(res => {
                    this.games = res.data.data
                })
            }
        },
        computed: {
            isLoggedIn() {
                return Auth.isLogged()
            }
        },
        mounted() {
            if (cache.isExist('health_links_category') && cache.isExist('health_links')) {
                this.health_links_category = cache.get('health_links_category')
                this.health_links = cache.get('health_links')
            } else {
                HealthHub.get()
                    .then(res => res.data)
                    .then(data => {
                        this.health_links_category = Object.keys(data)
                        this.health_links = data

                        cache.store('health_links_category', this.health_links_category)
                        cache.store('health_links', this.health_links)

                    })
            }


            this.fetchGamesAndPodcast()
            if (auth.isLogged()) {
                this.user = auth.getUser()
            }
        },
    }
</script>
