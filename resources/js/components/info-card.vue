<template>
    <v-layout>
        <v-flex md10 sm6 offset-sm3>
            <v-card>
                <v-card-title primary-title>
                    <v-img height="300px" width="300px" v-bind:lazy-src="image" v-bind:src="image">
                        <template v-slot:placeholder>
                            <v-layout
                                    fill-height
                                    align-center
                                    justify-center
                                    ma-0
                            >
                                <v-progress-circular indeterminate color="black darken-5"></v-progress-circular>
                            </v-layout>
                        </template>
                    </v-img>
                    <h3 class="headline mb-0">
                        {{title}}
                    </h3>
                </v-card-title>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    export default {
        name: "info-card",
        props:['title','image']
    }
</script>

<style scoped>

</style>