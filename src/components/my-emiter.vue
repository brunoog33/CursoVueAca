<template>
  <div>
    <span>COMPONENTE EXPLICANDO EMISSÃO DE EVENTO</span>
    <a href="#" @click.prevent="onSimple">Emitir valor Simples</a>
    <a href="#" @click.prevent="onComplex">Emitir valor Complexo</a>
  </div>
</template>

<script>
export default {
  props: {
    externalValue: String,
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
 div {
   margin: 8px;
   padding: 8px;
   display: block;
   border-radius: 4px;
   border: 1px solid rgba(0, 0, 0, 0.6)
 };
</style>
