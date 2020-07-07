<template>
    <div id="Card" class="col-sm-4 col-md-5 shadow-sm">
        <img class="images" :src="require(`../assets/portifolio/${imageName}`)">
    </div>
</template>

<script>
    export default {
        name: 'Card',
        props: ['imageName']
    }
</script>

<style scoped>
    #Card {
        background-color: #7A5698;
        border-radius: 10px 10px;
        margin: 15px;
        padding: 25px;
    }

    .images {
        max-width: 100%;
        border-radius: 10px 10px;
    }

</style>