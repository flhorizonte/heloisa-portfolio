<template>
    <div id="Menu">
        <MenuToggle></MenuToggle>
        <MenuContainer></MenuContainer>
    </div>
</template>

<script>
    import MenuContainer from './MenuContainer'
    import MenuToggle from './MenuToggle'

    export default {
        name: 'Menu',
        components: {
            MenuContainer, MenuToggle
        },
        data () {
            return {
                
            }
        }
    }
</script>

<style>
    #Menu {
        height: 10vh;
        width:100%;
        font-family: 'Open Sans', sans-serif;
        float:left; 
        display: flex;
        align-items: center;
        background-color: #BA8FDF;
        justify-content: space-between;
        padding:50px;
    }

    @media only screen and (max-width: 1000px) {
        #Menu div:nth-child(1) {
            display: block;
        }
        #Menu div:nth-child(2) {
            display: none;
        }
    }

   
   
</style>