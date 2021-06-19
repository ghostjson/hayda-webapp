<template>
    <div class="page-content" style="box-sizing: border-box">
        <div class="" style="display: flex;flex-direction: column;width: 100%">

            <div class="row mx-2">
                <div class="col-12">
                    <div class="form-group">
                        <label for="places">Places</label>
                        <input class="form-control"   id="places" type="search" v-model="search">
<!--                        <datalist id="places-list">-->
<!--                            <option v-for="(place, index) in places" :key="index">{{ place }}</option>-->
<!--                        </datalist>-->
                    </div>
                </div>

                <div class="col-12">
                    <div class="form-group">
                        <label>Enter location</label>
                        <div class="row">
                            <div class="col">
                                <input class="form-control" placeholder="Enter location" v-model="location">
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            <iframe
                    width="600"
                    frameborder="0" style="border:0;flex-grow: 1;height: calc(95vh - 165px)"
                    :src="`https://www.google.com/maps/embed/v1/place?key=AIzaSyBQIN6zs0acYLaiCwTAdlC2s4cfyHPhRZM
                    &zoom=14
    &q=${search}+in+${location}`" allowfullscreen>
            </iframe>

            <div class="col-12" style="padding: 0;">
                <div class="place-suggestion">
                    <span @click="searchFor(place)" v-for="(place, index) in places" :key="index">{{ place }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    .links li a {
        color: var(--primary) !important;
        cursor: pointer;
    }

    header, #topbar, .chat, footer, #google_translate_element {
        display: none !important;
    }

    .page-content {
        padding-top: 0 !important;
    }

    .page-content .container{
        margin: 0 !important;
        padding: 0 !important;
    }

    .place-suggestion{
        height: 6vh;
        display: flex;
        overflow-x: auto;
        padding: 5px;
        flex-wrap: nowrap;
        overflow-y: hidden;
        align-content: stretch;
    }

    .place-suggestion span{
        background-color: var(--primary-color);
        color: white;
        padding: 4px 10px;
        margin-left: 10px;
        border-radius: 15px;
        font-weight: bold;
        height: 30px;
        min-width: fit-content;
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
            fetchData() {
                api.get('/page-content/discover-places').then(res => {
                    let places_string = res.data.data.content['places']
                    this.places = places_string.split(',')

                    if (!auth.isLogged()) {
                        this.location = 'Los Angeles, California'
                    } else {
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
