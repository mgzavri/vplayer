<template>
    <div class="search-field">
            <input id="icon_prefix2" placeholder="Track's title or artist's name">
            <i class="material-icons prefix search-icon" >search</i>
    </div>
</template>

<script>
    export default {
        name: "Search"
    }
</script>

<style scoped>
    .search-field{
        width: 30vw;
    }
    .search-icon{
        margin-left: -2vw;
        cursor:pointer;
        opacity: .6;
    }
    .search-icon:hover{
        opacity: 1;
    }
</style>