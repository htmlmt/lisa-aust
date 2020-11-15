<template>
    <div class="u-pb-3xl u-pt-4xl u-wrapper md:u-pt-0">
        <h1 v-if="serviceObject.fields">{{ serviceObject.fields["Name"] }}</h1>

        <Gallery>
            <div
                v-for="photo in servicePhotos"
                :key="photo"
            >
                <Thumbnail
                    :alt="servicePhoto(photo).fields['Title']"
                    :original="servicePhoto(photo).fields['Photo'][0].url"
                    :src="servicePhoto(photo).fields['Photo'][0].thumbnails.large.url"
                />
            </div>
        </Gallery>
        
        <div
            id="modal"
            
            style="background-color: #000000; background-position: 50% 50%; background-repeat: no-repeat; background-size: contain; display: none; left: 0; height: 100%; position: fixed; top: 0; width: 100%;"
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
import Thumbnail from '@/components/Thumbnail.vue';

export default {
    name: 'Service',
    components: {
        Gallery,
        Thumbnail,
    },
    computed: {
        ...mapGetters([
            'photos',
            'services',
        ]),
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
            const modal = document.getElementById('modal');
            
            modal.style.backgroundImage = '';
            modal.style.display = 'none';
        },
        nextPhoto: function() {
            const modal = document.getElementById('modal');
            const currentPhoto = document.getElementById(modal.getAttribute('data-current-photo'));
            
            let nextPhoto;
            
            if (currentPhoto.parentNode.nextElementSibling) {
                nextPhoto = currentPhoto.parentNode.nextElementSibling.querySelector('.js-thumbnail');
            } else {
                nextPhoto = document.querySelectorAll('.js-thumbnail')[0];
            }
            
            const nextPhotoID = nextPhoto.getAttribute('id');
            const nextPhotoURL = nextPhoto.querySelector('img').getAttribute('data-original');
            
            modal.style.backgroundImage = 'url(' + nextPhotoURL + ')';
            modal.setAttribute('data-current-photo', nextPhotoID);
        },
        previousPhoto: function() {
            const modal = document.getElementById('modal');
            const currentPhoto = document.getElementById(modal.getAttribute('data-current-photo'));
            
            let previousPhoto;
            
            if (currentPhoto.parentNode.previousElementSibling) {
                previousPhoto = currentPhoto.parentNode.previousElementSibling.querySelector('.js-thumbnail');
            } else {
                previousPhoto = document.querySelectorAll('.js-thumbnail')[ document.querySelectorAll('.js-thumbnail').length - 1];
            }
            
            const previousPhotoID = previousPhoto.getAttribute('id');
            const previousPhotoURL = previousPhoto.querySelector('img').getAttribute('data-original');
            
            modal.style.backgroundImage = 'url(' + previousPhotoURL + ')';
            modal.setAttribute('data-current-photo', previousPhotoID);
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
