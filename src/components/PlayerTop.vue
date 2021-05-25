<template>
    <div class="player_top">
        <div class="player_top__artists_logo circle" :style="{backgroundImage:'url('+artistImage+')'}"></div>
        <div class="player_top__commons">
            <div class="player_top__artist_desc">
                <h2 v-text="artistTitle" ></h2>
            </div>
            <div class="player_top__artist_controls"></div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";
    export default {
        name: "PlayerTop",
        computed: {
            ...mapGetters(['CURRENT_ARTIST' ]),
            artist(){
                return this.CURRENT_ARTIST
            },
            artistImage() {
                return (Object.keys(this.artist).length===0)? require('@/assets/images/vplayer_all_mus.png'): this.artist.photo[0];
            },
            artistTitle(){
                return (Object.keys(this.artist).length===0)? 'All musicians': this.artist.title;
            }

        }
    }
</script>

<style scoped lang="scss">
    @import "@/assets/scss/variables.scss";

    .player_top {
        display: flex;
        border-bottom: 2px solid $main-color;

        &__artists_logo {
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            margin: 2rem;
            display: block;
            width: 30%;
            pointer-events: none;

        }
        &__artists_logo:after {
            content: '';
            display: block;
            padding-top: 100%;
        }
        &__artist_desc h2{
            border-bottom: 5px solid #0c2904;
        }
    }
</style>