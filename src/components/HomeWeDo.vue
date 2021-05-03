<template>
    <section class="background-grey" id="what-we-do">
        <div class="container">
            <div class="heading-text heading-section">
                <h2>WHAT WE DO</h2>
                <p><a href="/login" class="btn btn-dark">Login</a> <a href="/register" class="btn btn-dark">Register</a></p>
                <span class="lead">{{ data.caption }}</span>
            </div>
            <div class="row">
                <div class="col-lg-4" v-for="(content,index) in data.content" :key="index">
                    <div data-animate="fadeInUp" data-animate-delay="0" class="animated fadeInUp visible">
                        <h4>{{ content['header'] }}</h4>
                        <p>{{ content['description'] }}</p>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'HomeWeDo',
        props: ['data']
    }
</script>
