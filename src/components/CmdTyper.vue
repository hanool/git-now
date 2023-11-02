<template>
  <div class="cmd-typer">
    <div class="outputs">
        {{ textarea }}
    </div>
    <div class="input-area">
      <div class="background">
        <input type="text" v-model="background" />
      </div>
      <div class="foreground">
        <input type="text" v-model="foreground" ref="input" @input="onInput" @keydown="onkeydown"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { VueElement, ref, onMounted } from 'vue'


const textarea = ref('')
const background = ref('')
const foreground = ref('')
const input = ref(null)

onMounted(() => {
  input.value.focus();
})

const onInput = () => {
  background.value = foreground.value ? foreground.value + ' + some' : ''
}

const onkeydown = (e: KeyboardEvent) => {
  if (e.key === 'Enter') {
    textarea.value += '\r\n ❯ ' + foreground.value;
    foreground.value = ''
  }
}
</script>

<style scoped>
.cmd-typer {
  min-height: 300px;
  max-height: 1000px;
  overflow-y: auto;
}

.input-area {
  width: 100%;
  position: relative;
}

.outputs {
  white-space: pre-line;
  margin-left: 9px;
  empty-cells: show;
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
  border: none;
  border-width: 0px;
  box-shadow: none;
}

.foreground::before {
  content: '❯ ';
  position: absolute;
  left: 8px;
  top: calc(0.25rem * var(--line-height) + var(--form-element-spacing-vertical) / 2 + var(--border-width) / 2);
  font-weight: 900;
}
</style>
