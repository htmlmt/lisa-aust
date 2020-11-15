<template>
    <div class="rates u-pt-4xl u-wrapper md:u-pt-0">
        <h1>Rates</h1>

        <div
            v-for="service in services"
            :key="service.id"
        >
            <h2>{{ service.fields["Name"] }}</h2>
            
            <div v-html="prettify(service.fields['Rates'])"></div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

import marked from 'marked';

export default {
	name: 'Rates',
	computed: {
        ...mapGetters([
            'services',
        ]),
	},
    methods: {
        prettify: function(content) {
            return marked(content);
        },
    },
    created() {
        if (this.services.length === 0) {
            this.$store.dispatch('getServices');
        }
    }
}
</script>
