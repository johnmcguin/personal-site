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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 1.6rem;
  margin: 60px auto 0 auto;
  max-width: 960px;
}

.page-turn-enter, .page-turn-enter-to {
  opacity: 0;
}

.page-turn-enter-active {
  animation: fade-in .5s;
  animation-delay: .5s;
}

.page-turn-leave-active {
  animation: slide-out .5s;
  animation-timing-function: ease-out;
}

html {
  font-size: 10px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  25% {
    opacity: .25;
  }
  50% {
    opacity: .5;
  }
  75% {
    opacity: .75;
  }
  100% {
    opacity: 1;
  }
}

@keyframes slide-out {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-25%);
    opacity: .25;
  }
  50% {
    transform: translateX(-50%);
    opacity: .5
  }
  75% {
    transform: translateX(-75%);
    opacity: .75;
  }
  100% {
    transform: translateX(-100%);
    opacity: 0;
  }
}
</style>
