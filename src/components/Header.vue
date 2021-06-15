<template>
  <div class="header component">
    <img src="../assets/cedric.jpg" />

    <h1>
      <span class="name">Cedric Bonaudo</span>
      <br />
      <span class="job-title">{{ getLang == "fr" ? "Développeur Rust/Javascript" : "Rust/Javascript Developer" }}</span>
    </h1>

    <h3 class="quote">
      {{ getLang == "fr" ? 
      `Travailler en équipe pour construire des applications complexes et utiles,
      tout en améliorant mes connaissances de Rust, Javascript et de leurs écosystèmes.` :
      `Working with people to build helpful and complex applications,
      while perfecting my knowledge of Rust, Javascript and their ecosystem.` }}
    </h3>
  </div>
</template>

<script>
export default {
  name: "Header",
  computed: {
    getLang() {
      return this.$route.params.lang == "fr" ? "fr" : "en";
    },
  },
};
</script>

<style scoped>
/* Grid */
.header {
  display: grid;
  grid-template-columns: 38% auto;
  grid-template-rows: 50% auto;
  height: 290px;
  text-align: left;
}
h1 {
  padding-top: 3%;
  margin: 0% 3% 0% 0%;
}
h3 {
  margin: 3% 3% 0% 0%;
}
.name {
  font-size: 1.2em;
  font-weight: bold;
  text-transform: uppercase;
}
.job-title {
  color: rgb(100, 163, 0);
}
.quote {
  font-style: italic;
}
img {
  grid-row: 1 / span 2;
  height: 240px;
  border-radius: 5%;
  margin: 4% 0% 0% 0%;
}
</style>
