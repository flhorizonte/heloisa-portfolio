<template>
    <div id="Footer">
        <div id="container">
            <div class="box">
               <small>Site construido por <a href="https://github.com/flhorizonte"><strong>@FelipeHorizonte</strong></a></small>
            </div>
            <div class="box">

            </div>
            <div class="box">

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Footer'
    }
</script>

<style scoped>
    #Footer{
        height: 10vh;
        width: 100%;
        float:left;
        background-color: #7A5698;
        margin-top: 50px;
    }

    #container {
        display: flex;
        flex-direction: row;    
        justify-content: space-around;
        align-items: center;
        height:100%;
    }

    #container .box {
        display:flex;
        justify-content: center;
        align-items: center;
    }
</style>