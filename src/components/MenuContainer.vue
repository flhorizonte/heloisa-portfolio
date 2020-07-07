<template>
    <div id="MenuContainer">
        <div class="menu-box"><a href="#">Ínicio</a></div>
        <div class="menu-box"><a href="#Sobre">Sobre</a></div>
        <div class="menu-box"><a href="#Portifolio">Portifólio</a></div>
        <div class="menu-box"><a href="#Contato">Contato</a></div>
    </div>
</template>

<script>
    export default {
        name: 'MenuContainer'
    }
</script>

<style scoped>
    #MenuContainer {
        display: flex;
        width: 25%;
        align-items: center;
        flex-direction: row;
        /* margin-left: 150px; */
    }

    .menu-box {
        width:100%;
        height: 25%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

     a:link, a:visited {
        text-decoration: none;
        color: #FFF;
    }
</style>