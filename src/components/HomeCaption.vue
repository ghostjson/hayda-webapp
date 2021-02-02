<template>
    <section>
        <search-bar></search-bar>
        <div class="container heading-text-this">
            <div class="slide-captions text-dark text-center">
                <!-- Captions -->
                <span data-animate="fadeInUp" data-animate-delay="300" class="strong animated fadeInUp visible" style="opacity: 1; animation-duration: 600ms;"><a href="#" class="business"><span class="business">{{ small_quote }}</span></a>
                        </span>
                <h1 data-animate="fadeInUp" data-animate-delay="600" class="animated fadeInUp visible" style="opacity: 1; animation-duration: 600ms;">
                    {{title_caption}}</h1>
                <a href="#what-we-do" data-animate="fadeInUp" data-animate-delay="900" class="btn btn-rounded btn-light animated fadeInUp visible" style="opacity: 1; animation-duration: 600ms;">Discover More</a>
                <a data-animate="fadeInUp" data-animate-delay="1200" class="btn btn-outline btn-rounded btn-light animated fadeInUp visible" style="opacity: 1; animation-duration: 600ms;">
                    <router-link to="/pricing">Premium</router-link>
                </a>
                <!-- end: Captions -->
            </div>
        </div>
    </section>
</template>

<style>
    .heading-text-this{
        height: 60vh;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        bottom: 50px;
    }

    @media (max-width: 500px) {
        .heading-text-this{
            height: 68vh;
        }
    }
</style>

<script>
import SearchBar from "./SearchBar";
export default {
    name: 'HomeCaption',
    props: ['title_caption', 'small_quote'],
    components: {SearchBar}
}
</script>
