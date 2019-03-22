<template>
  <v-toolbar app>
    <v-toolbar-title class="headline text-uppercase">
      <span>{{title}}</span>
      <span class="font-weight-light">MATERIAL DESIGN</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn flat to="/">{{ $t('home') }}</v-btn>
    <v-btn flat to="i18n">I18N</v-btn>
    <v-btn flat to="example">{{ $t('example') }}</v-btn>
    <v-btn flat to="about">{{ $t('about') }}</v-btn>
    <v-btn flat href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank">
      <span class="mr-2">{{ $t('release') }}</span>
      <v-icon>open_in_new</v-icon>
    </v-btn>
    <LocaleChanger/>
  </v-toolbar>
</template>

<i18n>
  {
    "en": {
      "home": "Home",
      "example": "Example",
      "about": "Need help ?",
      "release": "Latest Release"
    },
    "fr": {
      "home": "Accueil",
      "example": "Exemple",
      "about": "Besoin d'aide ?",
      "release": "Dernière version"
    }
  }
</i18n>

<script>
import LocaleChanger from "@/components/i18n/LocaleChanger";
export default {
  components: { LocaleChanger },
  data() {
    return { title: process.env.VUE_APP_TITLE };
  }
};
</script>