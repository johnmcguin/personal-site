<template>
  <div id="app">
    <!-- fixed borders -->
    <div class="body-border"></div>
    <div class="body-border"></div>
    <div class="body-border"></div>
    <div class="body-border"></div>
    <!-- What to Include -->
    <!-- your name and picture
    a little bit about who you are
    your contact details
    recent work
    your skills -->
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
  font-size: 1.5rem;
  margin: auto;
  line-height: 1.5;
  max-width: $content-max-width;
}

.body-border {
  position: fixed;
  background-color: rgba(100,100,100,.1);

  &:nth-child(1), &:nth-child(4) {
    height: 15px;
    left: 0;
    right: 0;
  }

  &:nth-child(1) {
    top: 0;
  }

  &:nth-child(4) {
    bottom: 0;
  }

  &:nth-child(2), &:nth-child(3) {
    top: 0;
    bottom: 0;
    width: 15px;
  }

  &:nth-child(2) {
    right: 0;
  }

  &:nth-child(3) {
    left: 0;
  }
}
</style>
