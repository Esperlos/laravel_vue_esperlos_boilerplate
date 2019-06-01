<template>
    <InfoCard title="I'm Zizi" image="https://storage.googleapis.com/neris/public/images/types/famous/diplomats_INFP_julia_roberts.svg?v=2"></InfoCard>
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
