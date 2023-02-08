<template>
  <h1>Color Picker Game</h1>

  <div>{{ outputMessage }}</div>

  <button v-for="color in colorsArray" :key="color" @click="picker(color)">
    {{ color }}
  </button>
</template>

<script>
import { ref } from "@vue/reactivity";
import useGamePickerComposable from "../composables/useGamePickerComposable";

export default {
  setup() {
    const colorsArray = ["green", "red", "blue", "purple"];
    let outputMessage = ref("Pick a color...");
    const picker = useGamePickerComposable(colorsArray, outputMessage);

    return { colorsArray, outputMessage, picker };
  },
};
</script>

<style></style>
