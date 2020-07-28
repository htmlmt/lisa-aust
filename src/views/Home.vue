<template>
    <div class="home">
        <p class="dd-u-h1">Lorem ipsum sit amet</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <h2>Corporate Photography</h2>
        <Gallery columns="2">
            <Thumbnail src="https://via.placeholder.com/1200x800" alt="1" />
            <Thumbnail src="https://via.placeholder.com/1200x800" alt="2" />
        </Gallery>
        <h2>Event Photography</h2>
        <Gallery columns="2">
            <Thumbnail src="https://via.placeholder.com/1200x800" alt="1" />
            <Thumbnail src="https://via.placeholder.com/1200x800" alt="2" />
        </Gallery>
        <h2>Lifestyle Photography</h2>
        <Gallery columns="2">
            <Thumbnail src="https://via.placeholder.com/1200x800" alt="1" />
            <Thumbnail src="https://via.placeholder.com/1200x800" alt="2" />
        </Gallery>
    </div>
</template>

<script>
import Gallery from '@/components/Gallery.vue'
import Thumbnail from '@/components/Thumbnail.vue'

export default {
    name: 'Home',
    components: {
        Gallery,
        Thumbnail,
    },
}
</script>

