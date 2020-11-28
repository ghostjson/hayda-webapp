<template>
    <div v-if="error !== ''" class="alert alert-danger" role="alert">
        {{ error }}
    </div>
</template>

<script>
    export default {
        name: 'AlertBox',
        props: ['error']
    }
</script>
