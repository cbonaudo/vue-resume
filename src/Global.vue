<template>

  <div class='global'>

    <Header></Header>
    <Contact></Contact>
    <Experiences></Experiences>
    <Skills></Skills>
    <Languages></Languages>
    <Formations></Formations>
    <Interests></Interests>

  </div>

</template>

<script>
import Header from './components/Header';
import Experiences from './components/Experiences';
import Formations from './components/Formations';
import Interests from './components/Interests';
import Skills from './components/Skills';
import Languages from './components/Languages';
import Contact from './components/Contact';

export default {
  name: 'Global',
  components: {
    Header,
    Experiences,
    Formations,
    Interests,
    Skills,
    Languages,
    Contact,
  },
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style>
h1 {
  font-weight: normal;
}
h2 {
  font-weight: normal;
  text-transform: uppercase;
  font-size: 1.2em;
  color: rgb(100, 163, 0);
}
h3 {
  font-weight: normal;
}
ul {
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
body {
  background-color: white;
  margin: 0;
}

/* Grid */
.global {
  display: grid;
  grid-template-columns: 61% 30%;
  grid-template-rows: auto auto auto auto;
  margin: 0% 8% 0% 15%;
  border-radius: 1%;
}

/* All components */
.global .component {
  height: 100%;
  margin-bottom: -4%;
  padding-right: 2%;
}
.component-content {
  border-left: 0px lightgrey solid;
  margin-top: -10px;
}
.title {
  font-weight: bold;
  letter-spacing: 0.03em;
}
.place {
  font-size: 0.9em;
  text-transform: uppercase;
  color: rgb(100, 163, 0);
}
.date {
  font-style: italic;
}
.occupation {
  display: list-item;
  list-style-type: disc;
  margin-left: 1.5em;
  margin-bottom: -20px;
}

/* Mask to hide the borders of each titles underline */
#mask {
  position: relative;
  left: 0%;
  width: 60%;
  height: 1px;
  background-color: rgb(119, 119, 119);
}

.icon {
  height: 30px;
  vertical-align: middle;
  padding-right: 5%;
}

/* Tables and their rows/cells */
table {
  margin-top: 2.5%;
  margin-bottom: 5%;
}
td {
  padding-bottom: 3%;
  padding-right: 4%;
}

/* Left side Column */
.contact,
.skills,
.languages,
.interests {
  background-color: rgb(41, 44, 47);
  color: white;
  padding-left: 5%;
  letter-spacing: 0.03em;
}
</style>
