<template>
  <my-slot>
    <template slot="header">COMPONENT COM LOOP</template>

    <!-- Outra forma sem utilizar o index
        <div v-for="item in list" :key="item.id">
        {{ item.label }}
        </div>-->
    <div v-for="(item, index) in list" :key="item.id">
       Index: {{ index }} - {{ item.label }}</div>
  </my-slot>
</template>

<script>
import MySlot from '@/components/my-slot.vue';

export default {
  components: {
    MySlot,
  },
  data() {
    return {
      list: [
        { id: 1, label: 'ITEM 1' },
        { id: 2, label: 'ITEM 2' },
        { id: 3, label: 'ITEM 3' },
        { id: 4, label: 'ITEM 4' },
      ],
    };
  },
};
</script>

<style>

</style>
