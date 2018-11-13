<template>

  <div class="contact component">
    <h2>Contact Me</h2>
    <div class="component-content">
      <div id="mask"></div>
      <table>
        <tr v-for="contact in contacts" :key="contact.id">
          <td><img class="icon" v-bind:src="getIcon(contact.icon)"></td>
          <td class="content">
            <div v-for="content in contact.contents" :key="content.id">{{ content }}</div>
          </td>
        </tr>
      </table>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Experiences',
  methods: {
    getIcon(path) {
      const images = require.context('../assets/contacts');
      return images(`./${path}.png`);
    },
  },
  data() {
    return {
      contacts: [
        { contents: ['8 Quai Jules Courmont', 'Lyon 02, France'], icon: 'address' },
        { contents: ['06.95.36.70.43'], icon: 'phone' },
        { contents: ['cedricbonaudo@gmail.com'], icon: 'email' },
        { contents: ['@CBonaudo'], icon: 'twitter' },
        { contents: ['http://cbonaudo.io/'], icon: 'www' },
      ],
    };
  },
};
</script>

<style scoped>
</style>
