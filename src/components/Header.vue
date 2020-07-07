<template>
    <div id="Header">
        <div id="textos">
            <h1>Heloisa Oliveira</h1>
            
        </div>
        
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
        display: flex;
        justify-content: left;
        align-items: center;
        padding: 150px;
    }

    @media only screen and (max-width: 1000px) {
        #Header {
            width: 100%;
            padding: 50px;
            height:350px;
        }
    }

    a:link, a:visited {
        color: #711ABC;
        text-decoration: none;
    }
</style>