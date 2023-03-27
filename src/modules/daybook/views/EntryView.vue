<template>

    <div class="entry-title d-flex justify-content-between p-2">

        <div>
            <span class="text-success fs-3 fw-bold">27</span>
            <span class="mx-1 fs-3">Marzo</span>
            <span class="mx-2 fs-4 fw-light">2023, Lunes</span>
        </div>

        <div class="d-flex gap-2">
            <button class="btn btn-danger">
                Borrar
                <i class="fa fa-trash-alt"></i>
            </button>

            <button class="btn btn-primary">
                Subir foto
                <i class="fa fa-upload"></i>
            </button>
        </div>

    </div>

    <hr>
    <div class="d-flex flex-column px-3 h-75">
        <textarea placeholder="Que sucedió hoy?"></textarea>
    </div>

    <FabComp icon="fa-save"/>

    <img 
        src="https://resizer.glanacion.com/resizer/3bWgiviU7lRKgV473SxDYUFxGbI=/768x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/EUZV4LO2WNDDDP6T2L6HM4ZIL4.png" 
        alt="entry-picture"
        class="img-thumbnail">

</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
    components: {
        FabComp: defineAsyncComponent(() => import('@/modules/daybook/components/FabComp.vue')),
    }
}

</script>

<style lang="scss" scoped>

textarea{
    font-size: 20px;
    border: none;
    height: 100%;

    &:focus{
        outline: none;
    }
}

img{
    width: 200px;
    position: fixed;
    bottom: 150px;
    right: 20px;
    box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
}

</style>