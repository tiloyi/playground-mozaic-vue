<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <!-- <m-button label="Ceci est un bouton" /> -->
    <p>Valeur : {{ myValue }}</p>
    <m-autocomplete :items="items" :multiple="true" v-model="myValue" @change="onChange" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import MAutocomplete from "@mozaic-ds/vue/src/components/autocomplete/MAutocomplete.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    MAutocomplete,
  },
  data() {
    return {
      items: [
        {
          id: 1,
          value: 1,
          text: "First Item",
          selected: false,
        },
        {
          id: 2,
          value: 2,
          text: "Second Item",
          selected: false,
        },
        {
          id: 3,
          value: 3,
          text: "Third Item",
          selected: false,
        },
        {
          id: 4,
          value: 4,
          text: "Fourth Item",
          selected: false,
        },
        {
          id: 5,
          value: 5,
          text: "Fifth Item",
          selected: false,
        },
      ],
      myValue: [2, 5],
    };
  },
  methods: {
    onChange() {
      console.log('Pouloulou !');
    }
  }
};
</script>

<style lang="scss">
@import "settings-tools/_all-settings";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
