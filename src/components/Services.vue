<template>
  <div>
    <div class="grid--services">
      <div class="service" v-for="service in services" v-bind:key="service.id">
        <img class="icon" :src="service.icon"/>
        <div class="description">
          <h3>{{service.name}}</h3>
          <p>{{service.description}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import services from "../model/services";

export default {
  name: 'Services',
  data() {
    return { services };
  }
}
</script>

<style lang="scss">
.grid--services {
  display: grid;
  grid-template-columns: 1; 
  grid-gap: 2rem;
}
.service {
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .icon {
    flex: 1 0 auto;
    height: 75px;
  }

  .description {
    flex: 1 1 50%;
    text-align: left;
  }
}
</style>