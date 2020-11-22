<template>
    <div class="saying u-pt-4xl u-wrapper md:u-pt-0">
        <h1>What Others Are Saying</h1>
        
        <div
            v-for="quote in quotes"
            :key="quote.id"
        >
            <h2>{{ quote.fields['Title'] }}</h2>

            <div v-html="prettify(quote.fields['Quote'])"></div>

            <div v-html="prettify(quote.fields['Name'])"></div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

import marked from 'marked';

export default {
    name: 'WhatOtherAreSaying',
    computed: {
        ...mapGetters([
            'quotes',
            'services',
        ])
    },
    methods: {
        prettify: function(content) {
            return marked(content);
        },
    },
    created() {
        if (this.quotes.length === 0) {
            this.$store.dispatch('getQuotes');
        }
        
        if (this.services.length === 0) {
            this.$store.dispatch('getServices');
        }
	},
};
</script>

<style media="screen">
@media only screen and (max-width: 900px) {
    .saying {
        margin-top: 172px;
    }
}
</style>
