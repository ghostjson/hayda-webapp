<template>
        <section id="page-content" class="sidebar-right">
            <div class="container">
                <div class="row">
                    <!-- content -->
                    <div class="content col-lg-9">
                        <!-- Blog -->
                        <div id="blog" class="single-post">
                            <!-- Post single item-->
                            <div class="post-item">
                                <div class="post-item-wrap">
                                    <div class="post-image">
                                        <a href="#">
                                            <img alt="" :src="blog.image">
                                        </a>
                                    </div>
                                    <div class="post-item-description">
                                        <h2>{{ blog.title }}</h2>
                                        <div class="post-meta">
                                            <span class="post-meta-date"><i class="fa fa-calendar-o"></i>{{ blog.created_at }}</span>
                                            <span class="post-meta-category"><a href=""><i class="fa fa-tag"></i>{{ blog.category }}</a></span>
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
                                                        :href="`mailto:?subject=${blog.title}&amp;body=Check out this site ${getLink()}.`"
                                                        class="btn btn-xs btn-slide btn-googleplus" data-width="80">
                                                    <i class="icon-mail"></i>
                                                    <span>Mail</span>
                                                </a>
                                            </div>
                                        </div>
                                        <p>
                                            {{ blog.content }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <!-- end: Post single item-->
                        </div>
                    </div>
                    <!-- end: content -->
                    <!-- Sidebar-->
                    <div class="sidebar sticky-sidebar col-lg-3">
                        <!--widget newsletter-->

                        <!--end: widget newsletter-->
                        <!--Tabs with Posts-->
                        <div class="widget">
                            <div class="tabs">
                                <ul class="nav nav-tabs" id="tabs-posts" role="tablist">
                                    <li class="nav-item">
                                        <a class="nav-link active" id="home-tab" data-toggle="tab" href="#popular" role="tab" aria-controls="popular" aria-selected="true">Popular</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="profile-tab" data-toggle="tab" href="#featured" role="tab" aria-controls="featured" aria-selected="false">Featured</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="contact-tab" data-toggle="tab" href="#recent" role="tab" aria-controls="recent" aria-selected="false">Recent</a>
                                    </li>
                                </ul>
                                <div class="tab-content" id="tabs-posts-content">
                                    <div class="tab-pane fade show active" id="popular" role="tabpanel" aria-labelledby="popular-tab">
                                        <div class="post-thumbnail-list">
                                            <div class="post-thumbnail-entry">
                                                <img alt="" src="images/blog/thumbnail/5.jpg">
                                                <div class="post-thumbnail-content">
                                                    <a href="#">A true story, that never been told!</a>
                                                    <span class="post-date"><i class="icon-clock"></i> 6m ago</span>
                                                    <span class="post-category"><i class="fa fa-tag"></i> Technology</span>
                                                </div>
                                            </div>
                                            <div class="post-thumbnail-entry">
                                                <img alt="" src="images/blog/thumbnail/6.jpg">
                                                <div class="post-thumbnail-content">
                                                    <a href="#">Beautiful nature, and rare feathers!</a>
                                                    <span class="post-date"><i class="icon-clock"></i> 24h ago</span>
                                                    <span class="post-category"><i class="fa fa-tag"></i> Lifestyle</span>
                                                </div>
                                            </div>
                                            <div class="post-thumbnail-entry">
                                                <img alt="" src="images/blog/thumbnail/7.jpg">
                                                <div class="post-thumbnail-content">
                                                    <a href="#">The most happiest time of the day!</a>
                                                    <span class="post-date"><i class="icon-clock"></i> 11h ago</span>
                                                    <span class="post-category"><i class="fa fa-tag"></i> Lifestyle</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="featured" role="tabpanel" aria-labelledby="featured-tab">
                                        <div class="post-thumbnail-list">
                                            <div class="post-thumbnail-entry">
                                                <img alt="" src="images/blog/thumbnail/6.jpg">
                                                <div class="post-thumbnail-content">
                                                    <a href="#">Beautiful nature, and rare feathers!</a>
                                                    <span class="post-date"><i class="icon-clock"></i> 24h ago</span>
                                                    <span class="post-category"><i class="fa fa-tag"></i> Lifestyle</span>
                                                </div>
                                            </div>
                                            <div class="post-thumbnail-entry">
                                                <img alt="" src="images/blog/thumbnail/7.jpg">
                                                <div class="post-thumbnail-content">
                                                    <a href="#">The most happiest time of the day!</a>
                                                    <span class="post-date"><i class="icon-clock"></i> 11h ago</span>
                                                    <span class="post-category"><i class="fa fa-tag"></i> Lifestyle</span>
                                                </div>
                                            </div>
                                            <div class="post-thumbnail-entry">
                                                <img alt="" src="images/blog/thumbnail/8.jpg">
                                                <div class="post-thumbnail-content">
                                                    <a href="#">New costs and rise of the economy!</a>
                                                    <span class="post-date"><i class="icon-clock"></i> 11h ago</span>
                                                    <span class="post-category"><i class="fa fa-tag"></i> Lifestyle</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="recent" role="tabpanel" aria-labelledby="recent-tab">
                                        <div class="post-thumbnail-list">
                                            <div class="post-thumbnail-entry">
                                                <img alt="" src="images/blog/thumbnail/7.jpg">
                                                <div class="post-thumbnail-content">
                                                    <a href="#">The most happiest time of the day!</a>
                                                    <span class="post-date"><i class="icon-clock"></i> 11h ago</span>
                                                    <span class="post-category"><i class="fa fa-tag"></i> Lifestyle</span>
                                                </div>
                                            </div>
                                            <div class="post-thumbnail-entry">
                                                <img alt="" src="images/blog/thumbnail/8.jpg">
                                                <div class="post-thumbnail-content">
                                                    <a href="#">New costs and rise of the economy!</a>
                                                    <span class="post-date"><i class="icon-clock"></i> 11h ago</span>
                                                    <span class="post-category"><i class="fa fa-tag"></i> Lifestyle</span>
                                                </div>
                                            </div>
                                            <div class="post-thumbnail-entry">
                                                <img alt="" src="images/blog/thumbnail/6.jpg">
                                                <div class="post-thumbnail-content">
                                                    <a href="#">Beautiful nature, and rare feathers!</a>
                                                    <span class="post-date"><i class="icon-clock"></i> 24h ago</span>
                                                    <span class="post-category"><i class="fa fa-tag"></i> Lifestyle</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--widget tags -->
                        <div class="widget  widget-tags">
                            <h4 class="widget-title">Categroy</h4>
                            <div class="tags">
                                <a href="#">Design</a>
                                <a href="#">Portfolio</a>
                                <a href="#">Digital</a>
                                <a href="#">Branding</a>
                                <a href="#">HTML</a>
                                <a href="#">Clean</a>
                                <a href="#">Peace</a>
                                <a href="#">Love</a>
                                <a href="#">CSS3</a>
                                <a href="#">jQuery</a>
                            </div>
                        </div>
                        <!--end: widget tags -->
                    </div>
                    <!-- end: Sidebar-->
                </div>
            </div>
        </section>
</template>

<script>
    import Api from "../modules/Api";

    export default{
        name: 'BlogSinglePage',
        data(){
          return {
              blog: {}
          }
        },
        methods: {
            async fetchBlog(){
                let id = window.location.href.split('/').pop()
                let response = await Api.get('/blog/'+id)
                this.blog = response.data.data
            },
            getLink(){
                return window.location.href;
            }
        },
        mounted() {
            this.fetchBlog()
        }
    }
</script>
