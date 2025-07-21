<script setup lang="ts">
import { ref } from 'vue';

  const myId = "patata";
  const myValue = ref("some value")
</script>

<scrip setup></scrip>

<template>
  <h1 v-bind:id="myId">Hola a todos !</h1>

  <h2>{{ myValue }}</h2>

  <input type="text" :value="myValue">
</template>

<style>

</style>