<template>
    <div class="lifestyle">
        <h1>Lifestyle Photography</h1>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
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
    name: 'Lifestyle',
    components: {
        Gallery,
        Thumbnail,
    },
}
</script>
