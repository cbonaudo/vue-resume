<template>

  <div class="skills component">
    <h2>Main Skills</h2>
    <div class="component-content">
      <div id="mask"></div>
      <ul v-for="skill in skills" :key="skill.id">
        <li><span class="title">{{ skill.categorie }} :</span><br>{{ skill.content }}</li>
      </ul>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Skills',
  data() {
    return {
      skills: [
        {
          categorie: 'Functional',
          content: 'Teamwork, Organisation, Reassessment, Teaching, Learning',
        },
        { categorie: 'Javascript', content: 'React, Vue, Node, Express, Jest' },
        { categorie: 'Practices', content: 'Agile, SOLID, TDD' },
        { categorie: 'Miscellaneous', content: 'CSS, Git, MongoDB, mySQL, Ubuntu' },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
