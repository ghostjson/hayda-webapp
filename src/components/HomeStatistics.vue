<template>
    <section class="text-light p-t-80 p-b-80 " data-bg-parallax="images/parallax/12.jpg"><div class="parallax-container scrolly-invisible img-loaded" data-bg="images/parallax/12.jpg" data-velocity="-.140" style="background: url(&quot;images/parallax/12.jpg&quot;) 0px;" data-ll-status="loaded"></div>
        <div class="bg-overlay"></div>
        <div class="container">
            <div class="row">
<!--                <div class="col-lg-3" v-for="(content, index) in data['content']" :key="index">-->
<!--                    <div class="text-center">-->
<!--                        <div class="icon"><i :class="'fa fa-3x fa-'+ content['icon']"></i></div>-->
<!--                        <div class="counter"> <span data-speed="3000" data-refresh-interval="50" data-to="12416" data-from="600" data-seperator="true">{{ content['value'] }}</span> </div>-->
<!--                        <div class="seperator seperator-small"></div>-->
<!--                        <p>{{ content['title'] }}</p>-->
<!--                    </div>-->
<!--                </div>-->
                <div class="col-8 col-md-8 col-md-12">
                    <iframe width="560" height="515" :src="'https://www.youtube.com/embed/' + data['id']" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'HomeStatistics',
        props: ['data']
    }
</script>
