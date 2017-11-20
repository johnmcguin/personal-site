<template>
  <div>
    <h1>Portfolio of Works</h1>
    <div class="grid">
      <div class="project" v-for="project in projects" v-bind:key="project.id">
        <div class="img" v-bind:style="{ backgroundImage: 'url(' + project.img + ')'}"></div>

        <div class="description">
          <div>
            <h3>{{project.title}}</h3>
            <h6>{{project.subTitle}}</h6>
            <p>{{project.description}}</p>
          </div>
          <ul>
            <li>Tech Stack:</li>
            <li v-for="(tech, idx) in project.technologies" v-bind:key="idx">
              {{tech}}<span v-if="idx + 1 < project.technologies.length">, </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
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

<style lang="scss">
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  grid-gap: 2rem;
}

.project {
  box-shadow: 0px 0px 2px 0px rgba(150, 150, 150, 0.9);
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .img {
    width: 100%;
    height: 125px;
    background-size: cover;
    background-position: center center;
  }

  .description {
    padding: 1rem;
    flex: 1 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }

  h3, h6 {
    text-align: left;
    margin: 0px;
  }

  p {
    text-align: left;
  }

  ul {
    margin: 0px;
    li {
      margin: 0px 4px 0px 0px;
      font-size: 1rem;
    }
  }
}
</style>