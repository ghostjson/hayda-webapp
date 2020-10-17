<template>
    <div>
        <home-caption></home-caption>
        <home-we-do></home-we-do>
        <home-services></home-services>
        <home-statistics></home-statistics>
    </div>
</template>

<script>
    import HomeWeDo from "../components/HomeWeDo";
    import HomeServices from "../components/HomeServices";
    import HomeStatistics from "../components/HomeStatistics";
    import HomeCaption from "../components/HomeCaption";
    export default {
        name: 'HomePage',
        components: {HomeCaption, HomeStatistics, HomeServices, HomeWeDo}
    }
</script>