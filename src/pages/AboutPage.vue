<template>
    <div>
        <section>
            <div class="container">
                <div class="row">
                    <div class="col-lg-3">
                        <div class="heading-text heading-section">
                            <h2>THE COMPANY</h2>

                        </div>
                    </div>
                    <div class="col-lg-9">
                        <div class="row">
                            <div class="col-lg-6">{{ about['description_left'] }}</div>

                            <div class="col-lg-6">{{ about['description_right'] }}</div>

                        </div>
                    </div>

                </div>
            </div>
        </section>


        <section class="box-fancy section-fullwidth text-light p-b-0">
            <div class="row">
                <div style="background-color:#917d5d" class="col-lg-4">
                    <h1 class="text-lg text-uppercase">01.</h1>
                    <h3>{{ about['steps'][0]['title'] }}</h3>
                    <span>{{ about['steps'][0]['description'] }}</span>
                </div>

                <div style="background-color:#a08c6c" class="col-lg-4">
                    <h1 class="text-lg text-uppercase">02.</h1>
                    <h3>{{ about['steps'][1]['title'] }}</h3>
                    <span>{{ about['steps'][1]['description'] }}</span>
                </div>

                <div style="background-color:#ad9979" class="col-lg-4">
                    <h1 class="text-lg text-uppercase">03.</h1>
                    <h3>{{ about['steps'][2]['title'] }}</h3>
                    <span>{{ about['steps'][2]['description'] }}</span>
                </div>
            </div>
        </section>

        <section class="background-grey">
            <div class="container">
                <div class="heading-text heading-section text-center">
                    <h2>OUR TEAM</h2>
                    <span class="lead">Create amaThe most happiest time of the day!.</span>
                </div>
                <div class="row team-members team-members-shadow m-b-40">
                    <div class="col-lg-3" v-for="(member, index) in about.team" :key="index">
                        <div class="team-member">
                            <div class="team-image">
                                <img :src="member['image']">
                            </div>
                            <div class="team-desc">
                                <h3>{{ member['name'] }}</h3>
                                <span>{{ member['title'] }}</span>
                                <p>{{ member['description'] }}</p>
                                <div class="align-center">
                                    <a target="_blank" class="btn btn-xs btn-slide btn-light" :href="member['facebook']">
                                        <i class="fab fa-facebook-f"></i>
                                        <span>Facebook</span>
                                    </a>
                                    <a target="_blank" class="btn btn-xs btn-slide btn-light" :href="member['twitter']" data-width="100">
                                        <i class="fab fa-twitter"></i>
                                        <span>Twitter</span>
                                    </a>
                                    <a target="_blank" class="btn btn-xs btn-slide btn-light"  :href="member['instagram']" data-width="118">
                                        <i class="fab fa-instagram"></i>
                                        <span>Instagram</span>
                                    </a>
                                    <a class="btn btn-xs btn-slide btn-light" :href="'mailto:'+member['email']" data-width="80">
                                        <i class="icon-mail"></i>
                                        <span>Mail</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import Api from '../modules/Api'

    export default {
        name: 'AboutPage',
        data(){
            return {
                about: {
                    description_left: '',
                    description_right: '',
                    steps: [
                        {
                            title: '',
                            description: ''
                        },
                        {
                            title: '',
                            description: ''
                        },
                        {
                            title: '',
                            description: ''
                        }
                    ],
                    team: [],

                },

            }
        },
        methods: {
            async fetchContents(){
                let response = await Api.get('page-content/about')

                this.about = response.data.data.content
                console.log(this.about)
            }
        },
        created() {
            this.fetchContents()
        }
    }
</script>
