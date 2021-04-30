<template>
    <div class="page-content">
        <spinner-component v-if="loader"></spinner-component>
        <div>
        </div>
        <div class="container-fluid m-t-20" style="min-height: 60vh">
            <h3>Blogs</h3>

            <div v-if="blogs.length === 0">
                <p>No blogs.</p>
            </div>

            <div id="blog" class="grid-layout post-3-columns m-b-30 " data-item="post-item">
                <!-- Post item-->
                <div v-for="(blog,index) in blogs" :key="index" class="post-item border">
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
    .post-item {

    }
</style>

<script>

    import Api from "../modules/Api";
    import paraShortener from "../helpers/paraShortener";
    import SpinnerComponent from "../components/SpinnerComponent";

    export default {
        name: 'BlogPage',
        components: {SpinnerComponent},
        data() {
            return {
                blogs: {},
                loader: false
            }
        },
        methods: {
            paraShortener,
            async fetchBlogs() {
                this.loader = true
                let response = await Api.get('/blog')
                this.blogs = response.data.data
                this.loader = false
            }
        },
        mounted() {
            this.fetchBlogs()
        }

    }
</script>
