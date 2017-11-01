<template>
  <div id="app">
    <nav>
      <ul>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/portfolio">Portfolio</router-link></li>
        <li><router-link to="/services">Services</router-link></li>
      </ul>
    </nav>

    <div class="container">
      <transition name="page-turn">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">

@import "./assets/styles/colors.scss";
@import "./assets/styles/base.scss";
@import "./assets/styles/layout.scss";
@import "./assets/styles/animations.scss";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $font-gray;
  font-size: 1.8rem;
  margin: auto;
  line-height: 1.5;
}
</style>
