<template>
	<div
		:id="id"
	
		class="u-rounded-md dd-u-cursor-pointer dd-u-overflow-hidden js-thumbnail"

		@click="lightbox"
	>
		<img
			:alt="alt"
			:data-original="original"
			:src="src"
			:style="{
				width: '100%'
			}"

			class="dd-u-block"
		>
	</div>
</template>

<script>
export default {
	name: 'Thumbnail',
	props: {
		alt: {
			type: String,
		},
		id: {
			type: String
		},
		original: {
			type: String
		},
		src: {
			type: String,
		},
	},
	methods: {
        lightbox: function() {
			const modal = document.getElementById('modal');
			
            modal.style.backgroundImage = 'url(' + this.original + ')';
			modal.style.display = 'block';
        },
	}
}
</script>
