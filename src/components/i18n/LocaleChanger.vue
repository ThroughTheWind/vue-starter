<template>
  <div class="text-xs-center">
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn flat v-on="on" v-if="langs">{{getLocale.label}}</v-btn>
      </template>
      <v-list>
        <v-list-tile v-for="(lang, i) in langs" :key="`Lang${i}`" @click="switchLocale(lang)">
          <v-list-tile-title>{{ $_.toUpper(lang.label) }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      langs: [
        {
          label: "fr",
          icon: "test",
          value: "fr"
        },
        {
          label: "en",
          icon: "test",
          value: "en"
        }
      ]
    };
  },
  computed: {
    getLocale() {
      return this.$_.find(this.langs, lang => lang.value == this.$i18n.locale);
    }
  },
  methods: {
    switchLocale(lang) {
      this.$i18n.locale = lang.value;
      localStorage.locale = lang.value;
    }
  }
};
</script>