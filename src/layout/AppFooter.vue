<template>
  <v-footer class="pa-3" app>
    <v-spacer></v-spacer>
    <div>NODE_ENV : {{mode}} - Configuration test : {{testing}} - &copy; {{ new Date().getFullYear() }}</div>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      mode: process.env.NODE_ENV,
      testing: this.$config.get("testing", "")
    };
  }
};
</script>