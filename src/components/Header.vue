<template>
    <div id="Header">
        <div id="textos">
            <h1>Heloisa Oliveira</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d</p>
            <p>Lorem ipsum dolor</p>
        </div>
        <img src="../../public/design.svg" width="25%">
    </div>
</template>

<script>
    export default {
        name: 'Header',
        data () {
            return {}
        }
    }
</script>

<style scoped>
    #Header {
        text-align: left;
        height: 700px;
        justify-content: center;
        background-color: #7A5698;
        padding: 200px;
        display: flex;
        justify-content: space-around;
    }

    a:link, a:visited {
        color: #711ABC;
        text-decoration: none;
    }
</style>