<template>
    <div id="Header">
        <p >Olá, sou a Heloisa</p>
        <h1>Eu construo valores atráves do Design</h1>
        <p >Sou brasileira  e adoro desenhar produtos digitais</p>
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
    }

    a:link, a:visited {
        color: #711ABC;
        text-decoration: none;
    }
</style>