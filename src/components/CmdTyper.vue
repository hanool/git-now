<template>
  <div class="cmd-typer">
    <div class="background">
      <input type="text" v-model="background" />
    </div>
    <div class="foreground">
      <input type="text" v-model="foreground" @input="onInput" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const background = ref('')
const foreground = ref('')

const onInput = () => {
  background.value = foreground.value ? foreground.value + ' + some' : ''
}
</script>

<style scoped>
.cmd-typer {
  width: 100%;
  position: relative;
}

.background,
.foreground {
  position: absolute;
  left: 0px;
  top: 0;
  opacity: 70%;
}

input {
  padding-left: 30px;
}

.foreground::before {
  content: '> ';
  position: absolute;
  left: 8px;
  top: calc(
    0.25rem * var(--line-height) + var(--form-element-spacing-vertical) / 2 + var(--border-width) /
      2
  );
  font-weight: 900;
}
</style>
