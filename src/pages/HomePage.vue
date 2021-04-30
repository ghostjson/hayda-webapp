<template>
    <div>
        <spinner-component v-if="loader"></spinner-component>
        <home-caption :title_caption="home['title_caption']" :small_quote="home['small_quote']"></home-caption>
        <home-we-do :data="home['what_we_do']"></home-we-do>
        <home-services :data="home['services']"></home-services>
        <home-statistics :data="home['statistics']"></home-statistics>
    </div>
</template>

<script>
    import HomeWeDo from "../components/HomeWeDo";
    import HomeServices from "../components/HomeServices";
    import HomeStatistics from "../components/HomeStatistics";
    import HomeCaption from "../components/HomeCaption";
    import Api from "../modules/Api"
    import cache from "../services/cache";
    import SpinnerComponent from "../components/SpinnerComponent";

    export default {
        name: 'HomePage',
        components: {SpinnerComponent, HomeCaption, HomeStatistics, HomeServices, HomeWeDo},
        data(){
            return {
                home: {
                    title_caption: '',
                    small_quote: '',
                    what_we_do: '',
                    services: '',
                    statistics: ''

                },
                loader: false
            }
        },
        methods: {
            async fetchContents(){
                if (cache.isExist('home_data')){
                    this.home = cache.get('home_data')
                }else{
                    this.loader = true
                    let response = await Api.get('/page-content/home')
                    this.home = response.data.data.content
                    cache.store('home_data', this.home)
                    this.loader = false
                }

            }
        },
        created() {
            this.fetchContents()

            // get theme colour
            Api.get('/page-content/theme').then(res => {
                let root = document.documentElement
                root.style.setProperty('--primary-color', res.data['primary_color'])
                root.style.setProperty('--dark-color', res.data['secondary_color'])

                localStorage.setItem('primary-color', res.data['primary_color'])
                localStorage.setItem('secondary-color', res.data['secondary_color'])
            })
        }
    }
</script>
