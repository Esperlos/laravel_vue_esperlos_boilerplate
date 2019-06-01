<template>
    <InfoCard title="I'm Moli" image="https://storage.googleapis.com/neris/public/images/types/famous/analysts_INTJ_arnold_schwarzenegger.svg?v=2"></InfoCard>
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
