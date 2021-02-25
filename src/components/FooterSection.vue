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
                                        <li><a href="#">Body Health</a></li>
                                        <li><a href="#">Brain Health</a></li>
                                        <li><a href="#">Heart Health</a></li>
                                        <li><a href="#">Insure Your Health</a></li>
                                        <li><a href="#">Wealth Tips</a></li>
                                        <li><a href="#">Mindfulness</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="widget">
                                    <div class="widget-title">{{ footer['link_heading'] }}</div>
                                    <ul class="list">
                                        <li v-for="(link, index) in footer['links']" :key="index"><a :href="link['link']" >{{ link['name'] }}</a></li>
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
                                    <div class="get-app-button">
                                        <i class="fab fa-apple"></i> iOS
                                    </div>
                                    <div class="get-app-button">
                                        <i class="fab fa-android"></i> Android
                                    </div>
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
    .get-app-button{
        border: 1px solid rgb(30, 27, 27);
        cursor: pointer;
        font-weight: 600;
        text-align: center;
        border-radius: 20px;
        margin-top: 10px;
        transition: all 0.8s;
    }

    .get-app-button:hover{
        background-color: rgb(30, 27, 27);
        color: white;
    }

    .get-app-button i{
        font-size: 1.2em;
        position: relative;
        right: 5px;
    }

    .get-app-button i.fa-apple{
        right: 20px;
    }
</style>

<script>
    import Api from '../modules/Api'
    import api from "../modules/Api";

    export default {
        name: 'FooterSection',
        data(){
            return {
                footer: {},
                email: ''
            }
        },
        methods: {
            async fetchContent(){
                let response = await Api.get('page-content/footer')
                this.footer = response.data.data.content

            }
        },
        created() {
            this.fetchContent()

            api.get('/settings/contact-email').then(res => {
                this.email = res.data
            })
        }
    }
</script>
