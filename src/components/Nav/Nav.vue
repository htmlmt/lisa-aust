<template>
	<div class="u-border-r-1 u-border-r-gray-300 u-border-r-solid u-w-250 dd-u-bg-white dd-u-h-screen dd-u-fixed dd-u-overflow-y-auto md:u-h-auto md:u-static md:u-w-full">
		<nav class="u-text-sm u-py-xl dd-u-relative md:u-p-0">
			<div class="u-logo-menu">
				<div class="u-mb-2xl u-px-md md:u-mb-0 md:u-mx-auto md:u-p-0 md:u-w-100">
					<router-link
						class="dd-u-block dd-u-mx-auto"
						to="/"
					>
						<h1
							v-if="$route.name === 'home'"

							class="dd-u-m-0"
							
							@click="closeNav"
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
				
				<button
					class="button menu-button u-mr-xl dd-u-absolute dd-u-center-y dd-u-right-0"
					
					@click="toggleNav"
				>
					Menu
				</button>
			</div>

			<div
				class="u-off-canvas-nav"
				
				:style="navShown ? 'left: 0;' : ''"
			>
				<div class="u-mb-sm u-pl-md">
					<span class="u-text-gray-500">Services</span>
				</div>
				<ul class="dd-u-leading-loose dd-u-list-none dd-u-m-0 dd-u-p-0">
					<li
						v-for="service in services"
						:key="service.id"
					
						class="dd-u-mb-0"
					
						@click="closeNav"
					>
						<router-link
							:to="'/services/' + service.fields['URL']"

							class="link u-pl-3xl u-py-md u-text-gray-900 dd-u-flex dd-u-no-underline"
							
							@click="closeNav"
						>
							{{ service.fields['Name'] }}
						</router-link>
					</li>
					<li
						v-if="quotes.length > 0"
					
						class="dd-u-mb-0"
					
						@click="closeNav"
					>
						<router-link
							to="/what-others-are-saying"

							class="link u-pl-3xl u-py-md u-text-gray-900 dd-u-flex dd-u-no-underline"
							
							@click="closeNav"
						>
							What Others Are Saying
						</router-link>
					</li>
					<li
						class="dd-u-mb-0"
					
						@click="closeNav"
					>
						<router-link
							to="/rates"

							class="link u-pl-3xl u-py-md u-text-gray-900 dd-u-flex dd-u-no-underline"
							
							@click="closeNav"
						>
							Pricing
						</router-link>
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
					<li
						class="dd-u-mb-0"
					
						@click="closeNav"
					>
						<router-link
							to="/meet-lisa"

							class="link u-pl-3xl u-py-md u-text-gray-900 dd-u-flex dd-u-no-underline"
							
							@click="closeNav"
						>
							Meet Lisa
						</router-link>
					</li>
					<li 
						class="dd-u-mb-0"
					
						@click="closeNav"
					>
						<router-link
							to="/contact"

							class="link u-pl-3xl u-py-md u-text-gray-900 dd-u-flex dd-u-no-underline"
						>
							Contact
						</router-link>
					</li>
				</ul>
			</div>
		</nav>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	name: 'Nav',
	data() {
		return {
			publicPath: process.env.BASE_URL,
			navShown: false,
		}
	},
	computed: {
        ...mapGetters([
			'quotes',
            'services',
        ]),
	},
	methods: {
		closeNav: function() {
			const data = this;
			
			setTimeout(function() {
				data.navShown = false;
			}, 100);
		},
        toggleNav: function() {
            if (this.navShown) {
				this.navShown = false;
			} else {
				this.navShown = true;
			}
        },
	},
}
</script>

<style media="screen">
.link.router-link-exact-active {
	background-color: var(--pink-300);
	color: white;
}

@media only screen and (max-width: 900px) {
	.u-off-canvas-nav {
		background-color: white;
		left: 100%;
		height: 100%;
		overflow: auto;
		padding-top: 32px;
		position: fixed;
		top: 148px;
		transition-duration: .25s;
		transition-property: left;
		width: 100%;
		z-index: 100;
	}
	
	.u-logo-menu {
		background-color: white;
		border-bottom: 1px solid var(--gray-300);
		left: 0;
		padding-bottom: var(--spacing-xl);
		padding-top: var(--spacing-xl);
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 100;
	}
}

@media only screen and (min-width: 901px) {
	.menu-button {
		display: none;
	}
}
</style>
