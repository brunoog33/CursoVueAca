<template>
<my-slot>
  <template slot="header">UTILIZAÇÃO DE WATCH</template>

  <input v-model="input" /> Máximo 4 caracteres!!!
</my-slot>
</template>

<script>
import MySlot from '@/components/my-slot.vue';

export default {
  components: {
    MySlot,
  },
  date() {
    return {
      input: null,
    };
  },
  watch: {
    input(newValue, oldValue) {
      if (newValue && newValue.length > 4) {
        this.input = oldValue;
      }
    },
  },
};
</script>


<style>

</style>
