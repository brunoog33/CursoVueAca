<template>
  <div>
    <span>COMPONENTE EXPLICANDO SINCRONIZAÇÃO DE PROP'S</span>
    <div>{{ externalProp }}</div>
    <a href="#" @click.prevent="$emit('evento-qualquer', 'Externo')">
      Atualização externa (evento)
    </a>
    <a href="#" @click.prevent="$emit('update: syncProp', 'Interno')">
      Atualização Interna (modificador .sync)
    </a>
  </div>
</template>

<script>
export default {
  props: {
    externalValue: String,
    syncProp: String,
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
