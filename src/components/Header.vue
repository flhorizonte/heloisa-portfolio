<template>
    <div id="Header">
        <div id="textos">
            <h1>Heloisa Oliveira</h1>
        </div>
        <img src="../assets/art.png">
        
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
        height: 700px;
        background-color: #7A5698;
        display: flex;
        justify-content: center;
        padding: 150px;
        align-items: center;
    }

    @media only screen and (max-width: 1000px) {
        #Header {
            width: 100%;
            padding: 50px;
            height:350px;
            
        }
        #Header img {
            max-width: 110%;
            display:none;
        }
    }

    a:link, a:visited {
        color: #711ABC;
        text-decoration: none;
    }
</style>