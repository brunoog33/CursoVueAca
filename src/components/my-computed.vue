<template>
  <my-slot>
    <template slot="header">COMPUTED'S</template>
    <input type="text" v-model="filter">
    <div v-for="item in filteredList" :key="item.id">{{ item.label }}</div>
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
      filter: null,
      list: [
        { id: 1, label: 'Fernando' },
        { id: 2, label: 'Bruno' },
        { id: 3, label: 'Claudio' },
        { id: 4, label: 'Danilo' },
      ],
    };
  },
  computed: {
    computedFilter() {
      return (this.filter || '').toUpperCase();
    },
    filteredList() {
      if (!this.filter) return this.list;
      return this.list
        .filter(({ label }) => label.toUpperCase().indexOf(this.filter) >= 0);
    },
  },
};
</script>

<style>

</style>
