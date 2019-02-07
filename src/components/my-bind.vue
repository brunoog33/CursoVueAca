<template>
  <div>
    <span>COMPONENTE EXPLICANDO BIN / PROPS</span>
    <div>Prop String: {{ minhaPropString }}</div>
    <div>Prop Number: {{ minhaPropNumber }}</div>
    <div>Prop Generic: {{ minhaPropGeneric }}</div>
    <div>Prop Default: {{ minhaPropDefault }}</div>
    <div>Prop Validated: {{ minhaPropValidated }}</div>
  </div>
</template>

<script>
export default {
  props: {
    minhaPropString: String,
    minhaPropNumber: Number,
    minhaPropGeneric: [String, Number],
    minhaPropDefault: {
      type: String,
      default: 'Valor Default',
    },
    minhaPropValidated: {
      type: Number,
      validator: v => v > 10,
    },
  },
};
</script>

<style scoped>
 div {
   margin: 8px;
   padding: 8px;
   border-radius: 4px;
   border: 1px solid rgba(0, 0, 0, 0.6)
 };
</style>
