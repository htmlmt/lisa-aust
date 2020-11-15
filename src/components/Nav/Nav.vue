<template>
	<div class="u-border-r-1 u-border-r-gray-300 u-border-r-solid u-w-250 dd-u-bg-white dd-u-h-screen dd-u-fixed dd-u-overflow-y-auto md:u-h-auto md:u-static md:u-w-full">
		<link
            rel="stylesheet"

            href="/wp-content/themes/lisa/assets/css/design-system.min.css"
        >
        
        <link
			rel="stylesheet"

			href="/wp-content/themes/lisa/assets/css/lisa-aust.min.css"
		>
		
		<nav class="u-text-sm u-py-xl">
			<div class="u-mb-2xl u-px-md md:u-mb-0 md:u-mx-auto md:u-p-0 md:u-w-100">
				<router-link
					class="dd-u-block dd-u-mx-auto"
					to="/"
				>
					<h1
						v-if="$route.name === 'home'"

						class="dd-u-m-0"
					>
						<img
							:src="`${publicPath}lisa-aust-photos-logo.svg`"

							alt="Lisa Aust Photos"
							class="dd-u-block"
						/>
					</h1>

					<img
						v-else

						:src="`${publicPath}lisa-aust-photos-logo.svg`"

						alt="Lisa Aust Photos"
						class="dd-u-block"
					/>
				</router-link>
			</div>

			<div class="md:u-hidden">
				<div class="u-mb-sm u-pl-md">
					<span class="u-text-gray-500">Services</span>
				</div>
				<ul class="dd-u-leading-loose dd-u-list-none dd-u-m-0 dd-u-p-0">
					<li
						v-for="service in services"
						:key="service.id"
					
						class="dd-u-mb-0"
					>
						<router-link
							:to="'/services/' + service.fields['URL']"

							class="link u-pl-3xl u-py-md u-text-gray-900 dd-u-flex dd-u-no-underline"
						>
							{{ service.fields['Name'] }}
						</router-link>
					</li>
					<li class="dd-u-mb-0">
						<NavLink
							view="saying"
							text="What Others Are Saying"
						/>
					</li>
					<li class="dd-u-mb-0">
						<NavLink
							view="rates"
							text="Rates"
						/>
					</li>
				</ul>
				<div
					class="u-bg-gray-300 u-h-1 u-my-lg dd-u-w-full"
					role="presentation"
				></div>
				<div class="u-mb-sm u-pl-md">
					<span class="u-text-gray-500">Get In Touch</span>
				</div>
				<ul class="dd-u-leading-loose dd-u-list-none dd-u-m-0 dd-u-p-0">
					<li class="dd-u-mb-0">
						<NavLink
							view="meet"
							text="Meet Lisa"
						/>
					</li>
					<li class="dd-u-mb-0">
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
import { mapGetters } from 'vuex';

import NavLink from '@/components/Nav/NavLink.vue'

export default {
	name: 'Nav',
	components: {
		NavLink
	},
	computed: {
        ...mapGetters([
            'services',
        ]),
	},
	data() {
		return {
			publicPath: process.env.BASE_URL
		}
	},
}
</script>
