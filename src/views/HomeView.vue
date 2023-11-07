<template>
	<main>
		<CmdTyper class="cmd" />
	</main>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import CmdTyper from '@/components/CmdTyper.vue'
import { initStage } from '@/composables/useGit'

onMounted(async () => {
	await initStage()
})
</script>

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
