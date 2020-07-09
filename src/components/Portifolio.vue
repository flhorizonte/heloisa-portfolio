<template>
    <div id="Portifolio">
        <h1>Portifólio</h1>
        <hr>
        <div id="content" >
            <Card v-for="(image, index) in fotos" :key="index" :imageName="image"></Card>
        </div>
        <div id="sobre"></div>
    </div>
</template>

<script>
    import Card from './Card.vue'

    export default {
        name: 'Portifolio',
        components: {
            Card
        },
        data() {
            return {
                fotos: [
                    '1.jpeg',
                    '2.jpeg',
                    '3.jpeg',
                    '4.jpeg',
                    '5.jpeg',
                    '6.jpeg',
                    '7.jpeg',
                    '8.jpeg',
                    '9.jpeg',
                    '10.jpeg',
                    '11.jpeg',
                    '12.jpeg',
                    '13.jpeg',
                    '14.jpeg',
                    '15.jpeg',
                    '16.jpeg',
                    '18.jpeg',
                    '19.jpeg',
                    '20.jpeg',
                    '21.jpeg',
                    '22.jpeg',
                    '23.jpeg',
                    '24.jpeg',
                    '25.jpeg',
                ]
            }
        }
    }
</script>

<style scoped>
    #Portifolio {
        padding:25px;
        text-align: left;
        align-self: center;
        width: 70%;
        border-radius: 5px 5px;
        margin-top:50px;
    }
    
    #Portifolio #content {
        justify-content: center;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        overflow: auto;
        height: 750px;
        /* padding: 50px; */
        /* background-color: #7A5698; */
        
    }
     @media only screen and (max-width: 1000px) {
        #Portifolio {
            width: 100%;
            margin-top:0;
        }

        #Portifolio #content {
            height: 400px;
            
        }

        #Portifolio h1 {
            font-size: 1.7em;
        }
    }
</style>