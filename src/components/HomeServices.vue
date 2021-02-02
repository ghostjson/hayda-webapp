<template>
    <section id="services-section">
        <div class="container">
            <div class="heading-text heading-section text-center">
                <h2>SERVICES</h2>
                <p>Lorem ipsum dolor sit amet, consecte adipiscing elit. Suspendisse condimentum porttitor cursumus.
                </p>
            </div>
            <div class="row">
                <div v-for="(content,index) in data['content']" :key="index" class="col-lg-4 animated fadeInUp visible" data-animate="fadeInUp" data-animate-delay="0">
                    <div class="icon-box effect medium border small">
                        <div class="icon">
                            <a href="#"><i :class="'fa fa-'+ content['icon']"></i></a>
                        </div>
                        <h3>{{ content['header'] }}</h3>
                        <p>{{ content['description'] }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'HomeServices',
        props: ['data']
    }
</script>
