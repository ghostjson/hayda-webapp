<template>
    <div class="page-content">
        <div class="container-fluid m-t-20">
            <h3>Nutrition Goals</h3>
            <div id="blog" class="grid-layout post-3-columns m-b-30 " data-item="post-item">
                <!-- Post item-->
                <div v-for="(blog,index) in nutrition" :key="index" class="post-item border">
                    <div class="post-item-wrap">
                        <div class="post-image">
                            <a href="#">
                                <img alt="" :src="blog.image">
                            </a>
                            <span class="post-meta-category"><a href="">{{ blog.category }}</a></span>
                        </div>
                        <div class="post-item-description">
                            <span class="post-meta-date"><i class="fa fa-calendar-o"></i>{{ blog.created_at }}</span>
                            <!--                            <span class="post-meta-comments"><a href=""><i class="fa fa-comments-o"></i>33 Comments</a></span>-->
                            <h2>
                                <router-link :to="'/blog/'+blog.id">{{ blog.title }}
                                </router-link>
                            </h2>
                            <p>{{ paraShortener(blog.content, 150) }}</p>
                            <router-link :to="'/blog/'+blog.id" class="item-link">Read More <i
                                    class="icon-chevron-right"></i></router-link>
                        </div>
                    </div>
                </div>
                <!-- end: Post item-->
            </div>
        </div>
    </div>
</template>

<style>
</style>

<script>

    import paraShortener from "../helpers/paraShortener";
    import Api from "../modules/Api";

    export default {

        data() {
            return {
                nutrition: {}
            }
        },
        methods: {
            paraShortener,
            async fetchBlogs() {
                let response = await Api.get('goals/nutrition')
                this.nutrition = response.data.data
                console.log(this.nutrition)
            }
        },
        mounted() {
            this.fetchBlogs()
        }

    }

</script>
