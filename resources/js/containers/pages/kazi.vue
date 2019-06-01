<template>
    <InfoCard title="I'm Kazi" image="https://storage.googleapis.com/neris/public/images/types/famous/diplomats_INFJ_rose_dewitt_bukater_titanic.svg?v=2"></InfoCard>
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
