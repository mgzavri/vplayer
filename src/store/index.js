import {createStore} from 'vuex'
import axios from "axios";

export default createStore({
    state: {
        artists: {},
        currentArtist:{},
        allSongs:{},
        songs:{}

    },
    mutations: {
        SET_ARTISTS: (state, artists) => {
            state.artists = artists;
        },
        SET_CURRENT_ARTIST: (state, artist) => {
            state.currentArtist = state.artists.filter((el)=>el.id===artist)[0];
        },
        SET_ALL_SONGS:(state, songs) => {
            state.allSongs = songs;
        },

    },
    actions: {
        LOAD_ARTISTS({commit}) {
           axios.get('https://geolyrics.ru/api/artists.json').then(result => {
                commit('SET_ARTISTS', result.data.artists);
            }).catch(error => {
                throw new Error(`API ${error}`);
            });
        },
        LOAD_SONGS({commit}) {
            axios.get('https://geolyrics.ru/api/songs.json').then(result => {
                commit('SET_ALL_SONGS', result.data.songs);
            }).catch(error => {
                throw new Error(`API ${error}`);
            });
        },

    },
    getters: {
        ARTISTS(state) {
            return state.artists
        },
        CURRENT_ARTIST(state){
            return state.currentArtist
        },
        ALLSONGS(state){
            return state.allSongs
        },

    }
})
