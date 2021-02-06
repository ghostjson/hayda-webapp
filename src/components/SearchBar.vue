<template>
    <div class="container search-form">
        <div class="row">
            <div class="col">
                <div class="wrapper">
                    <div class="search-input">
                        <a href="" target="_blank" hidden></a>
                        <input v-model="query" @keyup="getSuggestions" style="margin-right: 40px" type="search" list="suggestions" placeholder="Type to search..">
                        <datalist id="suggestions">
                            <option v-for="(suggest,index) in suggestions" :key="index">{{ suggest.tag }}</option>
                        </datalist>
                        <div class="icon" @click="submit"><i class="fas fa-search text-secondary"></i></div>
                    </div>

                </div>
            </div>
        </div>

    </div>
</template>

<style>
    ::selection{
        color: #fff;
        background: #664AFF;
    }

    .wrapper .search-input{
        background: #fff;
        width: 100%;
        border-radius: 5px;
        position: relative;
        box-shadow: 0px 1px 5px 3px rgba(0,0,0,0.12);

    }

    .search-input input{
        height: 55px;
        width: 100%;
        outline: none;
        border: none;
        border-radius: 5px;
        padding: 0 60px 0 20px;
        font-size: 18px;
        box-shadow: 0px 1px 5px rgba(0,0,0,0.1);
    }

    .search-input.active input{
        border-radius: 5px 5px 0 0;
    }

    .search-input .autocom-box{
        padding: 0;
        opacity: 0;
        pointer-events: none;
        max-height: 280px;
        overflow-y: auto;
    }

    .search-input.active .autocom-box{
        padding: 10px 8px;
        opacity: 1;
        pointer-events: auto;
    }

    .autocom-box li{
        list-style: none;
        padding: 8px 12px;
        display: none;
        width: 100%;
        cursor: default;
        border-radius: 3px;
    }

    .search-input.active .autocom-box li{
        display: block;
    }
    .autocom-box li:hover{
        background: #efefef;
    }

    .search-input .icon{
        position: absolute;
        right: 0px;
        top: 0px;
        height: 55px;
        width: 55px;
        text-align: center;
        line-height: 55px;
        font-size: 20px;
        color: #644bff;
        cursor: pointer;
    }
</style>

<script>
    export default {
        name: 'SearchBar',
        data() {
            return {
                query: '',
                suggestions: [],
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
            getSuggestions() {
                this.searchable_list.forEach(value => {
                    if (value.tag.toLowerCase().includes(this.query.toLowerCase())){

                        let exist = false
                        this.suggestions.forEach(prev => {
                            if(prev.tag === value.tag){
                                exist = true
                            }
                        })

                        if(!exist){
                            this.suggestions.push(value)
                        }
                    }
                })
                // console.log(this.query)
            },
            submit(){
                this.searchable_list.forEach(value => {
                    if (value.tag.toLowerCase().includes(this.query.toLowerCase())) {

                        this.$router.push(value.value)

                    }
                })
            }
        }
    }
</script>
