<template>
    <footer id="footer">
        <div class="footer-content">
            <div class="container">
                <div class="row">
                    <div class="col-lg-5">
                        <div class="widget">
                            <div class="widget-title">Who we are</div>
                            <p class="mb-5">{{ footer['who_we_are'] }}</p>
                            <a
                                    class="btn btn-inverted" target="_blank">
                                <router-link style="color: white" to="/pricing">Get Premium</router-link>
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-7">
                        <div class="row">
                            <div class="col-lg-3">
                                <div class="widget">
                                    <div class="widget-title">Health Hub</div>
                                    <ul class="list">
                                        <li v-for="(category, index) in health_links_category" :key="index">
                                            <a class="footer-health-hub-links primary-text"
                                               @mouseover="healthLinkClicked(index)"
                                               onMouseOver="this.style.color='red'"
                                               onMouseLeave="this.style.color='black'" :data-id="index">{{
                                                capitalize(category) }}</a>
                                            <div
                                                    @mouseleave="healthLinkLeave(index)" class="links shadow"
                                                    :id="'health-link-' + index">
                                                <ul>
                                                    <li v-for="(links,index) in health_links[category]" :key="index">
                                                        <a class="primary-text" target="_blank" v-on:click="linkInterrupt" :href="links.link">{{ links.caption }}</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="widget">
                                    <div class="widget-title">{{ footer['link_heading'] }}</div>
                                    <ul class="list">
                                        <li v-on:click="linkInterrupt" v-for="(link, index) in footer['links']" :key="index"><a
                                               target="_blank" :href="link['link']" class="primary-text">{{ link['name'] }}</a></li>



                                    </ul>
                                </div>
                            </div>

                            <div class="col-lg-3">
                                <div class="widget">
                                    <div class="widget-title">Support</div>
                                    <ul class="list">
                                        <li><a class="primary-text" href="/about">About Us</a></li>
                                        <li><a class="primary-text" href="/#what-we-do">What We Do</a></li>
                                        <li><a class="primary-text" :href="`mailto:${email}`">Contact Us</a></li>

                                        <li @click="donate" style="cursor: pointer" class="primary-text">DONATE</li>
                                        <li style="visibility: hidden">
                                            <form action="https://www.paypal.com/donate" method="post" target="_top">
                                                <input type="hidden" name="hosted_button_id" value="49MMQ7C3TWPVS" />
                                                <input id="donation-button" type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                                                <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                                            </form>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="widget">
<!--                                    <div class="widget-title">Get the APP</div>-->
                                    <div class="widget-title">Download HAYDA App</div>

                                    <a :href="app_urls['ios']" target="_blank">
                                        <div class="get-app-button">
                                            <i class="fab fa-apple"></i> iOS
                                        </div>
                                    </a>
                                    <a :href="app_urls['android']" target="_blank">
                                        <div class="get-app-button">
                                            <i class="fab fa-android"></i> Android
                                        </div>
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright-content">
            <div class="container">
                <div class="copyright-text text-center">© 2021 HAYDA. All Rights
                    Reserved.<a href="/" style="font-weight: bold"> HAYDA</a></div>
            </div>
        </div>
    </footer>
</template>

<style>

    .primary-text{
        color: var(--primary-color) !important;
    }

    .widget-title {
        font-size: 1.35714286em !important;
    }

    .get-app-button {
        border: 1px solid rgb(30, 27, 27);
        cursor: pointer;
        font-weight: 600;
        text-align: center;
        border-radius: 20px;
        margin-top: 10px;
        transition: all 0.8s;
    }

    .get-app-button:hover {
        background-color: rgb(30, 27, 27);
        color: white;
    }

    .get-app-button i {
        font-size: 1.2em;
        position: relative;
        right: 5px;
    }

    .get-app-button i.fa-apple {
        right: 20px;
    }

    .links {
        background-color: white;
        position: absolute;
        left: 100px;
        min-width: 200px;
        z-index: 10;
        display: none;
    }


    .links:hover {
        display: block;
    }

    .links ul {
        list-style: none;
        padding: 10px;
    }
</style>

<script>
    import Api from '../modules/Api'
    import api from "../modules/Api";
    import HealthHub from "../services/healthHub";
    import capitalize from "../helpers/capitalize";

    export default {
        name: 'FooterSection',
        data() {
            return {
                footer: {},
                email: '',
                health_links: [],
                health_links_category: [],
                app_urls: []
            }
        },
        methods: {
            async fetchContent() {
                let response = await Api.get('page-content/footer')
                this.footer = response.data.data.content
            },
            capitalize(value) {
                return capitalize(value)
            },
            linkInterrupt(e) {
                let r = confirm('You are leaving this website, are you sure you want to continue?')
                if (r === false) {
                    e.preventDefault()
                }
            },
            healthLinkClicked(index) {
                let links = document.getElementsByClassName('footer-health-hub-links')
                links.forEach(link => {
                    let id = link.getAttribute('data-id')
                    document.getElementById(`health-link-${id}`).style.display = 'none'
                })
                document.getElementById(`health-link-${index}`).style.display = 'block'
                setTimeout(() => {
                    document.getElementById(`health-link-${index}`).style.display = 'none'
                }, 2000)
            },
            healthLinkLeave(index) {
                document.getElementById(`health-link-${index}`).style.display = 'none'
            },
            donate(){
                let r = confirm('You are leaving this website, are you sure you want to continue?')
                if(r){
                    document.getElementById('donation-button').click()
                }
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
        created() {
            this.fetchContent()

            api.get('/settings/contact-email').then(res => {
                this.email = res.data
            })
            api.get('/settings/app-urls').then(res => {
                this.app_urls = res.data
            })
        }
    }
</script>
