<template>
    <div class="corporate">
        <h1>Corporate Photography</h1>
        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <Gallery>
            <Thumbnail src="https://via.placeholder.com/600x400" alt="1" />
            <Thumbnail src="https://via.placeholder.com/600x400" alt="1" />
            <Thumbnail src="https://via.placeholder.com/600x400" alt="1" />
            <Thumbnail src="https://via.placeholder.com/600x400" alt="1" />
            <Thumbnail src="https://via.placeholder.com/600x400" alt="1" />
            <Thumbnail src="https://via.placeholder.com/600x400" alt="1" />
        </Gallery>
        <h2>Latest shoots</h2>
        <Gallery columns="4">
            <Thumbnail src="https://via.placeholder.com/600x400" alt="1" />
            <Thumbnail src="https://via.placeholder.com/600x400" alt="1" />
            <Thumbnail src="https://via.placeholder.com/600x400" alt="1" />
            <Thumbnail src="https://via.placeholder.com/600x400" alt="1" />
            <Thumbnail src="https://via.placeholder.com/600x400" alt="1" />
            <Thumbnail src="https://via.placeholder.com/600x400" alt="1" />
            <Thumbnail src="https://via.placeholder.com/600x400" alt="1" />
            <Thumbnail src="https://via.placeholder.com/600x400" alt="1" />
        </Gallery>
    </div>
</template>

<script>
import Gallery from '@/components/Gallery.vue'
import Thumbnail from '@/components/Thumbnail.vue'

export default {
    name: 'Corporate',
    components: {
        Gallery,
        Thumbnail,
    },
}
</script>
