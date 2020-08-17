<template>
    <div class="home">
        <Hero :images="[
            {
                src: 'hero-1',
                alt: 'Rural X',
            },
            {
                src: 'hero-2',
                alt: 'The Event Company Farm to Table',
            },
            {
                src: 'hero-3',
                alt: 'Sip Sip Namaste',
            },
        ]" />
        
        <section aria-labelledby="intro-heading" class="u-max-w-700 u-py-2xl u-wrapper dd-u-mx-auto">
            <h2 id="intro-heading">Lorem ipsum dolor sit amet</h2>
            
            <p>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </section>
            
        <section aria-labelledby="services-heading" class="u-bg-gray-100 u-py-2xl dd-u-text-center">
            <h2 class="dd-u-sr-only" id="services-heading">Services</h2>
            
            <div class="u-gap-2xl u-wrapper dd-u-grid dd-u-grid-cols-3">
                <div class="u-bg-overlay-top u-rounded-md dd-u-overflow-hidden dd-u-relative">
                    <router-link class="dd-u-absolute dd-u-h-full dd-u-left-0 dd-u-top-0 dd-u-w-full dd-u-z-40" :to="{name: 'event'}" aria-label="event photos"></router-link>
                    
                    <h3 class="u-py-lg dd-u-absolute dd-u-text-white dd-u-uppercase dd-u-w-full dd-u-z-30">Event</h3>
                    
                    <div class="dd-u-relative dd-u-z-10">
                        <Thumbnail :src="`${publicPath}images/event.jpg`" alt="1" />
                    </div>
                </div>
                <div class="u-bg-overlay-top u-rounded-md dd-u-overflow-hidden dd-u-relative">
                    <router-link class="dd-u-absolute dd-u-h-full dd-u-left-0 dd-u-top-0 dd-u-w-full dd-u-z-40" :to="{name: 'social'}" aria-label="social photos"></router-link>
                    
                    <h3 class="u-py-lg dd-u-absolute dd-u-text-white dd-u-uppercase dd-u-w-full dd-u-z-30">Social</h3>
                    
                    <div class="dd-u-relative dd-u-z-10">
                        <Thumbnail :src="`${publicPath}images/social.jpg`" alt="2" />
                    </div>
                </div>
                <div class="u-bg-overlay-top u-rounded-md dd-u-overflow-hidden dd-u-relative">
                    <router-link class="dd-u-absolute dd-u-h-full dd-u-left-0 dd-u-top-0 dd-u-w-full dd-u-z-40" :to="{name: 'portrait'}" aria-label="portrait photos"></router-link>
                    
                    <h3 class="u-py-lg dd-u-absolute dd-u-text-white dd-u-uppercase dd-u-w-full dd-u-z-30">Portrait</h3>
                    
                    <div class="dd-u-relative dd-u-z-10">
                        <Thumbnail :src="`${publicPath}images/portrait.jpg`" alt="3" />
                    </div>
                </div>
            </div>
        </section>
        
        <section aria-labelledby="contact-heading" class="u-max-w-700 dd-u-mx-auto u-py-2xl u-wrapper">
            <h2 id="rates-heading">Rates</h2>
            
            <ul class="dd-u-list-none dd-u-p-0">
                <li><strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</strong></li>
            </ul>
            
            <ul class="dd-u-list-none dd-u-p-0">
                <li><strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</strong></li>
            </ul>
            
            <ul class="dd-u-list-none dd-u-p-0">
                <li><strong>Lorem ipsum dolor sit amet.</strong></li>
            </ul>
            
            <router-link class="button dd-u-mx-auto" :to="{name: 'rates'}">Read more info on rates</router-link>
        </section>
        
        <section aria-labelledby="contact-heading" class="u-bg-gray-100 u-py-2xl">
            <div class="u-max-w-700 u-wrapper dd-u-mx-auto">
                <h2 id="contact-heading">Contact</h2>

                <form method="post">
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name">
                    
                    <label for="subject">Subject</label>
                    <input type="text" id="subject" name="subject">
                    
                    <label for="message">Message</label>
                    <textarea id="message" name="message"></textarea>
                    
                    <input type="submit">
                </form>
            </div>
        </section>
    </div>
</template>

<script>
import Hero from '@/components/Hero.vue'
import Thumbnail from '@/components/Thumbnail.vue'

export default {
    name: 'EventPhotos',
    components: {
        Hero,
        Thumbnail,
    },
	data() {
		return {
            publicPath: process.env.BASE_URL,
		}
	},
}
</script>
