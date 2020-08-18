<template>
  <div>

    <h1>{{name}}</h1>

    <ul>
      <li><a href="mailto:ferran.maylinch@gmail.com" target="_blank">ferran.maylinch@gmail.com</a></li>
      <li><a href="cv.pdf" target="_blank">C.V. (PDF)</a></li>
      <li><a href="https://www.linkedin.com/in/ferranmaylinch/" target="_blank">LinkedIn</a></li>
      <li><a href="https://github.com/fmaylinch/" target="_blank">GitHub</a></li>
      <li><a href="https://stackoverflow.com/users/1121497/ferran-maylinch/" target="_blank">Stack Overflow</a></li>
    </ul>

    <h3>About me</h3>
    <p>I am a software developer with <strong>+10 years of experience</strong></p>
    <p>I also worked as a <strong>teacher</strong>, and recently I uploaded some <a href="https://www.youtube.com/playlist?list=PLYaFk7Tzx9nF7t6MoouS5pGHiSBZJEMHf" target="_blank">tutorials on YouTube</a>.</p>
    <p>I pursue <strong>business goals</strong> while keeping a <strong>clean code</strong> structure, so others can continue my work.</p>
    <p>Some of my hobbies are practicing sport, movies, reading and learning things like <a href="https://soundcloud.com/ferran-maylinch" target="_blank">guitar and music production</a>.</p>

    <h3>Technologies</h3>
    <p><i>Languages:</i> Java JavaScript Kotlin Scala Swift Android Python CSS SQL</p>
    <p><i>Frameworks:</i> Spring Dropwizard Quarkus TDD React Angular Vue</p>
    <p><i>Architecture:</i> AWS Heroku Node.js MongoDB Docker RabbitMQ</p>

    <h3>Languages</h3>
    <p><i>native</i> Spanish, Catalan, <i>advanced</i> English, <i>intermediate</i> Russian</p>

  </div>
</template>

<script>
export default {
  name: 'AboutMe',
  props: {
    name: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
i {
  font-style: normal;
  color: #9e9e9e;
}
</style>
