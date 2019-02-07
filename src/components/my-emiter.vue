<template>
  <div>
    <my-slot>
    <span slot="header">COMPONENTE EXPLICANDO EMISSÃO DE EVENTO</span>
    <a href="#" @click.prevent="onSimple">Emitir valor Simples</a>
    <a href="#" @click.prevent="onComplex">Emitir valor Complexo</a>
    </my-slot>
  </div>
</template>

<script>
import MySlot from '@/components/my-slot.vue';

export default {
  props: {
    externalValue: String,
    MySlot,
  },
  methods: {
    onSimple() {
      this.$emit('simple-event', 'Valor Simples Emitido');
    },
    onComplex() {
      this.$emit('complex-event', { valor1: 'Um', valor2: 'Dois' });
    },
  },
};
</script>

<style scoped>
 div, a {
   margin: 8px;
   padding: 8px;
   display: block;
   border-radius: 4px;
   border: 1px solid rgba(0, 0, 0, 0.6)
 };
</style>
