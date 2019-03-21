import _ from "lodash";

const config = require("./config.development.json");
const config_production = require("./config.production.json");
const config_staging = require("./config.staging.json");

export default {
  get(path, defaultValue) {
    if (process.env.VUE_APP_MODE == "production") {
      return _.get(config_production, path, defaultValue);
    } else if (process.env.VUE_APP_MODE == "staging") {
      return _.get(config_staging, path, defaultValue);
    } else {
      return _.get(config, path, defaultValue);
    }
  }
};
