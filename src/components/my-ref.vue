<template>
  <my-slot>
    <template slot="header">REFERENCIAS DE COMPONENTES</template>
    <button @click="onCallRef">Chamar emitir valor simples</button>
    <my-emiter ref="emiter"/>
  </my-slot>
</template>

<script>
import MySlot from '@/components/my-slot.vue';
import MyEmiter from '@/components/my-emiter.vue';

export default {
  components: {
    MySlot,
    MyEmiter,
  },
  methods: {
    onCallRef() {
      this.$refs.emiter.onSimple();
    },
    onSimpleEvent($event) {
      console.log('SIMPLE', $event);
    },
    onComplexEvent($event) {
      console.log('COMPLEX', $event);
    },
  },
};
</script>

<style>

</style>
