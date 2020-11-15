<template>
    <div class="dd-u-absolute dd-u-left-0 dd-u-center-y dd-u-duration-500">
        <img
            :alt="alt"
            :src="src"

            class="dd-u-block dd-u-object-cover"
            rel="preload"
        >
    </div>
</template>

<script>
export default {
    name: 'HeroImage',
    props: {
		alt: {
			type: String,
		},
		src: {
			type: String,
		},
		srcset: {
			type: String,
		},
	},
}
</script>
