<template>
    <div id="app">

        <router-view/>
    </div>
</template>

<script>

    import jwt_decode from 'jwt-decode';

    export default {

        name: "app",
        components: {},
        provide() {
            return {
                reload: this.reload
            }
        },
        data() {
            return {
                isRouterAlive: true,
            }
        },
        created() {
            if (localStorage.eleToken) {
                const decoded = jwt_decode(localStorage.eleToken);
                // token存储到vuex
                this.$store.dispatch('setAuthenticated', !this.isEmpty(decoded));
                this.$store.dispatch('setUser', decoded);
            }

        },
        methods: {
            reload() {
                this.isRouterAlive = false;
                this.$nextTick(function () {
                    this.isRouterAlive = true;
                })
            },

            isEmpty(value) {
                return (
                    value === undefined ||
                    value === null ||
                    (typeof value === "object" && Object.keys(value).length === 0) ||
                    (typeof value === "string" && value.trim().length === 0)
                );
            }
        }
    };
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        width:100%;
        height:100%;
    }
    *{
        margin:0;
        padding:0;
    }
    html,body{
        width:100%;
        height:100%;
    }
    ul{list-style:none}
    a{text-decoration: none;}
    img{vertical-align:top;border:none}

    .clearf:after,
    .clearf:before{
        content:"";
        display:block;
        clear:both;
    }
</style>
