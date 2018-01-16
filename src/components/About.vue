<template>
  <div class="about">
    <p>
      Hello, my name is John McGuin. I work as a software developer operating as The Way Software Development, LLC. 
      I specialize in web and mobile development, valuing simplicity, elegance, functionality, 
      intuitive UX, and beatiful UI. I consider myself a Jack of all trades, and pursue mastery 
      in modern front-end web development. Let's work together solving real world problems and create something great!
    </p>
  </div>
</template>

<script>
export default {
  name: "About"
};
</script>

<style lang="scss">
@import "../assets/styles/layout.scss";

.about {
  max-width: $content-inner-width;
  padding: 1rem;
  margin: auto;
}
</style>
