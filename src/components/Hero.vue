<template>
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
                v-for="(image, index) in images"
                
                :key="image.src"
                
                :alt="image.alt"
                :class="[index === heroImageShown ? `dd-u-opacity-100 dd-u-pointer-events-auto` : `dd-u-opacity-0 dd-u-pointer-events-none`]"
                :src="`${publicPath}images/${image.src}`"
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
                v-for="(image, index) in images"
                
                :key="image.src"
                
                :class="[index === heroImageShown ? 'u-bg-pink-300' : 'u-border-2 u-border-pink-300 u-border-solid dd-u-bg-transparent']"
                
                class="
                    u-h-25
                    u-mx-xs
                    u-w-25
                    
                    dd-u-border-none
                    dd-u-cursor-pointer
                    dd-u-rounded-full
                "
                
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
</template>

<script>
import HeroImage from '@/components/HeroImage.vue'

export default {
    name: 'Hero',
    components: {
        HeroImage,
    },
    props: {
		images: {
			type: Array,
		},
	},
	data() {
		return {
			heroImageShown: 0,
            publicPath: process.env.BASE_URL,
            slideshowPlaying: true,
		}
	},
    created: function() {
        var vueInstance = this;
        
        setInterval(function() {
            if (vueInstance.slideshowPlaying) {
                if ((vueInstance.heroImageShown + 2) > vueInstance.images.length) {
                    vueInstance.heroImageShown = 0;
                } else {
                    vueInstance.heroImageShown++;
                }
            }
        }, 5000);
    },
    methods: {
        showHeroImage: function(index) {
            this.heroImageShown = index;
            this.slideshowPlaying = false;
        },
        playPauseSlideshow: function() {
            this.slideshowPlaying = !this.slideshowPlaying;
        },
    },
}
</script>
