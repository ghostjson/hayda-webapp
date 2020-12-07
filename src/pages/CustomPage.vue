<template>
    <section id="page-content" class="sidebar-right">
        <div class="container">
            <div class="row">
                <!-- content -->
                <div class="content col-lg-12">
                    <!-- Blog -->
                    <div id="blog" class="single-post">
                        <!-- Post single item-->
                        <div class="post-item">
                            <div class="post-item-wrap">
                                <div class="post-image">
                                    <a href="#">
                                        <img alt="" :src="page.image">
                                    </a>
                                </div>
                                <div class="post-item-description">
                                    <h2>{{ page.title }}</h2>
                                    <div class="post-meta">
                                        <span class="post-meta-date"><i class="fa fa-calendar-o"></i>{{ page.created_at }}</span>
                                        <span class="post-meta-category"><a href=""><i class="fa fa-tag"></i>{{ page.category }}</a></span>
                                        <div class="post-meta-share">
                                            <a class="btn btn-xs btn-slide btn-facebook" target="_blank" :href="`https://www.facebook.com/sharer/sharer.php?u=${getLink()}`">
                                                <i class="fab fa-facebook-f"></i>
                                                <span>Facebook</span>
                                            </a>
                                            <a class="btn btn-xs btn-slide btn-twitter" :href="`https://twitter.com/intent/tweet?url=${getLink()}`" data-width="100">
                                                <i class="fab fa-twitter"></i>
                                                <span>Twitter</span>
                                            </a>
                                            <a
                                                    :href="`mailto:?subject=${page.title}&amp;body=Check out this site ${getLink()}.`"
                                                    class="btn btn-xs btn-slide btn-googleplus" data-width="80">
                                                <i class="icon-mail"></i>
                                                <span>Mail</span>
                                            </a>
                                        </div>
                                    </div>
                                    <p>
                                        {{ page.content }}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <!-- end: Post single item-->
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import Api from "../modules/Api";

    export default{
        name: 'CustomPage',
        data(){
            return {
                page: {}
            }
        },
        methods: {
            async fetchPage(){
                let id = window.location.href.split('/').pop()
                let response = await Api.get('/pages/'+id)
                this.page = response.data.data
            },
            getLink(){
                return window.location.href;
            }
        },
        mounted() {
            this.fetchPage()
        }
    }
</script>
