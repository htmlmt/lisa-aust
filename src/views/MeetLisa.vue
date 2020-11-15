<template>
    <div class="meet">
        <div class="u-pt-4xl u-wrapper md:u-pt-0">
            <div v-html="meetLisaContent"></div>
        </div>
        
        <section
            aria-labelledby="contact-heading"
            class="u-bg-gray-100 u-py-2xl"
        >
            <div class="u-max-w-700 u-wrapper">
                <h2 id="contact-heading">
                    Contact
                </h2>

                <form action="https://formsubmit.co/lisa-aust@outlook.com" method="POST">
                    <label for="name">Name</label>
                    <input
                        id="name"
                        
                        name="name"
                        required
                        type="text"
                    >
                    
                    <label for="email">Email</label>
                    <input
                        id="email"
                        
                        name="email"
                        required
                        type="text"
                    >
                    
                    <label for="message">Message</label>
                    <textarea
                        id="message"

                        name="message"
                        required
                    ></textarea>

                    <input type="submit">
                </form>
            </div>
        </section>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

import marked from 'marked';

export default {
    name: 'MeetLisa',
    computed: {
        ...mapGetters([
            'sections',
            'services',
        ]),
        meetLisaContent: function() {
            if (this.sections.length) {
                let content = this.sections.find(section => section.fields["Name"] === "Meet Lisa").fields["Content"];
                content = marked(content);

                return content;
            } else {
                return '';
            }
        }
    },
    created() {
        if (this.sections.length === 0) {
            this.$store.dispatch('getSections');
        }
        
        if (this.services.length === 0) {
            this.$store.dispatch('getServices');
        }
	},
};
</script>
