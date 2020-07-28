<template>
	<div class="u-rounded-md dd-u-overflow-hidden">
		<img class="dd-u-block" :src="src" :alt="alt">
	</div>
</template>

<script>
export default {
	name: 'Thumbnail',
	props: {
		alt: {
			type: String,
		},
		src: {
			type: String,
		},
	},
}
</script>
