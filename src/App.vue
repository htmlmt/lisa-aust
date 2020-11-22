<template>
    <div
        id="app"

        class="dd-u-flex md:u-block"
    >
        <Nav />
        
        <div class="u-content u-pl-250 dd-u-w-full md:u-pl-0">
            <div class="dd-u-flex-1">
                <router-view />
            </div>
        </div>
    </div>
</template>

<script>
import Nav from '@/components/Nav/Nav.vue'

export default {
    name: 'App',
    components: {
        Nav
    },
}
</script>

<style lang="scss">
    :root {
        --wrapper-width: 1000px;
        
        --spacing-xs: .5rem;
        --spacing-sm: .75rem;
        --spacing-md: 1rem;
        --spacing-lg: 1.25rem;
        --spacing-xl: 1.5rem;
        --spacing-2xl: 1.875rem;
        --spacing-3xl: 2.5rem;
        --spacing-4xl: 4rem;
        
        --font-size-xs: .75rem;
        --font-size-sm: .875rem;
        --font-size-md: 1rem;
        --font-size-lg: 1.125rem;
        --font-size-xl: 1.25rem;
        --font-size-2xl: 1.375rem;
        --font-size-3xl: 1.75rem;
        --font-size-4xl: 2rem;
        --font-size-5xl: 2.25rem;
        
        --font-family-1: 'Quicksand', sans-serif;
        --size-h1: var(--font-size-5xl);
        
        --gray-100: #f7fafc;
        --gray-300: #e2e8f0;
        --gray-400: #cbd5e0;
        --gray-500: #718096;
        --gray-600: #4a5568;
        --gray-700: #4a5568;
        --gray-800: #2d3748;
        --gray-900: #1a202c;
        
        --blue-200: #bee3f8;
        --blue-900: #130b2c;
        
        --pink-300: #db3d77;
        --pink-400: #b53463;
        
        --tan-300: #a98a73;
    }
    
    body {
        font-family: 'Roboto', sans-serif;
    }
    
    @import "@/scss/base/_typography.scss";
    @import "@/scss/base/_images.scss";
    @import "@/scss/base/_forms.scss";
    
    @import "@/scss/utilities/_layout.scss";
    @import "@/scss/utilities/_spacing.scss";
    @import "@/scss/utilities/_sizing.scss";
    @import "@/scss/utilities/_typography.scss";
    @import "@/scss/utilities/_backgrounds.scss";
    @import "@/scss/utilities/_borders.scss";
    
    @media only screen and (max-width: 900px) {
        .u-content {
            margin-top: 148px;
        }
    }
</style>
