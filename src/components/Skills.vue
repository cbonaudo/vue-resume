<template>
  <div class="skills component">
    <h2>Main Skills</h2>
    <!-- <h2>Compétences principales</h2> -->
    <div class="component-content">
      <div id="mask"></div>
      <ul v-for="skill in skills.EN" :key="skill.id">
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
          { categorie: "Architecture", content: "Rest, GQL, GRPC, Hexagonal architecture, DDD" },
          { categorie: "Rust", content: "Tokio, Bastion, Warp, Async-graphql" },
          { categorie: "Javascript", content: "Vue, React, Jest, Node, Express" },
          { categorie: "Practices", content: "Agile (Scrum, Kanban), SOLID, TDD" },
          { categorie: "CI/CD", content: "Github, Gitlab, CircleCI, Docker" },
          { categorie: "Databases", content: "MySQL, MongoDB" },
        ],
        FR: [
          {
            categorie: "Fonctionnelles",
            content:
              "Travail d'Equipe, Organisation, Remise en question, Enseignement, Apprentissage",
          },
          { categorie: "Rust", content: "Tokio, Bastion, Warp, Async-graphql" },
          { categorie: "Javascript", content: "Vue, React, Jest, Node, Express" },
          { categorie: "Architecture", content: "Rest, GQL, GRPC, Architecture hexagonale, DDD" },
          { categorie: "Pratiques", content: "Agile (Scrum, Kanban), SOLID, TDD" },
          { categorie: "CI/CD", content: "Github, Gitlab, CircleCI, Docker" },
          { categorie: "Bases de données", content: "PSQL, MongoDB" },
        ],
      },
    };
  },
};
</script>