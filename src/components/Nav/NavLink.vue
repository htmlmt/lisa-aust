<template>
	<router-link
		:to="{ name: view }"

		class="link u-pl-3xl u-py-md u-text-gray-900 dd-u-flex dd-u-no-underline"
	>
		{{ text }}
	</router-link>
</template>

<script>
export default {
	name: 'NavLink',
	props: {
		text: {
			type: String,
		},
		view: {
			type: String,
		},
	},
}
</script>

<style lang="scss">
	.link.router-link-exact-active {
		background-color: var(--pink-300);
		color: white;
	}
</style>
