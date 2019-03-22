<template>
  <div class="text-xs-center">
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn flat v-on="on" v-if="langs">
          <i :class="[flagClass, getLocale.flagClass]"></i>
        </v-btn>
      </template>
      <v-list>
        <v-list-tile v-for="(lang, i) in langs" :key="`Lang${i}`" @click="switchLocale(lang)">
          <v-list-tile-title>
            <i :class="[flagClass, lang.flagClass]"></i>
            {{ $t(lang.label) }}
          </v-list-tile-title>
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
          label: "localeChanger.en-label",
          flagClass: "flag-us",
          value: "en"
        },
        {
          label: "localeChanger.fr-label",
          flagClass: "flag-fr",
          value: "fr"
        }
      ],
      flagClass: "flag"
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
      localStorage.setItem("locale", lang.value);
    }
  }
};
</script>