<template>
    <v-app id="inspire">

        <v-container>
            <v-layout>
            <v-btn
                    color="#212121"
                    flat
                    value="saji"
                    to="/saji"
            >
                <span>saji</span>
            </v-btn>
            <v-btn
                    color="#212121"
                    flat
                    value="moli"
                    to="/moli"
            >
                <span>moli</span>
            </v-btn>
            <v-btn
                    color="#212121"
                    flat
                    value="zizi"
                    to="/zizi"
            >
                <span>zizi</span>
            </v-btn> <v-btn
                color="#212121"
                flat
                value="kazi"
                to="/kazi"
        >
            <span>kazi</span>
        </v-btn>
            </v-layout>
            <router-view></router-view>
        </v-container>
    </v-app>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
