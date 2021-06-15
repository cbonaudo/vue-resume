<template>
  <div class="formations component">
    <h2>{{ getLang == "fr" ? "Formation": "Education" }}</h2>
    <div class="component-content">
      <div id="mask"></div>
      <ul v-for="formation in formations[getLang]" :key="formation.id">
        <li class="occupation">
          <span class="place">{{ formation.place }}</span> -
          <span class="title">{{ formation.title }}</span>
        </li>
        <br />
        <li class="date">{{ formation.date }}</li>
        <br />
        <li>
          <p v-for="content in formation.contents" :key="content.id">{{ content }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Formations",
  data() {
    return {
      formations: {
        en: [
          {
            place: "Isitech",
            title: "Master's Degree in Computer Science",
            date: "February 2012 - January 2017",
            contents: [
              "Cursus : Programming - Project Management - System Administration - Networking",
              "Project :  Customers Loyalty Mobile App based on QR Code scanning (NodeJS and Cordova Mobile - Team of 6 people - 2 Developers)",
            ],
          },
        ],
        fr: [
          {
            place: "Isitech",
            title: "Master - Expert en Systèmes d'Information",
            date: "Février 2012 - Janvier 2017",
            contents: [
              "Cursus : Developpement - Gestion de Projet - Administration de Système - Réseau",
              "Projet : Application mobile de fidélisation client Customers basé sur le scan de QR Code (NodeJS et Cordova Mobile - Equipe de 6 personnes dont 2 developpeurs)",
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.formations {
}
</style>
