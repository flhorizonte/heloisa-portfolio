<template>
    <div id="Card" class="col-sm-12 col-md-5">
        
    </div>
</template>

<script>
    export default {
        name: 'Card'
    }
</script>

<style scoped>
    #Card {
        height: 450px;
        background-color: #7A5698;
        border-radius: 10px 10px;
        margin: 15px;
    }

     @media only screen and (max-width: 1000px) {
       #Card {
           height: 250px;
       }
    }
</style>