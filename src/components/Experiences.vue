<template>

  <div class="experiences component">
    <h2>Experiences</h2>
    <div class="component-content">
      <div id="mask"></div>
      <ul v-for="experience in experiences" :key="experience.id">
        <li class="occupation">
          <span class="place">{{ experience.place }}</span> -
          <span class="title">{{ experience.title }}</span>
        </li><br>
        <li class="date">{{ experience.date }}
        </li><br>
        <li>
          <p v-for="content in experience.contents" :key="content.id">{{ content }}</p>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Experiences',
  data() {
    return {
      experiences: [
        {
          place: 'Self-Employed',
          title: 'Web Developer',
          date: 'June 2018 - Current',
          contents: [
            'Working on Personal Javascript projects (available on github.com/cbonaudo) :',
            '- CRUD App, Dynamic Booking App : React - NodeJS - MongoDB',
            'Writing about JS and its ecosystem on my Personal Blog : cbonaudo.io',
          ],
        },
        {
          place: 'Expeditors',
          title: 'Europe Application Support',
          date: 'January 2015 - July 2018',
          contents: [
            "Specialized User Support and Training on Company's ERPs for all European offices",
            'Creating and delivering courses (Excel, OneNote) to European offices ',
            'Creation and Maintenance of tools for local users (VBA, Excel, Pascal Scripts)',
          ],
        },
        {
          place: 'Groupe Icare',
          title: 'Information Technician',
          date: 'February 2012 - August 2014',
          contents: [
            'SQL Requests Development for Reporting',
            'Maintenance of Computers, User Support',
          ],
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.experiences {
  grid-row: 2 / span 2;
  padding-bottom: 10px;
}
</style>
