<template>
    <div id="Footer">
        <div id="container">
            <div class="box">
                <!-- <h3>Heloisa Oliveira</h3> -->
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
        height: 15vh;
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
</style>