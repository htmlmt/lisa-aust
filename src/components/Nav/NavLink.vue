<template>
	<router-link class="link u-pl-3xl u-text-gray-900 dd-u-flex dd-u-no-underline" :to="{ name: view }">{{ text }}</router-link>
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
		background-color: var(--purple-300);
	}
</style>
