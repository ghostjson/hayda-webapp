<template>
    <div class="container">
        <h3>Payment Page</h3>
        <div class="row">
            <div class="col">

            </div>
        </div>
    </div>
</template>


<script>

    export default {
        components: {
        },
        data() {
            this.publishableKey = 'pk_test_51HvJkCLtTrjFBbiiIrRYfwtFtpQraZePfjqYSDO1lG6wIoOEpK0lyoGuACnmSkFNjiuSjQJ7YvxXWcpukntPOret00qYtKK349';
            return {
                loading: false,
                lineItems: [
                    {
                        price: 'price_1IGgHNLtTrjFBbiijRyRoc1s', // The id of the recurring price you created in your Stripe dashboard
                        quantity: 1,
                    },
                ],
                successURL: 'your-success-url',
                cancelURL: 'your-cancel-url',
            };
        },
        // You will be redirected to Stripe's secure checkout page
        submit() {
            this.$refs.checkoutRef.redirectToCheckout();
        },
    }

</script>
