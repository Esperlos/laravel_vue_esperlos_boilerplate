<template>
    <div class="container">
        <h1>Vue Router Demo App</h1>

        <p>
            <router-link :to="{ name: 'saji' }">Saji</router-link> |
            <router-link :to="{ name: 'moli' }">Moli</router-link>
            <router-link :to="{ name: 'zizi' }">Zizi</router-link> |
            <router-link :to="{ name: 'kazi' }">Kazi</router-link>
        </p>

        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
