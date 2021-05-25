<template>
    <header class="header">
            <div class="header__logo"></div>
            <Search/>

    </header>
    <section class="player">
                <div class="player__main">
                    <div class="player__top"><PlayerTop/></div>
                    <div class="player__work"><PlayerWork/></div>
                </div>
                <div class="player__playlist"><Playlist/></div>

    </section>
    <footer></footer>

</template>

<script>

    import Search from "@/components/Search";
    import PlayerTop from "@/components/PlayerTop";
    import Playlist from "@/components/Playlist";
    import PlayerWork from "./components/PlayerWork";

    export default {
        name: 'App',
        components: {
            Search,
            PlayerTop,
            PlayerWork,
            Playlist
        }
    }
</script>

<style lang="scss">
    @import "@/assets/scss/variables.scss";
    img{
        pointer-events: none;
    }


    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: $main-color;
        margin: 2rem auto;
        width:60%;
    }



        .header{
            border-bottom: 2px solid $main-color;
            display: flex;
            justify-content: space-between;
            width: 100%;

            &__logo {
                width: 10vw;
                background-size: contain;
                background-repeat: no-repeat;
                background-image: url("assets/images/vplayer_logo.png");
                height: 5vw;
                margin: 2vh 2vw 0 0;
            }
        }

.player{
        display: flex;
        justify-content: space-between;

    &__main{
        width:70%
    }
    &__playlist{
        width: 30%;
         border-left:2px solid $main-color;
     }
    }

</style>
