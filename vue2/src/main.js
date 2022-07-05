import Vue from "vue";
import App from "./App.vue";

// import MozaicVue from '@mozaic-ds/vue';

// Vue.use(MozaicVue);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
