<template>
    <div class="button-grid">

    </div>
    <div>
        An AI generated list of Pakistani food
    </div>
    <div class="food-grid">
        <div v-for="item in menuItems" :key="item[0].toString()" class="food-item" @click="zoomIn(item)">
          
            <img :src="typeof item[3] === 'string' ? item[3] : ''" />
            <h3>{{ item[1] }}</h3>
            <p>{{ item[2] }}</p>

        </div>

        <div v-if="zoomedItem" class="zoom-modal" @click="zoomOut">
            <div class="zoom-content">
                <img :src="zoomedItem[3]" />
                <h3>{{ zoomedItem[1] }}</h3>
                <p>{{ zoomedItem[2] }}</p>

            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import menuItems from '../data/menu.json';

export default defineComponent({
    name: 'FoodGrid',
    setup() {
        const items = ref(menuItems);
        const zoomedItem = ref(null);

        const zoomIn = (item: any) => {
            zoomedItem.value = item;
        };

        const zoomOut = () => {
            zoomedItem.value = null;
        };

        return {
            menuItems: items,
            zoomedItem,
            zoomIn,
            zoomOut
        };
    }
});
</script>

<style scoped>
.food-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
}

.food-item {
    flex: 1 1 calc(33.333% - 16px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    padding: 16px;
    text-align: center;
    cursor: pointer;
}

.food-item img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.zoom-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;

}

.zoom-content {
    background: #fff;
    padding: 20px;
    text-align: center;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.zoom-content img {
    max-width: 100%;
    height: auto;
}

/* Media query for mobile devices */
@media (max-width: 600px) {
    .food-item {
        flex: 1 1 100%;
    }
}

.button-grid>button {
    border: solid 1px red;
    margin: 2px;
}

.button-grid>button:hover {
    background-color: red;
}
</style>