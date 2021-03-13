<template>
    <footer id="footer">
        <div class="footer-content">
            <div class="container">
                <div class="row">
                    <div class="col-lg-5">
                        <div class="widget">
                            <div class="widget-title">Who we are?</div>
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
                                            <a @mouseover="healthLinkClicked(index)">{{ capitalize(category) }}</a>
                                            <div @mouseover="healthLinkClicked(index)"
                                                 @mouseleave="healthLinkLeave(index)" class="links shadow"
                                                 :id="'health-link-' + index">
                                                <ul>
                                                    <li v-for="(links,index) in health_links[category]" :key="index">
                                                        <a target="_blank" :href="links.link">{{ links.caption }}</a>
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
                                        <li v-for="(link, index) in footer['links']" :key="index"><a
                                                :href="link['link']">{{ link['name'] }}</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-lg-3">
                                <div class="widget">
                                    <div class="widget-title">Support</div>
                                    <ul class="list">
                                        <li><a href="#">About Us</a></li>
                                        <li><a href="#">What we do?</a></li>
                                        <li><a :href="`mailto:${email}`">Contact Us</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="widget">
                                    <div class="widget-title">Get the APP</div>
                                    <a :href="app_urls['ios']">
                                        <div class="get-app-button">
                                            <i class="fab fa-apple"></i> iOS
                                        </div>
                                    </a>
                                    <a :href="app_urls['android']">
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
                <div class="copyright-text text-center">© 2020 HAYDA - Caption Here . All Rights
                    Reserved.<a href="/" style="font-weight: bold"> HAYDA</a></div>
            </div>
        </div>
    </footer>
</template>

<style>

    a {
        cursor: pointer;
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
            healthLinkClicked(index) {
                document.getElementById(`health-link-${index}`).style.display = 'block'
                setTimeout(() => {
                    document.getElementById(`health-link-${index}`).style.display = 'none'
                }, 2000)
            },
            healthLinkLeave(index) {
                document.getElementById(`health-link-${index}`).style.display = 'none'
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
