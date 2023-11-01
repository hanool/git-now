<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
nav {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

nav * {
  margin-left: 10px;
}

nav *:first-child {
  margin-left: 0px;
}
</style>
