<template>
  <my-slot>
    <template slot="header">
      CICLO DE VIDA DE UM COMPONENT
    </template>
    <div v-for="item in list" :key="item.id">{{ item.label }}</div>
  </my-slot>
</template>

<script>
import MySlot from '@/components/my-slot.vue';

export default {
  props: {
    MySlot,
  },
  data() {
    return {
      list: [],
    };
  },
};
</script>

<style>

</style>
