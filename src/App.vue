<template>
    <div id="app">
        <div class="body-inner">
            <top-bar></top-bar>
            <navigation></navigation>
            <router-view/>
            <footer-section></footer-section>

        </div>
        <chat></chat>
    </div>
</template>
<script>
    import TopBar from "./components/TopBar";
    import Navigation from "./components/Navigation";
    import FooterSection from "./components/FooterSection";
    import Chat from "./components/Chat";

    export default {
        components: {Chat, FooterSection, Navigation, TopBar}
    }
</script>