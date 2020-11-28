<template>
    <div class="page-content">
        <div class="container">
            <div id="blog" class="grid-layout post-3-columns m-b-30 m-t-60" data-item="post-item">
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
                            <span class="post-meta-comments"><a href=""><i class="fa fa-comments-o"></i>33 Comments</a></span>
                            <h2><a href="#">{{ blog.title }}
                            </a></h2>
                            <p>{{ paraShortener(blog.content, 150) }}</p>
                            <router-link :to="'/blog/'+blog.id"  class="item-link">Read More <i class="icon-chevron-right"></i></router-link>
                        </div>
                    </div>
                </div>
                <!-- end: Post item-->
            </div>
        </div>
    </div>
</template>

<style>
    .post-item{
        margin: 8px;
    }
</style>

<script>

    import Api from "../modules/Api";
    import paraShortener from "../helpers/paraShortener";

    export default {
        name: 'BlogPage',
        data() {
            return {
                blogs: {}
            }
        },
        methods: {
            paraShortener,
            async fetchBlogs(){
              let response = await Api.get('/blog')
              this.blogs = response.data.data
          }
        },
        mounted() {
            this.fetchBlogs()
        }

    }
</script>
