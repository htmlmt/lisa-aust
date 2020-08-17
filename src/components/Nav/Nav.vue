<template>
	<div class="u-border-r-1 u-border-r-gray-300 u-border-r-solid u-w-250 dd-u-bg-white dd-u-h-screen dd-u-fixed dd-u-overflow-y-auto md:u-h-auto md:u-static md:u-w-full">
		<nav class="u-text-sm u-py-xl">
			<div class="u-mb-2xl u-px-md md:u-mb-0 md:u-mx-auto md:u-p-0 md:u-w-100">
				<router-link class="dd-u-block dd-u-mx-auto" to="/">
					<h1 class="dd-u-m-0" v-if="$route.name === 'home'"><img class="dd-u-block" alt="Lisa Aust Photos" :src="`${publicPath}lisa-aust-photos-logo.svg`" /></h1>
					<img v-else class="dd-u-block" alt="Lisa Aust Photos" :src="`${publicPath}lisa-aust-photos-logo.svg`" />
				</router-link>
			</div>
			<div class="md:u-hidden">
				<div class="u-mb-sm u-pl-md">
					<span class="u-text-gray-500">Services</span>
				</div>
				<ul class="dd-u-leading-loose dd-u-list-none dd-u-m-0 dd-u-p-0">
					<li>
						<NavLink
							view="event"
							text="Event Photos"
						/>
					</li>
					<li>
						<NavLink
							view="social"
							text="Social Photos"
						/>
					</li>
					<li>
						<NavLink
							view="professional"
							text="Professional Portraits"
						/>
					</li>
					<li>
						<NavLink
							view="saying"
							text="What Others Are Saying"
						/>
					</li>
					<li>
						<NavLink
							view="rates"
							text="Rates"
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
			</div>
		</nav>
	</div>
</template>

<script>
import NavLink from '@/components/Nav/NavLink.vue'

export default {
	name: 'Nav',
	components: {
		NavLink
	},
	data() {
		return {
			publicPath: process.env.BASE_URL
		}
	},
}
</script>
