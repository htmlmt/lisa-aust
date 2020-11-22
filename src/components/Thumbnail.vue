<template>
	<div
		:id="id"
	
		class="u-rounded-md dd-u-cursor-pointer dd-u-overflow-hidden js-thumbnail"

		@click="lightbox"
	>
		<img
			:alt="photo.fields['Title']"
			:data-original="original"
			:height="photo.fields['Photo'][0].thumbnails.large.height"
			:src="photo.fields['Photo'][0].thumbnails.large.url"
			:style="{
				height: 'auto',
				width: '100%'
			}"
			:width="photo.fields['Photo'][0].thumbnails.large.width"

			class="dd-u-block"
		>
	</div>
</template>

<script>
export default {
	name: 'Thumbnail',
	props: {
		id: {
			type: String
		},
		photo: {
			type: Object,
		},
	},
}
</script>
