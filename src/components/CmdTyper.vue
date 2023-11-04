<template>
	<div class="cmd-typer" ref="main">
		<div class="outputs">
			{{ textarea }}
			<div v-for="row in rows" :key="row.idx" class="cursored">
				<span class="cursor">❯</span>
				<input type="text" :value="row.data" readonly />
			</div>
		</div>
		<div class="input-area">
			<div class="background main-cursor">
				<span class="cursor">gitorial.com@~/ ❯</span>
				<input type="text" v-model="background" />
			</div>
			<div class="foreground main-cursor">
				<span class="cursor">gitorial.com@~/ ❯</span>
				<input type="text" v-model="foreground" ref="input" @input="onInput" @keydown="onkeydown" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, nextTick, onMounted } from 'vue'
import useCommander from '@/composables/useCommander'

const { processCommand } = useCommander();
const textarea = ref('')
const background = ref('')
const foreground = ref('')
const rows = ref<{ idx: number, data: string }[]>([])
const input = ref<HTMLInputElement>()
const main = ref<HTMLDivElement>()

onMounted(() => {
	if (input.value) {
		input.value.focus();
	}
})

const onInput = () => {
	background.value = foreground.value ? foreground.value + ' + some' : ''
}

const onkeydown = async (e: KeyboardEvent) => {
	if (e.key === 'Enter') {
		const result = processCommand(foreground.value)
				?.process(rows.value);
		if (result) {
			rows.value = result;
		}
		foreground.value = ''

		await nextTick();
		main.value?.scroll({ top: main.value.clientHeight + (input.value?.clientHeight || 0) })
		onInput();
	}
}
</script>

<style scoped>
.cmd-typer {
	min-height: 300px;
	max-height: 300px;
	overflow-y: auto;
	border: 1px solid white;
}

.input-area {
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
	width: auto;
	border: none;
	border-width: 0px;
	box-shadow: none;
	margin-bottom: 0;
	--line-height: 0;
	padding-left: 0.5rem;
}

.cursored {
	position: relative;
}

.cursor {
	padding-left: 0.5rem;
}
</style>
