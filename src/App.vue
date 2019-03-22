<template>
  <v-app>
    <router-view name="header"></router-view>

    <v-content>
      <router-view/>
    </v-content>

    <router-view name="footer"></router-view>
  </v-app>
</template>


<script>
import Vue from "vue";
export default {
  name: "App",
  data() {
    return {
      a: "debug log test",
      b: "debug info test",
      c: {
        firstvalue: "testing",
        secondvalue: 1999
      }
    };
  },
  created() {
    this.$log.debug("test", this.a, 123);
    this.$log.info("test", this.b, 7777, this.c);
    this.$log.warn("test");
    this.$log.error("test");
    this.$log.fatal("test");
    externalFunction();
  }
};

function externalFunction() {
  // log from external function
  Vue.$log.debug("log from function outside component.");
}
</script>
