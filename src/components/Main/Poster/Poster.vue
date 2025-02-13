<template>
    <div :style="{ backgroundImage: `url(${poster.fullPath})` }" class="poster">
        <TopBar classname="topBar"/>
        <!-- <img :src="poster.fullPath" :alt="title" class="image" /> -->
        <div class="space"></div>
        <div class="filmInfo">
            <h2 class="posteTitle">{{ poster.title }}</h2>
            <div class="detailsInfo" v-for="item in detailsInfo">
                |
                <p  class="posterDescription">{{ item }}</p>
            </div>
        </div>
        <div class="buttons">
            <ButtonPrimary>Watch now</ButtonPrimary>
            <HeartButton :item="poster" size="large" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, onUnmounted, reactive } from 'vue';
import { useFilmPoster } from '../../../stores/poster';
import ButtonPrimary from '../../ButtonPrimary/ButtonPrimary.vue';
import HeartButton from '../../HeartButton/HeartButton.vue';
import TopBar from './TopBar/TopBar.vue';

const poster = reactive({...useFilmPoster()})
const detailsInfo = computed(() => [
    poster.release_date,
    poster.firstGenre,
    poster.vote_average
])

onUnmounted(() => poster.resetAll())

</script>

<style lang="scss">
    .poster{
        width: 100%;
        height:60vh;
        background-size: cover;
        background-repeat: no-repeat;
        background-position-y: center;
        display: flex;
        flex-direction: column;
        .space{
            flex: 1;
        }
        .topBar{
            position: absolute;
            right: 5rem;
        }
        .filmInfo{
            display: flex;
            margin-left: 2.5rem;
            gap: 1.5rem;
            align-items: center;
            color: white;
            font-size: 18px;

            .posteTitle{
                margin: 0;
            }
            .detailsInfo{
                font-size: 16px;
                display: flex;
                gap: 10px;
                align-items: center;
            }
        }
        .buttons{
            display: flex;
            padding: 1rem;
            gap: 1rem;
        }
    }
</style>