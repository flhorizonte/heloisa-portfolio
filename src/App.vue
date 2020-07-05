<template>
  <div id="app">
    <Menu></Menu>
    <Content></Content>
    <Sobre></Sobre>
    <Contato></Contato>
    <Footer></Footer>
  </div>
</template>

<script>
import Menu from './components/Menu.vue'
import Content from './components/Content.vue'
import Footer from './components/Footer.vue'
import Sobre from './components/Sobre.vue'
import Contato from './components/Contato.vue'

export default {
  name: 'App',
  components: {
    Menu, Content, Footer, Sobre, Contato
  }
}
</script>

<style>

html {
  height: 100%;
}

body {
  height: 100%;
  background-color: #BA8FDF !important;
}

* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #FFF;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
