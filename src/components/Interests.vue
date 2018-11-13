<template>

  <div class="interests component">
    <h2>Interests</h2>
    <div class="component-content">
      <div id="mask"></div>
      <table>
        <tr v-for="interest in interests" :key="interest.id">
          <td><img class="icon" v-bind:src="getIcon(interest.icon)"></td>
          <td class="content">
            <div v-for="content in interest.contents" :key="content.id">{{ content }}</div>
          </td>
        </tr>
      </table>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Interests',
  methods: {
    getIcon(path) {
      const images = require.context('../assets/interests');
      return images(`./${path}.png`);
    },
  },
  data() {
    return {
      interests: [
        { contents: ['Music : Bass, Guitar, Piano, Saxophone'], icon: 'music' },
        { contents: ['Rock Climbing, Bike'], icon: 'climbing' },
        { contents: ['Cooking'], icon: 'cooking' },
        { contents: ['Language Learning'], icon: 'language' },
        { contents: ['Video Games'], icon: 'games' },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.interests {
}
</style>
