<template>
    <div id="MenuMobile" v-show="isMenuMobileVisible">
        <MenuContainer></MenuContainer>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import MenuContainer from './MenuContainer'

    export default {
        name: 'MenuMobile',
        components: {
            MenuContainer
        },
        computed: mapState(['isMenuMobileVisible'])
    }
</script>

<style scoped>
    #MenuMobile {
        height:300px;
        background-color: #C6A3E3;
        width: 100%;
        display: flex;
    }
    #esconderMenu {
        display:none;
    }
    #mostrarMenu {
        display: block;
    }
    @media only screen and (max-width: 1000px) {
        #MenuMobile div:nth-child(1) {
            flex-direction: column;
            width: 100%;
        }
    }
    @media only screen and (min-width: 1000px) {
        #MenuMobile {
            display:none;
        }
    }
</style>