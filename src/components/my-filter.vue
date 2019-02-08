<template>
  <my-slot>
    <template  slot="header">UTILIZAÇÃO DE FILTROS

      <input />
    </template>
  </my-slot>
</template>

<script>
import MySlot from '@/components/my-slot.vue';
import MyCaptalize from '@/filters/my-captalize';

export default {
  components: {
    MySlot,
  },
  filters: {
    MyCaptalize,
  },
  data() {
    return {
      input: '',
    };
  },
};
</script>

<style>

</style>
