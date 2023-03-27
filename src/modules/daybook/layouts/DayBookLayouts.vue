<template>

    <NavbarComp />

    <div class="d-flex">
        <div class="col-4">
            <EntryListComp />
        </div>
        <div class="col">
            <RouterView />
        </div>
    </div>
    
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
    components: {
        NavbarComp: defineAsyncComponent(() => import("../components/NavbarComp.vue")),
        EntryListComp: defineAsyncComponent(() => import('../components/EntryListComp.vue'))
    }
}
</script>