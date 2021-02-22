<template>
    <div class="container mt-5 mb-5" style="min-height: 60vh;">
        <h3>Terms and conditions</h3>
        <p>
            {{ terms.content }}
        </p>
    </div>
</template>

<script>

    import Api from "../modules/Api"

    export default {
        name: 'TermsPage',
        data(){
            return {
                terms: {}
            }
        },
        methods: {
            async fetchContents(){
                let response = await Api.get('/page-content/terms')
                this.terms = response.data.data.content
            }
        },
        created() {
            this.fetchContents()
        }
    }
</script>

