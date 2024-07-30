<template>
  <div id="app">
    <h1>Pakistani Food</h1>
    <FoodMenu />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FoodMenu from './components/FoodMenu.vue';

export default defineComponent({
  name: 'App',
  components: {
    FoodMenu
  }
});
</script>

<style>
#app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px;
}
h1 {
  text-align: center;
  margin-bottom: 32px;
}
</style>
