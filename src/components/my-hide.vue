<template>
  <my-slot>
    <template slot="header">COMPONENT COM OPÇÃO DE OCULTAÇÃO (HIDE)</template>
    <button @click="show = !show">Toggle</button>
    <div v-show="show">MOSTRANDO</div>
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
      show: false,
    };
  },
};
</script>

<style>

</style>
