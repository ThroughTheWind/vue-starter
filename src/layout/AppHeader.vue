<template>
  <v-toolbar app>
    <v-toolbar-title class="headline text-uppercase">
      <span>{{title}}</span>
      <span class="font-weight-light">MATERIAL DESIGN</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn flat to="/">Home</v-btn>
    <v-btn flat to="example">Example</v-btn>
    <v-btn flat to="about">Help ?</v-btn>
    <v-btn flat href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank">
      <span class="mr-2">Latest Release</span>
      <v-icon>open_in_new</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  data() {
    return { title: process.env.VUE_APP_TITLE };
  }
};
</script>