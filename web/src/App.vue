<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <img alt="Vue logo" src="assets/vue.svg" />
  <HelloWorld msg="Hello Vue 3 + Vite" />
  <div class="styled-div">This div should be red.</div>
</template>

<style lang="scss">
$primary-color: red;

.styled-div {
  color: $primary-color;
  font-weight: bold;
  padding: 10px;
  border: 1px solid black;
}
</style>

