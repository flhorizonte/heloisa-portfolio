<template>
    <div id="MenuToggle">
        <button @click="hideToggle()">
            <i class="fas fa-bars"></i>
        </button>
    </div>
</template>

<script>
    export default {
        name: 'MenuToggle',
        methods: {
            hideToggle () {
                this.$store.commit('hideToggle')
            }
        }
    }
</script>

<style scoped>
    #MenuToggle {
        display: none;
    }
    #MenuToggle button {
        background: none;
        border-style: none;
        color: white;
        padding:10px 15px 10px 15px;
    }

    #MenuToggle button:focus {
        outline: 1px solid white;
    }
</style>