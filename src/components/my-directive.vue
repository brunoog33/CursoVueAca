<template>
  <my-slot>
    <template slot="header">COMPONENTE UTILIZANDO DIRETIVA</template>

    <div v-my-directive:arg.mod1.mod2="'menssage'"></div>
  </my-slot>
</template>

<script>
import MyDirective from '@/directives/my-directive';

import MySlot from '@/components/my-slot.vue';

export default {
  components: {
    MySlot,
  },
  directives: {
    MyDirective,
  },
};
</script>

<style>

</style>
