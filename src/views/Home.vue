<template>
    <div class="home">
        <section
            class="u-bg-overlay-bottom dd-u-relative"
        >
            <div
                class="
                    dd-u-aspect-21/9
                    dd-u-bg-black
                    dd-u-relative
                    dd-u-overflow-hidden
                "
            >
                <HeroImage
                    v-for="(photo, index) in heroPhotos"
                    
                    :key="photo.id"
                    
                    :alt="photo.fields['Title']"
                    :class="[index === heroImageShown ? `dd-u-opacity-100 dd-u-pointer-events-auto` : `dd-u-opacity-0 dd-u-pointer-events-none`]"
                    :src="photo.fields['Photo'][0].url"
                />
            </div>
            
            <div
                class="
                    u-py-md
                    
                    dd-u-absolute
                    dd-u-bottom-0
                    dd-u-flex
                    dd-u-justify-center
                    dd-u-left-0
                    dd-u-w-full
                    dd-u-z-20
                "
            >
                <button
                    v-for="(image, index) in heroPhotos"
                    
                    :key="image.src"
                    
                    :class="[index === heroImageShown ? 'u-bg-pink-300' : 'u-border-2 u-border-pink-300 u-border-solid dd-u-bg-transparent']"
                    
                    class="
                        u-h-25
                        u-mx-xs
                        u-w-25
                        
                        dd-u-border-none
                        dd-u-cursor-pointer
                        dd-u-p-0
                        dd-u-rounded-full
                    "
                    style="padding: 0;"
                    
                    @click="showHeroImage(index)"
                >
                    <span class="dd-u-sr-only">{{ image.alt }}</span>
                </button>
                
                <button
                    class="
                        u-h-25
                        u-mx-xs
                        u-w-25
                        
                        dd-u-bg-transparent
                        dd-u-border-none
                        dd-u-cursor-pointer
                        dd-u-p-0
                        dd-u-rounded-full
                    "
                    
                    @click="playPauseSlideshow"
                >
                    <span
                        v-if="!slideshowPlaying"

                        class="dd-u-block"
                    >
                        <svg
                            class="dd-u-block"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                        >
                                <title>play slideshow</title>
                                <path
                                    style="fill: #ffffff;"
                                    d="M371.7 238l-176-107c-15.8-8.8-35.7 2.5-35.7 21v208c0 18.4 19.8 29.8 35.7 21l176-101c16.4-9.1 16.4-32.8 0-42zM504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256z"
                                />
                        </svg>
                    </span>
                    <span
                        v-if="slideshowPlaying"

                        class="dd-u-block"
                    >
                        <svg
                            class="dd-u-block"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                        >
                            <title>pause slideshow</title>
                            <path
                                style="fill: #ffffff;"
                                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm96-280v160c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16zm-112 0v160c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16z"
                            />
                        </svg>
                    </span>
                </button>
            </div>
        </section>
        
        <section class="u-max-w-700 u-py-2xl u-wrapper dd-u-mx-auto">
            <div v-html="introductionContent"></div>
        </section>
            
        <section
            aria-labelledby="services-heading"
            class="u-bg-gray-100 u-py-2xl dd-u-text-center"
        >
            <h2
                id="services-heading"

                class="dd-u-sr-only"                
            >
                Services
            </h2>
            
            <div class="u-gap-2xl u-wrapper dd-u-grid dd-u-grid-cols-3 lt-md:dd-u-grid-cols-1">
                <div
                    v-for="photo in servicePhotos"
                    :key="photo.id"
                
                    class="u-bg-overlay-top u-rounded-md dd-u-overflow-hidden dd-u-relative md:u-mb-2xl"
                >
                    <router-link
                        :aria-label="serviceName(photo.fields['Which service does this photo fall under?'][0])"
                        class="dd-u-absolute dd-u-h-full dd-u-left-0 dd-u-top-0 dd-u-w-full dd-u-z-40"
                        :to="serviceLink(photo.fields['Which service does this photo fall under?'][0])"
                    ></router-link>
                
                    <h3 class="u-py-lg dd-u-absolute dd-u-text-white dd-u-uppercase dd-u-w-full dd-u-z-30">
                        {{ serviceName(photo.fields["Which service does this photo fall under?"][0]) }}
                    </h3>

                    <div class="dd-u-relative dd-u-z-10">
                        <Thumbnail
                            :photo="photo"
                        />
                    </div>
                </div>
            </div>
        </section>
        
        <section class="u-max-w-700 dd-u-mx-auto u-py-2xl u-wrapper">
            <div v-html="ratesContent"></div>
            
            <router-link
                :to="{name: 'rates'}"

                class="button dd-u-mx-auto"
            >
                Read more info on rates
            </router-link>
        </section>
        
        <section
            aria-labelledby="contact-heading"
            class="u-bg-gray-100 u-py-3xl"
        >
            <div class="u-max-w-700 u-wrapper dd-u-mx-auto">
                <h2 id="contact-heading">
                    Contact
                </h2>
                
                <form
                    action="https://formsubmit.co/lisa-aust@outlook.com"
                    method="POST"
                >
                    <label for="name">Name</label>
                    <input
                        id="name"
                        
                        name="name"
                        required
                        type="text"
                    >
                    
                    <label for="email">Email</label>
                    <input
                        id="email"
                        
                        name="email"
                        required
                        type="text"
                    >
                    
                    <label for="message">Message</label>
                    <textarea
                        id="message"

                        name="message"
                        required
                    ></textarea>

                    <input type="submit">
                </form>
            </div>
        </section>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

