<template>
    <div class="u-pb-3xl u-pt-4xl u-wrapper md:u-pt-0">
        <h1 v-if="serviceObject.fields">{{ serviceObject.fields["Name"] }}</h1>

        <Gallery>
            <div
                v-for="photo in servicePhotos"
                :key="photo"
            >
                <div
                    class="u-rounded-md dd-u-cursor-pointer dd-u-overflow-hidden js-thumbnail"

                    @click="lightbox"
                >
                    <img
                        :alt="servicePhoto(photo).fields['Title']"
                        :id="servicePhoto(photo).id"
                        :src="servicePhoto(photo).fields['Photo'][0].thumbnails.large.url"

                        class="dd-u-block"
                        
                        @load="onImageLoad(servicePhoto(photo))"
                    >
                    
                    <img
                        :class="loadOriginalPhotos ? 'dd-u-sr-only' : 'dd-u-hidden'"
                        :src="servicePhoto(photo).fields['Photo'][0].url"
                    >
                </div>
            </div>
        </Gallery>
        
        <div
            id="modal"
            
            :style="{
                backgroundImage: currentPhoto.id ? 'url(' + currentPhoto.fields['Photo'][0].url + ')' : 'none',
                display: modalShown ? 'block' : 'none'
            }"
        >
            <div
                id="closeModal"
                
                class="button"
                style="position: absolute; right: 20px; top: 20px;"
                
                @click="closeModal"
            >Close</div>
            
            <div
                id="previous"
                
                class="button"
                style="position: absolute; left: 20px; bottom: 20px;"
                
                @click="previousPhoto"
            >Previous</div>
            
            <div
                id="next"
                
                class="button"
                style="position: absolute; right: 20px; bottom: 20px;"
                
                @click="nextPhoto"
            >Next</div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

import Gallery from '@/components/Gallery.vue';

export default {
    name: 'Service',
    components: {
        Gallery,
    },
    data() {
		return {
			currentPhoto: {},
            imagesLoaded: 0,
            loadOriginalPhotos: false,
            modalShown: false
		}
	},
    computed: {
        ...mapGetters([
            'photos',
            'services',
        ]),
        numberOfServicePhotos: function() {
            return this.servicePhotos.length;
        },
        serviceObject: function() {
            if (this.services.length) {
                return this.services.find(service => service.fields['URL'] === this.$route.params.url);
            } else {
                return {
                    fields: {
                        'Photos': [],
                    }
                };
            }
        },
        servicePhotos: function() {
            if (this.serviceObject.fields['Photos'] === []) {
                return this.serviceObject.fields['Photos'];
            } else {
                let photosToInclude = [];
                
                this.serviceObject.fields['Photos'].forEach((id) => {
                    if (this.photos.find(photo => photo.id === id)) {
                        if (this.photos.find(photo => photo.id === id).fields['Where should this photo be shown?'].includes('Service page')) {
                            photosToInclude.push(id);
                        }
                    }
                });
                
                return photosToInclude;
            }
        }
    },
    methods: {
        closeModal: function() {
            this.modalShown = false;
        },
        lightbox: function(event) {
            this.modalShown = true;
			this.currentPhoto = this.photos.find(photo => photo.id === event.target.getAttribute('id'));
        },
        nextPhoto: function() {
            const currentPhotoIndex = this.servicePhotos.indexOf(this.currentPhoto.id);
            let nextPhotoIndex = 0;

            if (currentPhotoIndex < (this.numberOfServicePhotos - 1)) {
                nextPhotoIndex = currentPhotoIndex + 1;
            }

            this.currentPhoto = this.photos.find(photo => photo.id === this.servicePhotos[nextPhotoIndex]);
        },
        onImageLoad: function(image) {
            this.imagesLoaded = this.imagesLoaded + 1;
            
            if (this.imagesLoaded === this.servicePhotos.length) {
                this.loadOriginalPhotos = true;
            }
        },
        previousPhoto: function() {
            const currentPhotoIndex = this.servicePhotos.indexOf(this.currentPhoto.id);
            let nextPhotoIndex = this.numberOfServicePhotos - 1;

            if (currentPhotoIndex > 0) {
                nextPhotoIndex = currentPhotoIndex - 1;
            }

            this.currentPhoto = this.photos.find(photo => photo.id === this.servicePhotos[nextPhotoIndex]);
        },
        servicePhoto: function(id) {
            if (this.photos.length) {
                return this.photos.find(photo => photo.id === id);
            } else {
                return {
                    fields: {
                        'Photo': [
                            {
                                'url': ''
                            }
                        ],
                        'Where should this photo be shown?': []
                    }
                };
            }
        },
    },
    created() {
        if (this.services.length === 0) {
            this.$store.dispatch('getServices');
        }

        if (this.photos.length === 0) {
            this.$store.dispatch('getPhotos');
        }
	},
}
</script>

<style media="screen">
    #modal {
        background-color: #000000;
        background-position: 50% 50%;
        background-repeat: no-repeat;
        background-size: contain;
        height: 100%;
        left: 0;
        position: fixed;
        top: 0;
        width: 100%;
    }
</style>
