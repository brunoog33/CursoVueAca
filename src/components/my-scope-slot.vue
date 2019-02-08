<template>
<my-slot>
  <template slot="header">
    COMPONENT MOSNTRANDO O SCOPED
  </template>
  <template v-for="(item, index) in list">
    <div :key="index">
      <slot :item="item" />
    </div>
  </template>
</my-slot>
</template>

<script>
import MySlot from '@/components/my-slot.vue';

export default {
  components: {
    MySlot,
  },
  props: {
    list: Array,
  },
};
</script>

<style>

</style>
