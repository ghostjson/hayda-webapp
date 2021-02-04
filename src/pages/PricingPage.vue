<template>

    <section id="content">
        <div class="container">
            <!-- Pricing Table -->
            <div class="heading-text heading-line text-center pb-5">
                <h4>Pricing</h4>
            </div>
            <div class="row pricing-table">

                <div class="col-lg-4 col-md-12 col-12">
                    <div class="plan">
                        <div class="plan-header">
                            <h4>{{ subscription[0].name }}</h4>
                            <!--                            <p class="text-muted">Plan short description</p>-->
                            <div class="plan-price"><sup>$</sup>{{ subscription[0].price }}<span>/mo</span></div>
                            <div class="countdown small" data-countdown="2019/12/19 11:34:51"></div>
                        </div>
                        <div class="plan-list">
                            <ul>
                                <li v-for="(feature, index) in subscription[0].features" :key="index">{{ feature }}</li>
                            </ul>
                            <div class="plan-button" v-if="subscribe_to === '1'">
                                <a href="#" class="btn btn-secondary">Current Plan</a>
                            </div>
                            <div class="plan-button" v-else>
                                <a href="#" @click="pay('Free')"  class="btn btn-primary">Change Plan</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-12 col-12">
                    <div class="plan featured">
                        <div class="plan-header">
                            <h4>{{ subscription[1].name }}</h4>
                            <!--                            <p class="text-muted">Plan short description</p>-->
                            <div class="plan-price"><sup>$</sup>{{ subscription[1].price }}<span>/mo</span></div>
                            <div class="countdown small" data-countdown="2019/08/11 11:34:51"></div>
                        </div>
                        <div class="plan-list">
                            <ul>
                                <li v-for="(feature, index) in subscription[1].features" :key="index">{{ feature }}</li>

                            </ul>
                            <div class="plan-button" v-if="subscribe_to === '2'">
                                <a href="#" class="btn btn-secondary">Current Plan</a>
                            </div>
                            <div class="plan-button" v-else>
                                <a href="#" @click="pay('Premium')" class="btn btn-primary">Buy Now</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-12 col-12">
                    <div class="plan">
                        <div class="plan-header">
                            <h4>{{ subscription[2].name }}</h4>
                            <!--                            <p class="text-muted">Plan short description</p>-->
                            <div class="plan-price"><sup>$</sup>{{ subscription[2].price }}<span>/mo</span></div>
                            <div class="countdown small" data-countdown="2019/11/15 11:34:51"></div>
                        </div>
                        <div class="plan-list">
                            <ul>
                                <li v-for="(feature, index) in subscription[2].features" :key="index">{{ feature }}</li>

                            </ul>
                            <div class="plan-button" v-if="subscribe_to === '3'">
                                <a href="#" class="btn btn-secondary">Current Plan</a>
                            </div>
                            <div class="plan-button" v-else>
                                <a href="#" @click="pay('Premium Plus')"  class="btn btn-primary">Buy Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- end: Pricing Table -->
            <hr class="space">

        </div>
    </section>
</template>

<script>
    import Api from "../modules/Api";
    import auth from "../services/auth";

    export default {
        name: 'PricingPage',
        data() {
            return {
                subscription: [],
                subscribe_to: -1,
                stripe_token: ''
            }
        },
        methods: {
            pay(sub) {

                let stripe = window.stripe(this.stripe_token);
                    Api.post('/payment/checkout', {'subscription': sub})
                        .then(function (response) {
                            return response;
                        })
                        .then(function (session) {
                            console.log(session)
                            return stripe.redirectToCheckout({sessionId: session.data.id});
                        })
                        .then(function (result) {
                            if (result.error) {
                                alert(result.error.message);
                            }
                        })
                        .catch(function (error) {
                            console.error("Error:", error);
                        });

                console.log(stripe)
            },
            async fetchSubscriptions() {
                let response = await Api.get('/subscriptions')
                let stripe_token = await Api.get('/payment/token')
                this.subscription = response.data.data
                this.stripe_token = stripe_token.data

            }
        },
        mounted() {

            if (auth.isLogged()) {
                this.subscribe_to = JSON.parse(localStorage.getItem('User'))['subscription']
                console.log(this.subscribe_to)
            }
            this.fetchSubscriptions()

        }
    }
</script>
