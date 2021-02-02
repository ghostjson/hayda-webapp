<template>
    <div>
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

    export default {
        name: 'HomePage',
        components: {HomeCaption, HomeStatistics, HomeServices, HomeWeDo},
        data(){
            return {
                home: {}
            }
        },
        methods: {
            async fetchContents(){
                let response = await Api.get('/page-content/home')
                this.home = response.data.data.content

                console.log(this.home)
            }
        },
        created() {
            this.fetchContents()
        }
    }
</script>
