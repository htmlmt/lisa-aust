<template>
	<div class="u-gap-md u-masonry u-mb-3xl">
		<slot />
	</div>
</template>

<script>
export default {
	name: 'Gallery',
	props: {
		columns: {
			type: [Number, String],
			default: 3,
		},
	},
}
</script>
