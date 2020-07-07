<template>
    <div id="Sobre">
        <h1>Sobre mim</h1>
        <br>
        <!-- <hr> -->
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
</template>

<script>
    export default {
        name: 'Sobre'
    }
</script>

<style scoped>
    #Sobre {
        width:70%;
        text-align: justify;
        height: 250px;
        float:left;
        font-size: 1.2em;
        /* margin-top:50px; */
    }
     @media only screen and (max-width: 1000px) {
        #Sobre {
            width: 100%;
            padding: 15px;
        }
        #Sobre p {
            font-size: 0.7em;
        }
        #Sobre h1 {
            font-size: 1.5em;
        }
    }
</style>