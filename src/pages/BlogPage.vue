<template>
  <div class="page-content">
    <spinner-component v-if="loader"></spinner-component>
    <div></div>
    <div class="container-fluid m-t-20" style="min-height: 60vh">
      <h3>Blog Bits</h3>

      <div v-if="blogs.length === 0">
        <p>No blog.</p>
      </div>

      <div id="blog" class=" m-b-30 " data-item="post-item">
        <!-- Post item-->
        <div
          v-for="(blog, index) in blogs"
          :key="index"
          class="post-item border"
        >
          <div class="post-item-wrap">
            <div class="post-image">
              <a href="#">
                <img style="height: 320px !important;" :src="blog.image" />
              </a>
              <span class="post-meta-category"
                ><a href="">{{ blog.category }}</a></span
              >
            </div>
            <div class="post-item-description">
              <span class="post-meta-date"
                ><i class="fa fa-calendar-o"></i
                >{{ dateFormatter(blog.created_at) }}</span
              >
              <h2>
                <router-link :to="'/blog/' + blog.id"
                  >{{ paraShortener(blog.title, 80) }}
                </router-link>
              </h2>
              <p>{{ paraShortener(blog.content, 150) }}</p>
              <router-link :to="'/blog/' + blog.id" class="item-link"
                >Read More <i class="icon-chevron-right"></i
              ></router-link>
            </div>
          </div>
        </div>
        <!-- end: Post item-->
      </div>
    </div>
  </div>
</template>

<style>
@media screen and (min-width: 992px) {
  #blog {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;
  }
}

#blog {
  display: grid;
}
</style>

<script>
import Api from "../modules/Api";
import paraShortener from "../helpers/paraShortener";
import SpinnerComponent from "../components/SpinnerComponent";
import dateFormatter from "../helpers/dateFormatter";

export default {
  name: "BlogPage",
  components: { SpinnerComponent },
  data() {
    return {
      blogs: {},
      loader: false,
    };
  },
  methods: {
    paraShortener,
    dateFormatter,
    async fetchBlogs() {
      this.loader = true;
      let response = await Api.get("/blog");
      this.blogs = response.data.data;
      this.loader = false;
    },
  },
  mounted() {
    this.fetchBlogs();
  },
};
</script>
