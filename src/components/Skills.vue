<template>
  <div class="skills component">
    <h2>Main Skills</h2>
    <div class="component-content">
      <div id="mask"></div>
      <ul v-for="skill in skills.FR" :key="skill.id">
        <li>
          <span class="title">{{ skill.categorie }} :</span>
          <br />
          {{ skill.content }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Skills",
  data() {
    return {
      skills: {
        EN: [
          {
            categorie: "Functional",
            content: "Teamwork, Organisation, Reassessment, Teaching, Learning",
          },
          { categorie: "Javascript", content: "Angular, Vue, Node, React, Express, Jest" },
          { categorie: "Practices", content: "Agile (Scrum, Kanban), SOLID, TDD" },
          { categorie: "CI/CD", content: "Github, Gitlab, CircleCI, Docker" },
          { categorie: "Databases", content: "MySQL, MongoDB, ElasticSearch" },
        ],
        FR: [
          {
            categorie: "Fonctionnelles",
            content:
              "Travail d'Equipe, Organisation, Remise en question, Enseignement, Apprentissage",
          },
          { categorie: "Javascript", content: "Angular, Vue, Node, React, Express, Jest" },
          { categorie: "Pratiques", content: "Agile (Scrum, Kanban), SOLID, TDD" },
          { categorie: "CI/CD", content: "Github, Gitlab, CircleCI, Docker" },
          { categorie: "Bases de données", content: "MySQL, MongoDB, ElasticSearch" },
        ],
      },
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
