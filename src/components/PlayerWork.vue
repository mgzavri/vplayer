<template>
    <div class="artist_links">{{ALLSONGS}}
        <div class="artblock"
             @click="artistChoose(artist.id)"
             v-for="artist in ARTISTS" :key="artist.id">
            <div :style="{backgroundImage:'url('+artist.photo[0]+')'}" class="artblock__avatar"></div>
            <div class="artblock__title">{{artist.title}}</div>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters,mapMutations} from "vuex";

    export default {
        name: "PlayerWork",
        computed: {
            ...mapGetters([
                'ARTISTS','ALLSONGS'
            ]),


        },
        methods: {
            ...mapActions([
                'LOAD_ARTISTS','LOAD_SONGS'
            ]),
            ...mapMutations([
                'SET_CURRENT_ARTIST'
            ]),

            artistChoose(artist){
                this.SET_CURRENT_ARTIST(artist)
                this.LOAD_SONGS()
            }

        },
        mounted() {
            this.LOAD_ARTISTS()
            this.LOAD_SONGS()
        }
    }
</script>

<style scoped lang="scss">
    @import "@/assets/scss/variables.scss";

    .artist_links {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 100%;
    }

    .artblock {
        margin: 1vw;
        cursor: pointer;
        border: 1px solid #ddd;
        border-radius: 5px;
        width: 8vw;

        &__avatar {
            height: 8vw;
            background-size: cover;
            background-position: center;
        }

        &__title {
            color: $main-color;
            padding: .5rem;
            font-size: calc((100vw - 80rem) / 150 + 1rem);
        }
    }
</style>