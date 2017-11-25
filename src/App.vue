<template>
  <div id="app">
    <!-- nav -->
    <navigation></navigation>
    <!-- main -->
    <div class="container">
      <transition name="page-turn">
        <router-view></router-view>
      </transition>
    </div>
  </div>
  <!-- TODO: Footer -->
</template>

<script>
import navigation from './components/Nav.vue';

export default {
  name: 'app',
  components: {
    navigation
  }
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
  max-width: $content-max-width;
}
</style>
