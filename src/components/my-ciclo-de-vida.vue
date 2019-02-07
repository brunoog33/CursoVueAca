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
  beforeCreate() {
    // Ainda não existe os data
    console.log('beforeCreate', this.list);
  },
  created() {
    console.log('created');
  },
  beforeMount() {
    console.log('beforeMount');
  },
  mounted() {
    console.log('mounted');
  },
  beforeUpdate() {
    console.log('beforeUpdate', this.list);
  },
  updated() {
    console.log('updated', this.list);
  },
  beforeDestroy() {
    console.log('beforeDestroy');
  },
  destroyed() {
    console.log('destroyed');
  },
};
</script>

<style>

</style>
