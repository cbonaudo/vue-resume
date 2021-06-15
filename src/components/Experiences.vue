<template>
  <div class="experiences component">
    <h2>Experiences</h2>
    <div class="component-content">
      <div id="mask"></div>
      <ul v-for="experience in experiences[getLang]" :key="experience.id">
        <li class="occupation">
          <span class="place">{{ experience.place }}</span> -
          <span class="title">{{ experience.title }}</span>
        </li>
        <br />
        <li class="date">{{ experience.date }}</li>
        <br />
        <li>
          <p v-for="content in experience.contents" :key="content.id">{{ content }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Experiences",
  data() {
    return {
      experiences: {
        en: [
          {
            place: "IOmentum",
            title: "Rust Developper",
            date: "February 2020 - ...",
            contents: [
              "Creation and Maintenance of an e-commerce platform (Rust, ReactJS)",
              "Setup of an Hexagonal Architecture and Domain Driven Design (Rust)",
              "Support and advices to junior developpers",
              "Development of several applications : Crossword, Backoffices (Rust, ReactJS)",
            ],
          },
          {
            place: "Bedrock",
            title: "Javascript Developper",
            date: "March 2020 - ...",
            contents: [
              "Creation and Maintenance of backoffice applications for the Salto and 6play platform (VueJS)",
              "Focus on resillience and reusability, through Functional/Unit testing, Documentation, Design System, Accessibility, Responsiveness & Version upgrades",
              "Scripts and packages creation (NodeJS, Github, Slack)",
              "Agile/Scrumban environment and Retrospective animation",
            ],
          },
          {
            place: "Uplab",
            title: "FullStack Web Developer",
            date: "November 2019 - February 2020",
            contents: [
              "Develop and maintain webapps (Angular 8, Vue, NodeJS, MariaDB, ElasticSearch)",
              "Working with Scrum using CI/CD (Github, Docker, Heroku) and Unit testing",
              "Focus on Refactoring, Code Reviewing, Security and Internationalisation",
            ],
          },
          {
            place: "Amiltone",
            title: "FullStack Web Developer",
            date: "February 2019 - November 2019",
            contents: [
              "Develop and maintain webapps (Angular 8, NodeJS, PostgreSQL)",
              "Working with Agile Methodologies using CI/CD (CircleCI, Docker) and Unit testing",
            ],
          },
          {
            place: "Personal",
            title: "FullStack Web Developer",
            date: "June 2018 - Current",
            contents: ["Working on personal Javascript projects (Vue, Angular, React, Node)"],
          },
          {
            place: "Expeditors",
            title: "Europe Application Support",
            date: "January 2015 - July 2018",
            contents: [
              "Creation and Maintenance of tools for local users (VBA, Excel, Pascal Scripts)",
              "Specialized User Support and Training on Company's ERPs for all European offices",
            ],
          },
        ],
        fr: [
          {
            place: "Bedrock",
            title: "Développeur Javascript",
            date: "Mars 2020 - ...",
            contents: [
              "Création et Maintenance d'applications backoffice pour la plate-forme Salto et 6play (VueJS)",
              "Focus sur la résilience et la réutilisabilité, via Tests fonctionnels, Documentation, Design System, Accessibilité, Responsiveness & Montée de version",
              "Création de scripts et de packages (NodeJS, Github, Slack)",
              "Environnement Agile/Scrum et Animation de rétrospectives",
            ],
          },
          {
            place: "IOmentum",
            title: "Développeur Rust",
            date: "Février 2020 - ...",
            contents: [
              "Création et Maintenance d'une plate-forme de E-commerce (Rust, ReactJS)",
              "Mise en place d'architecture hexagonale et de Domain Driven Design (Rust)",
              "Support et conseils aux développeurs juniors",
              "Développement de plusieurs applications : Mots-croisés, Backoffices (Rust, ReactJS)",
            ],
          },
          {
            place: "Uplab",
            title: "Développeur Web Fullstack",
            date: "Novembre 2019 - Février 2020",
            contents: [
              `Développement et maintenance d'applications (Angular 8, Vue, NodeJS, MariaDB, ElasticSearch), 
              Réalisées en Scrum à l'aide de CI/CD (Github, Docker, Heroku)`,
              "Focus sur les Tests, les Code review, le Refactoring et l'Internationalisation",
            ],
          },
          {
            place: "Amiltone",
            title: "Développeur Web Fullstack",
            date: "Février 2019 - Novembre 2019",
            contents: [
              `Développement et maintenance d'applications (Angular 8, NodeJS, PostgreSQL), 
              Réalisées en Scrum à l'aide de CI/CD (CircleCI, Docker)`,
              "Focus sur les Tests, l'Accessibilité et la Responsiveness",
            ],
          },
          {
            place: "Personal",
            title: "Développeur Web Fullstack",
            date: "Juin 2018 - En Cours",
            contents: [
              "Travail régulier sur différentes applications personnelles (Vue, Angular, React, Node)",
            ],
          },
          {
            place: "Expeditors",
            title: "Support Applicatif Europe",
            date: "Janvier 2015 - Juillet 2018",
            contents: [
              "Création et Maintenance d'outils pour l'agence de Lyon (VBA, Excel, Script Pascal)",
              "Support Spécialisé et Formation des bureaux Européens sur l'ERP Propriétaire",
            ],
          },
        ],
      },
    };
  },
  computed: {
    getLang() {
      return this.$route.params.lang == "fr" ? "fr" : "en";
    },
  },
};
</script>

<style scoped>
.experiences {
  grid-row: 2 / span 2;
  padding-bottom: 10px;
}
</style>
