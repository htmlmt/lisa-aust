<template>
    <div class="event">
        <h1>Event Photography</h1>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
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
    name: 'Event',
    components: {
        Gallery,
        Thumbnail,
    },
}
</script>
