<template>
  <div>
    <div class="grid--projects">
      <div class="project" v-for="project in projects" v-bind:key="project.id">
        <div class="img" v-bind:style="{ backgroundImage: 'url(' + project.img + ')'}"></div>

        <div class="description">
          <div>
            <h3>{{project.title}}</h3>
          </div>
          <ul>
            <li v-for="(tech, idx) in project.technologies" v-bind:key="idx">
              {{tech}}<span v-if="idx + 1 < project.technologies.length">, </span>
            </li>
          </ul>
        </div>
        <div class="mask">
          <div class="content">
            <h4>{{project.title}}</h4>
            <p>{{project.description}}</p>
          </div>
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
.grid--projects {
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  grid-gap: 2rem;
}

.project {
  position: relative;
  box-shadow: 0px 0px 2px 0px rgba(150, 150, 150, 0.9);
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &:nth-child(4) {
    grid-column: 1/3;
  }

  .img {
    width: 100%;
    height: 125px;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .description {
    padding: 1rem;
    flex: 1 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }

  .mask {
    position: absolute;
    height: 0;
    overflow: hidden;
    background-color: transparent;
    transition: all .5s ease;
  }

  .content {
    color: white;
    text-align: left;
    padding: 1rem;
    opacity: 0;
    transition: opacity .5s ease;
  }

  &:hover {
    .mask {
      height: auto;
      display: flex;
      align-items: center;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgba(0,0,0, .8);
      transition: all .5s ease;
    }

    .content {
      opacity: 1;
      transition: opacity .5s ease;
      transition-delay: .5s;
    }
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