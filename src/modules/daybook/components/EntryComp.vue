<template>

    <div 
        class="entry-container mb-3 p-2 pointer"
        @click="$router.push({ name: 'entry', params: { id: 10 } })">

        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">24</span>
            <span class="mx-1 fs-5">Marzo</span>
            <span class="mx-2 fw-light">2023, Viernes</span>
        </div>

        <div class="entry-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit autem harum odio quos ad! Dolorem velit dicta error nam exercitationem beatae numquam, enim perferendis expedita minus atque cumque iste deserunt.
            Aliquid, voluptates. Laudantium pariatur molestias, quisquam quas dignissimos hic, beatae aspernatur quidem error veniam quo corporis accusantium doloremque alias a! Deleniti laboriosam recusandae pariatur hic ullam esse animi ex aperiam?
            Accusantium, aspernatur officia illo, aliquam optio qui earum eius minus quos odio, corrupti sint? Ducimus libero consequuntur, ratione autem ab corporis enim, nostrum, ullam molestiae facere dicta inventore aliquam rerum?
            Voluptatum voluptas cupiditate unde. Dolor, doloremque ducimus. Nihil ab, quidem non iusto deserunt ipsa laboriosam, magnam sapiente officia qui a sed dolorem, iste rerum. Pariatur distinctio sequi quam esse voluptatem!

        </div>

    </div>

</template>

<script>

export default {

}

</script>

<style lang="scss" scoped>
.entry-container{
    border-bottom: 1px solid #2c3e50;
    transition: 0.2s all ease-in;

    &:hover{
        background-color: lighten($color: grey, $amount: 45);
        transition: 0.2s all ease-in;
    }
    .entry-description{
        font-size: 12px;
    }
}

</style>