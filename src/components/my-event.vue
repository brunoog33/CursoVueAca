<template>
  <div>
    <span>COMPONENTE EXPLICANDO EVENTOS / MODIFICADORES</span>
   <!-- Um dos modos de fazer <a href="" @click="$emit('click', 'Normal Clique')">Evento Clique</a>
    <a href="" @click.stop="$emit('click', 'stopPropagation')">Evento Clique com stopPropagation</a>
    <a href="" @click.stop.prevent="$emit('click', 'preventDefault')">
       Evento Clique com stopPropagation e preventDefault
    </a>-->
    <a href="" @click="onClick">Evento Clique</a>
    <a href="" @click.stop="onClick">
      Evento Clique com <span @click.stop style="color: red">stopPropagation</span>
    </a>
    <a href="" @click.stop.prevent="onClick">Evento Clique com stopPropagation e preventDefault</a>
    <div>{{ eventResult || 'Clique em um dos links' }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      eventResult: null,
    };
  },
  methods: {
    onClick($event) {
      // $event é o evento padrão de click do JS
      // Usar $ para eventos externos ou proprio da linguagem
      this.eventResult = $event.target.innerText;
    },
  },
};
</script>

<style scoped>
 div, a {
   margin: 8px;
   padding: 8px;
   border-radius: 4px;
   border: 1px solid rgba(0, 0, 0, 0.6)
 };
</style>
