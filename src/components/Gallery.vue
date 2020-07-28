<template>
	<div class="u-gap-md u-mb-3xl dd-u-grid dd-u-grid-flow-row" :class="'dd-u-grid-cols-' + columns">
		<slot />
	</div>
</template>

<script>
export default {
	name: 'Gallery',
	props: {
		columns: {
			type: Number,
			default: 3,
		},
	},
}
</script>
