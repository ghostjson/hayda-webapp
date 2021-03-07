<template>
    <div class="page-content">
        <div class="container mt-4">
            <div>
                <h3>Geolocation</h3>
            </div>
            <div class="row mt-4">
                <div class="col ml-4">
                    <ul class="links">
                        <li>
                            <a @click="searchFor('parks')">Parks</a>
                        </li>
                        <li>
                            <a @click="searchFor('gyms')">Gyms</a>
                        </li>
                        <li>
                            <a @click="searchFor('hospitals')">Hospitals</a>
                        </li>
                        <li>
                            <a @click="searchFor('food+stores')">Food Stores</a>
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
<!--                            <div class="col">-->
<!--                                <button class="btn btn-primary" @click="gps">GPS</button>-->
<!--                            </div>-->
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

    export default {
        name: 'GeolocationPage',
        data() {
            return {
                search: '',
                location: 'Los Angeles, California'
            }
        },
        methods: {
            searchFor(keyword){
                this.search = keyword
            }
        }

    }
</script>
