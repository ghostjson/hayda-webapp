<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 offset-md-2">
                <div class="input-group md-form form-sm form-2 pl-0" style="z-index: 40">
                    <input class="form-control" type="text" placeholder="Search" aria-label="Search">
                    <div class="input-group-append">
                            <span class="input-group-text red lighten-3" id="basic-text1" style="cursor:pointer;">
                                <i class="fas fa-search text-grey" aria-hidden="true"></i>
                            </span>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'SearchBar'
    }
</script>