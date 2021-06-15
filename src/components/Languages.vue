<template>
  <div class="languages component">
    <h2>{{ getLang == "fr" ? "Langues" : "Languages" }}</h2>
    <div class="component-content">
      <div id="mask"></div>
      <table>
        <tr v-for="language in languages[getLang]" :key="language.icon" @click="() => changeLanguage(language.icon)" class="lang">
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
  data() {
    return {
      languages: {
        en: [
          { title: "French", rating: "Native", icon: "french" },
          { title: "English", rating: "Fluent", icon: "english" },
          { title: "Spanish", rating: "Intermediate", icon: "spanish" },
          { title: "German", rating: "Basic", icon: "german" },
        ],
        fr: [
          { title: "Français", rating: "Maternelle", icon: "french" },
          { title: "Anglais", rating: "Courant", icon: "english" },
          { title: "Espagnol", rating: "Intermediaire", icon: "spanish" },
          { title: "Allemand", rating: "Bases", icon: "german" },
        ],
      },
    };
  },
  computed: {
    getLang() {
      return this.$route.params.lang == "fr" ? "fr" : "en";
    },
  },
  methods: {
    getIcon(path) {
      const images = require.context("../assets/languages");
      return images(`./${path}.png`);
    },
    changeLanguage(languageName) {
      if (languageName === "french") {
        this.$router.push("/fr");
      } else {
        this.$router.push("/en");
      }
    },
  },
};
</script>

<style scoped>
.lang {
  cursor: pointer;
}
</style>
