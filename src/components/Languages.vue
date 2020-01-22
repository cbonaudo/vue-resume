<template>
  <div class="languages component">
    <!-- <h2>Languages</h2> -->
    <h2>Langues</h2>
    <div class="component-content">
      <div id="mask"></div>
      <table>
        <tr v-for="language in languages.FR" :key="language.id">
          <td>
            <img class="icon" v-bind:src="getIcon(language.icon)" />
          </td>
          <td class="content">
            <div>
              <span class="title">{{ language.title }}</span>
              : {{ language.rating }}
            </div>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Languages",
  methods: {
    getIcon(path) {
      const images = require.context("../assets/languages");
      return images(`./${path}.png`);
    },
  },
  data() {
    return {
      languages: {
        EN: [
          { title: "French", rating: "Native", icon: "french" },
          { title: "English", rating: "Fluent", icon: "english" },
          { title: "Spanish", rating: "Intermediate", icon: "spanish" },
          { title: "German", rating: "Basic", icon: "german" },
        ],
        FR: [
          { title: "Français", rating: "Maternelle", icon: "french" },
          { title: "Anglais", rating: "Courant", icon: "english" },
          { title: "Espagnol", rating: "Intermediaire", icon: "spanish" },
          { title: "Allemand", rating: "Bases", icon: "german" },
        ],
      },
    };
  },
};
</script>

<style scoped>
</style>
