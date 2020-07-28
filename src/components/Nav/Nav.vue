<template>
	<div class="u-bg-gray-100 u-border-r-1 u-border-r-gray-300 u-border-r-solid u-w-250 dd-u-h-screen dd-u-fixed">
		<nav class="u-text-sm u-py-3xl">
			<div class="u-mb-2xl u-pl-md u-pr-3xl">
				<router-link to="/">
					<h1 class="dd-u-m-0" v-if="$route.name === 'home'"><img class="dd-u-block" alt="Lisa Aust Photos" src="../../assets/lisa-aust-logotype.svg" /></h1>
					<img v-else class="dd-u-block" alt="Lisa Aust Photos" src="../../assets/lisa-aust-logotype.svg" />
				</router-link>
			</div>
			<div class="u-mb-sm u-pl-md">
				<span class="u-text-gray-500">Portfolio</span>
			</div>
			<ul class="dd-u-leading-loose dd-u-list-none dd-u-m-0 dd-u-p-0">
				<li>
					<NavLink
						view="corporate"
						text="Corporate"
					/>
				</li>
				<li>
					<NavLink
						view="event"
						text="Event"
					/>
				</li>
				<li>
					<NavLink
						view="lifestyle"
						text="Lifestyle"
					/>
				</li>
			</ul>
			<div class="u-bg-gray-300 u-h-1 u-my-lg dd-u-w-full" role="presentation"></div>
			<div class="u-mb-sm u-pl-md">
				<span class="u-text-gray-500">Get In Touch</span>
			</div>
			<ul class="dd-u-leading-loose dd-u-list-none dd-u-m-0 dd-u-p-0">
				<li>
					<NavLink
						view="meet"
						text="Meet Lisa"
					/>
				</li>
				<li>
					<NavLink
						view="contact"
						text="Contact"
					/>
				</li>
			</ul>
		</nav>
	</div>
</template>

<script>
import NavLink from '@/components/Nav/NavLink.vue'

export default {
	name: 'Nav',
	components: {
		NavLink
	}
}
</script>
