<template>
    <div id="Card" class="col-sm-12 col-md-5">
        <img class="images shadow-lg" :src="require(`../assets/portifolio/${imageName}`)">
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
        /* background-color: #7A5698; */
        border-radius: 10px 10px;
        margin: 15px;
        padding: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .images {
        max-width: 100%;
        border-radius: 10px 10px;
    }



</style>