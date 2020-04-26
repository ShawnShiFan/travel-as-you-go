<template>
    <div class="index">
        <Header></Header>
        <Aside></Aside>
        <div class="rightContainer">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    import Aside from '@/components/common/Aside.vue'
    import Header from '@/components/common/Header.vue'

    export default {
        name: "index",
        components: {
            Aside,
            Header

        }

    }
</script>

<style scoped>
    .index {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    .rightContainer {
        position: relative;
        top: 0;
        left: 220px;
        width: calc(100% - 180px);
        height: calc(100% - 60px);
        overflow: auto;
    }
</style>
