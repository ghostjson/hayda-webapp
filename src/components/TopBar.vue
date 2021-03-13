<template>
    <div id="topbar" class="dark topbar-fullwidth"
         style="background-color: var(--dark-color)">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <ul class="top-menu">
                        <li><router-link to="/about">About</router-link></li>
                        <li><a href="/#services-section">Features</a></li>
                        <li><a href="/terms">Terms</a></li>
                    </ul>
                </div>
                <div class="col-md-6 d-none d-sm-block">
                    <div class="social-icons social-icons-colored-hover">
                        <ul>
                            <li class="social-facebook"><a :href="social.facebook"><i class="fab fa-facebook-f"></i></a></li>
                            <li class="social-twitter"><a :href="social.twitter"><i class="fab fa-twitter"></i></a></li>
                            <li class="social-google"><a :href="social.google"><i class="fab fa-google-plus-g"></i></a></li>
                            <li class="social-pinterest"><a :href="social.pininterest"><i class="fab fa-pinterest"></i></a></li>
                            <li class="social-vimeo"><a :href="social.vimeo"><i class="fab fa-vimeo"></i></a></li>
                            <li class="social-linkedin"><a :href="social.linkedin"><i class="fab fa-linkedin"></i></a></li>
                            <li class="social-instagram"><a :href="social.instagram"><i class="fab fa-instagram"></i></a></li>
                            <li class="social-youtube"><a :href="social.youtube"><i class="fab fa-youtube"></i></a></li>
                            <li class="social-rss"><a :href="social.reddit"><i class="fa fa-rss"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<script>
    import api from "../modules/Api";

    export default {
        name: 'TopBar',
        data(){
          return {
              social:  {
                  facebook: '',
                  instagram: '',
                  google: '',
                  linkedin: '',
                  pininterest: '',
                  reddit: '',
                  twitter: '',
                  vimeo: '',
                  youtube: '',
              }
          }
        },
        methods: {
          async fetchSocial(){
              let response = await api.get('/page-content/social')
              this.social = response.data.data.content
          }
        },
        created() {
            this.fetchSocial()
        }
    }
</script>
