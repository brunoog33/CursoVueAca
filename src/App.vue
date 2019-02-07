<template>
  <div id="app">
    <my-bind
        minha-prop-string="Valor String"
        :minha-prop-number="123"
        :minha-prop-generic="`Valor ${321}`"
        :minha-prop-validated="5"
        />
        <my-event />
        <my-emiter
          @simple-event="onSImpleEvent"
          @complex-event="onComplexEvent"/>
  </div>
</template>

<script>
import MyBind from '@/components/my-bind.vue';
import MyEvent from '@/components/my-event.vue';
import MyEmiter from '@/components/my-emiter.vue';

export default {
  name: 'app',
  components: {
    MyBind,
    MyEvent,
    MyEmiter,
  },
  methods: {
    onSimple($event) {
      console.log('SIMPLE EVENT', $event);
    },
    onComplex($event) {
      console.log('COMPLEX EVENT', $event);
    },
  },
};
</script>

<style>
html, body {
  margin: 0;
  padding: o;
  font-family: 'Avenir, Helvetica, Arial, sans-serif'
}

</style>
