<template>
    <div id="Menu">
        <div id="menu-container">
            <div class="menu-box"><a href="#">Home</a></div>
            <div class="menu-box"><a href="#Sobre">Sobre</a></div>
            <div class="menu-box"><a href="#Portifolio">Portifólio</a></div>
            <div class="menu-box"><a href="#Contato">Contato</a></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Menu',
        data () {
            return {}
        }
    }
</script>

<style scoped>
    #Menu {
        height: 10vh;
        width:100%;
        font-family: 'Open Sans', sans-serif;
        float:left; 
        display: flex;
        align-items: center;
        position: fixed;
        background-color: #BA8FDF;
    }

    #menu-container {
        display: flex;
        width: 25%;
        align-items: center;
        flex-direction: row;
        justify-content: space-between;
        margin-left: 150px;
    }
   
    a:link, a:visited {
        text-decoration: none;
        color: #FFF;
    }
    a:hover {
        color: #711ABC;
    }
</style>