import marked from 'marked';

import HeroImage from '@/components/HeroImage.vue';
import Thumbnail from '@/components/Thumbnail.vue';

export default {
    name: 'EventPhotos',
    components: {
        HeroImage,
        Thumbnail,
    },
    data() {
		return {
			heroImageShown: 0,
            publicPath: process.env.BASE_URL,
            slideshowPlaying: true,
		}
	},
    computed: {
        ...mapGetters([
            'photos',
            'sections',
            'services',
        ]),
        heroPhotos: function() {
            if (this.photos.length) {
                return this.photos.filter(photo => photo.fields['Where should this photo be shown?']).filter(photo => photo.fields['Where should this photo be shown?'].includes('Hero'));
            } else {
                return [];
            }
        },
        introductionContent: function() {
            if (this.sections.length) {
                let content = this.sections.find(section => section.fields["Name"] === "Homepage introduction").fields["Content"];
                content = marked(content);

                return content;
            } else {
                return '';
            }
        },
        ratesContent: function() {
            if (this.sections.length) {
                let content = this.sections.find(section => section.fields['Name'] === 'Homepage rates').fields['Content'];
                content = marked(content);

                return content;
            } else {
                return '';
            }
        },
        servicePhotos: function() {
            if (this.photos.length) {
                return this.photos.filter(photo => photo.fields['Where should this photo be shown?']).filter(photo => photo.fields['Where should this photo be shown?'].includes('Homepage'));
            } else {
                return [];
            }
        }
    },
    created() {
        if (this.services.length === 0) {
            this.$store.dispatch('getServices');
        }

        if (this.photos.length === 0) {
            this.$store.dispatch('getPhotos');
        }

        if (this.sections.length === 0) {
            this.$store.dispatch('getSections');
        }

        var vueInstance = this;
        
        setInterval(function() {
            if (vueInstance.slideshowPlaying) {
                if ((vueInstance.heroImageShown + 2) > vueInstance.heroPhotos.length) {
                    vueInstance.heroImageShown = 0;
                } else {
                    vueInstance.heroImageShown++;
                }
            }
        }, 5000);
	},
    methods: {
        serviceName: function(id) {
            if (this.services.length) {
                return this.services.find(service => service.id === id).fields['Name'];
            } else {
                return '';
            }
        },
        serviceLink: function(id) {
            if (this.services.length) {
                return '/services/' + this.services.find(service => service.id === id).fields['URL'];
            } else {
                return '';
            }
        },
        showHeroImage: function(index) {
            this.heroImageShown = index;
            this.slideshowPlaying = false;
        },
        playPauseSlideshow: function() {
            this.slideshowPlaying = !this.slideshowPlaying;
        },
    },
};
</script>
