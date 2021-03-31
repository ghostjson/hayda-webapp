<template>
    <div class="overlay">
        <div class="modal" style="display: block !important; border: 1px solid lightgray">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    .overlay{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.82);
        z-index: 2000;
        padding: 0;
        margin: 0;
    }
</style>

<script>
    export default {
        name: 'ModalWidget'
    }
</script>
