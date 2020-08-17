<template>
    <div class="dd-u-absolute dd-u-left-0 dd-u-center-y dd-u-duration-500">
        <picture>
            <source media="(min-width: 2000px)" :srcset="`${src}-lg.jpg`">
            <source media="(max-width: 1999px)" :srcset="`${src}-md.jpg`">
            <source media="(max-width: 999px)" :srcset="`${src}-sm.jpg`">
        </picture>
        <img class="dd-u-block dd-u-object-cover" :alt="alt" :src="`${src}-lg.jpg`">
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
