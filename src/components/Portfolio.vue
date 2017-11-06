<template>
  <div>
    <h1>Hello Portfolio Page</h1>
    <ul>
      <li v-for="project in projects" v-bind:key="project.id">{{project.name}}</li>
    </ul>
    <p>**definitely needs styling, just getting a simple list view rendered from a projects.js file</p>
  </div>
</template>

<script>
import projects from "../model/projects";

export default {
  name: "Portfolio",
  data() {
    return { projects };
  }
};
</script>