import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSpinner,
  faCircleNotch,
  faTable,
  faWeight,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedinIn,
  faFontAwesome,
} from "@fortawesome/free-brands-svg-icons";
// import { faLinkedIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { directive as onClickaway } from "vue-clickaway";
import VueGoodTablePlugin from "vue-good-table";
import "vue-good-table/dist/vue-good-table.css";

import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";

const requireComponent = require.context(
  // The relative path of the components folder
  "./components",
  // Whether or not to look in subfolders
  false,
  // The regular expression used to match base component filenames
  /Base[A-Z]\w+\.(vue|js)$/
);

requireComponent.keys().forEach((fileName) => {
  // Get component config
  const componentConfig = requireComponent(fileName);

  // Get PascalCase name of component
  const componentName = upperFirst(
    camelCase(
      // Gets the file name regardless of folder depth
      fileName
        .split("/")
        .pop()
        .replace(/\.\w+$/, "")
    )
  );

  // Register component globally
  Vue.component(
    componentName,
    // Look for the component options on `.default`, which will
    // exist if the component was exported with `export default`,
    // otherwise fall back to module's root.
    componentConfig.default || componentConfig
  );
});

library.add(
  faSpinner,
  faCircleNotch,
  faLinkedinIn,
  faFontAwesome,
  faTable,
  faWeight,
  faHome
);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;

Vue.directive("on-clickaway", onClickaway);
Vue.use(VueGoodTablePlugin);
new Vue({ router, store, render: (h) => h(App) }).$mount("#app");
