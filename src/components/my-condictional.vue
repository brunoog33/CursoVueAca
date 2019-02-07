<template>
  <my-slot>
    <template name="header">
      COMPONENTS COM CONDIÇÕES (IF, ELSE-IF, ELSE)
    </template>

    <div>
      <button @click="show = 1"></button>
      <button @click="show = 2"></button>
      <button @click="show = 3"></button>
    </div>

    <div v-if="show === 1">CONTEUDO 1</div>
    <div v-else-if="show === 2">CONTEUDO 2</div>
    <div v-else>CONTEUDO 3</div>
  </my-slot>
</template>

<script>
import MySlot from '@/components/my-slot.vue';

export default {
  components: {
    MySlot,
  },
};
</script>

<style>

</style>
