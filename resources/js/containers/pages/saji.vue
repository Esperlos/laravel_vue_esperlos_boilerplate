<template>
    <InfoCard title="I'm sajjad" image="https://storage.googleapis.com/neris/public/images/types/famous/analysts_INTJ_gandalf_the_lord_of_the_rings.svg?v=2"></InfoCard>
</template>

<script>
    import InfoCard from "../../components/info-card";
    export default {
        components: {InfoCard},
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
