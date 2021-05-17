<template>
    <div class="page-content">
        <div class="container mt-4">
            <div>
                <h3 class="hayda-heading">Discover Places</h3>
            </div>
            <div class="row mt-4">
                <div class="col ml-4">
                    <ul class="links" style="display: block; position: initial">
                        <li v-for="(place,index) in places" :key="index">
                            <a @click="searchFor(place)">{{ place }}</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="form-group">
                        <label>Enter location</label>
                        <div class="row">
                            <div class="col">
                                <input class="form-control" placeholder="Enter location" v-model="location">
                            </div>

                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="form-group">
                    </div>
                </div>
            </div>
            <iframe
                    width="600"
                    height="450"
                    frameborder="0" style="border:0; margin-bottom: 50px"
                    :src="`https://www.google.com/maps/embed/v1/place?key=AIzaSyBQIN6zs0acYLaiCwTAdlC2s4cfyHPhRZM
                    &zoom=14
    &q=${search}+in+${location}`" allowfullscreen>
            </iframe>
        </div>
    </div>
</template>

<style>
    .links li a{
        color: var(--primary) !important;
        cursor: pointer;
    }
</style>

<script>

    import api from "../modules/Api";
    import auth from "../services/auth";

    export default {
        name: 'GeolocationPage',
        data() {
            return {
                search: '',
                places: [],
                location: 'Los Angeles, California'
            }
        },
        methods: {
            searchFor(keyword) {
                this.search = keyword
            },
            fetchData(){
                api.get('/page-content/discover-places').then(res => {
                    let places_string = res.data.data.content['places']
                    this.places = places_string.split(',')

                    if (!auth.isLogged()){
                       this.location = 'Los Angeles, California'
                    }else{
                        this.location = auth.getUser().zip_code
                    }

                })
            }
        },
        created() {
            this.fetchData()
        }

    }
</script>
