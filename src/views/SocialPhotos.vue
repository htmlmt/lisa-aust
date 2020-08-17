<template>
    <div class="lifestyle u-pt-4xl u-wrapper md:u-pt-0">
        <h1>Social Photos</h1>
        <Gallery>
            <Thumbnail src="https://via.placeholder.com/600x400" alt="1" />
            <Thumbnail src="https://via.placeholder.com/600x400" alt="2" />
            <Thumbnail src="https://via.placeholder.com/600x400" alt="3" />
            <Thumbnail src="https://via.placeholder.com/600x400" alt="4" />
            <Thumbnail src="https://via.placeholder.com/400x600" alt="5" />
            <Thumbnail src="https://via.placeholder.com/600x400" alt="6" />
        </Gallery>
        <h2>Latest shoots</h2>
        <Gallery columns="4">
            <Thumbnail src="https://via.placeholder.com/600x400" alt="1" />
            <Thumbnail src="https://via.placeholder.com/400x600" alt="1" />
            <Thumbnail src="https://via.placeholder.com/600x400" alt="1" />
            <Thumbnail src="https://via.placeholder.com/400x600" alt="1" />
            <Thumbnail src="https://via.placeholder.com/600x400" alt="1" />
            <Thumbnail src="https://via.placeholder.com/400x600" alt="1" />
            <Thumbnail src="https://via.placeholder.com/600x400" alt="1" />
            <Thumbnail src="https://via.placeholder.com/400x600" alt="1" />
        </Gallery>
    </div>
</template>

<script>
import Gallery from '@/components/Gallery.vue'
import Thumbnail from '@/components/Thumbnail.vue'

export default {
    name: 'SocialPhotos',
    components: {
        Gallery,
        Thumbnail,
    },
}
</script>
