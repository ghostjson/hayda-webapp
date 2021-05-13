<template>
    <div>
        <spinner-component v-if="loading"></spinner-component>
        <div class="container ">
            <h3 class="mt-5">HEALTH HUB</h3>
            <div class="panel-group" id="faqAccordion">
                <div class="panel panel-default " v-for="(category, index) in health_links_category" :key="index">
                    <div class="panel-heading accordion-toggle question-toggle collapsed" data-toggle="collapse"
                         data-parent="#faqAccordion" :data-target="'#link' + index">
                        <h4 class="panel-title">
                            <a class="ing">{{ category }}</a>
                        </h4>

                    </div>
                    <div :id="'link'+index" class="panel-collapse collapse" style="height: 0px;">
                        <div class="panel-body">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item" v-for="(link, index) in health_links[category]"
                                    :key="index">
                                    <a target="_blank" @click="linkInterrupt" :href="link.link">{{ link.caption }}</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>


            </div>
            <!--/panel-group-->
        </div>
    </div>
</template>

<script>
    import HealthHub from "../services/healthHub";
    import SpinnerComponent from "../components/SpinnerComponent";

    export default {
        name: 'HealthHubPage',
        components: {SpinnerComponent},
        data() {
            return {
                health_links_category: [],
                health_links: [],
                loading: false
            }
        },
        methods: {
            linkInterrupt(e) {
                let r = confirm('You are leaving this website, are you sure you want to continue?')
                if (r === false) {
                    e.preventDefault()
                }
            },
            fetchData() {
                this.loading = true
                HealthHub.get()
                    .then(res => res.data)
                    .then(data => {
                        this.health_links_category = Object.keys(data)
                        this.health_links = data

                        console.log(this.health_links)
                        console.log(this.health_links_category)

                        this.loading = false
                    })
            }
        },
        created() {
            this.fetchData()
        }
    }
</script>
