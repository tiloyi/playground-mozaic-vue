<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    {{ textvalue }}
    <br />
    {{ textvalue.length }}
    <br />
    <input
      type="number"
      name="nativefield"
      id="nativefield"
      v-model="textvalue"
    />
    <br />
    <MTextInput
      type="number"
      name="mozaicfield"
      id="mozaicfield"
      v-model="textvalue"
      @input="onInput"
      @blur="onBlur"
    />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import MTextInput from "@mozaic-ds/vue/src/components/textinput/MTextInput.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    MTextInput,
  },
  data() {
    return {
      textvalue: 234,
    };
  },
  methods: {
    onInput(event) {
      console.log(event);
    },
    onBlur(event) {
      console.log(event);
    },
  },
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
