<template>
    <div id="Portifolio">
        <h1>Portifólio</h1>
        <hr>
        <div id="content">
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
        </div>
    </div>
</template>

<script>
    import Card from './Card.vue'

    export default {
        name: 'Portifolio',
        components: {
            Card
        }
    }
</script>

<style scoped>
    #Portifolio {
        padding:25px;
        text-align: left;
        align-self: center;
        width: 70%;
        border-radius: 5px 5px;
        margin-top:50px;
    }
    #Portifolio #content {
        justify-content: center;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
</style>