<script setup lang="ts">
import CmdTyper from '@/components/CmdTyper.vue'
</script>

<template>
  <main>
    <CmdTyper class="cmd" />
  </main>
</template>

<style scoped>
main {
  width: 100%;
  min-height: calc(100vh - 100px);
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

main .cmd {
  width: 500px;
}
</style>
