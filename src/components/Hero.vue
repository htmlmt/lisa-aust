<template>
    <section class="u-bg-overlay-bottom dd-u-relative">
        <div
            class="
                u-bg-gray-100
                
                dd-u-aspect-21/9
                dd-u-relative
                dd-u-overflow-hidden
            "
        >
            <div>
                <HeroImage
                    v-for="(image, index) in images"
                    
                    :alt="image.alt"
                    :class="[index === heroImageShown ? 'dd-u-opacity-100' : 'dd-u-opacity-0']"
                    :id="`heroImage${index}`"
                    :key="image.src"
                    :src="`${publicPath}images/${image.src}`"
                />
            </div>
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
                
                @click="showHeroImage(index)"
                
                :class="[index === heroImageShown ? 'u-bg-pink-300' : 'u-border-2 u-border-pink-300 u-border-solid dd-u-bg-transparent']"
                :key="image.src"
                
                class="
                    u-h-25
                    u-mx-xs
                    u-w-25
                    
                    dd-u-border-none
                    dd-u-cursor-pointer
                    dd-u-rounded-full
                "
            >
                <span class="dd-u-sr-only">{{ image.alt }}</span>
            </button>
            
            <button
                @click="playPauseSlideshow"
                
                class="
                    u-h-25
                    u-mx-xs
                    u-w-25
                    
                    dd-u-bg-transparent
                    dd-u-border-none
                    dd-u-cursor-pointer
                    dd-u-rounded-full
                "
            >
                <span v-if="!slideshowPlaying"><img class="dd-u-block" :src="`${publicPath}icons/play.svg`" alt="Play slideshow"></span>
                <span v-if="slideshowPlaying"><img class="dd-u-block" :src="`${publicPath}icons/pause.svg`" alt="Pause slideshow"></span>
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
    methods: {
        showHeroImage: function(index) {
            this.heroImageShown = index;
            this.slideshowPlaying = false;
        },
        playPauseSlideshow: function() {
            this.slideshowPlaying = !this.slideshowPlaying;
        },
    },
    props: {
		images: {
			type: Array,
		},
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
	data() {
		return {
			heroImageShown: 0,
            publicPath: process.env.BASE_URL,
            slideshowPlaying: true,
		}
	},
}
</script>
