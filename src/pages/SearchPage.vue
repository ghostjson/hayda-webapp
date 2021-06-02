<template>
    <div class="page-content">
        <div>
        </div>
        <div class="container m-t-20" style="padding-top: 30px; min-height: 60vh">
            <h3 class="search-result-heading" >Search Results <span><a href="/"><i class="fas fa-times"></i></a></span></h3>
            <p>for {{ query }}</p>

            <div v-if="!have_results">
                    <p>No results found</p>
            </div>

            <div class="card" v-for="(result, index) in results['pages']" :key="index">
                <div class="card-body">
                    <a target="_blank" :href="result.value">Page : {{ result.tag }}</a>
                </div>
            </div>

            <div class="card" v-for="(result, index) in results['health_hub']" :key="index">
                <div class="card-body">
                    <a target="_blank" :href="result.link" @click="linkInterrupt">Health Hub: {{ result.caption }}</a>
                </div>
            </div>
            <div class="card" v-for="(result, index) in results['blog']" :key="index">
            <div class="card-body">
                <a target="_blank" :href="'blog/'+result.id">Blog: {{ result.title }}</a>
            </div>
        </div>
        </div>

    </div>
</template>

<style>
    .search-result-heading{
        /*background-color: red;*/
        display: flex;
        justify-content: space-between;
    }

    .search-result-heading span{
        position: relative;
        top: 2px;
        cursor: pointer;
    }
</style>

<script>

    import api from "../modules/Api";

    export default {
        name: 'SearchPage',
        components: {},
        data() {
          return {
              query: '',
              have_results: false,
              results: {
                  health_hub: [],
                  blog: [],
                  pages: []
              },
              searchable_list: [
                  {tag: 'in the know', value: '/blog'},
                  {tag: 'blog', value: '/blog'},
                  {tag: 'blogs', value: '/blog'},
                  {tag: 'services', value: '/services/geolocation'},
                  {tag: 'geolocation', value: '/services/geolocation'},
                  {tag: 'find', value: '/services/geolocation'},
                  {tag: 'map', value: '/services/geolocation'},
                  {tag: 'price', value: '/services/geolocation'},
                  {tag: 'pricing', value: '/pricing'},
                  {tag: 'weight goals', value: '/set-your-goals/weight-goals'},
                  {tag: 'weight', value: '/services/geolocation'},
                  {tag: 'weight loss', value: '/services/geolocation'},
                  {tag: 'workout-routines', value: '/set-your-goals/workout-routines'},
                  {tag: 'workout', value: '/set-your-goals/workout-routines'},
                  {tag: 'routines', value: '/set-your-goals/workout-routines'},
                  {tag: 'subscription', value: '/pricing'}
              ]
          }
        },
        methods: {
            linkInterrupt(e) {
                let r = confirm('You are leaving this website, are you sure you want to continue?')
                if (r === false) {
                    e.preventDefault()
                }
            }
        },
        mounted() {
            console.log('work')

            this.searchable_list.forEach(value => {

                if (value.tag.toLowerCase().includes(this.query.toLowerCase())){

                    this.have_results = true

                    let exist = false

                    this.results['pages'].forEach(prev => {
                        if(prev.value === value.value){
                            exist = true
                        }
                    })

                    if(!exist){
                        this.results['pages'].push(value)
                    }
                }
            })
        },
        created() {
            this.query = this.$route.query.query
            api.post('/search', {query: this.query})
            .then(res => {



                this.results['health_hub'] = res.data['health_hub']
                this.results['blog'] = res.data['blog']

                if(this.results['blog'].length + this.results['health_hub'].length > 0){
                    this.have_results = true
                }


            })

        }
    }
</script>
