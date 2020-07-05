<template>
    <div id="Content">
        <Header></Header>
        
        <Portifolio></Portifolio>
    </div>
</template>

<script>
    import Header from './Header.vue'
    import Portifolio from './Portifolio'

    export default {
        name: 'Content',
        components: {
            Header, Portifolio
        },
    }
</script>

<style scoped>
    #Content {
        width: 100%;
        float:left;
        /* padding: 50px; */
        display: flex;
        flex-direction: column;
    }
</style>