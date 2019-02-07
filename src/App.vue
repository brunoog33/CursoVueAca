<template>
  <div id="app">
    <my-bind
        minha-prop-string="Valor String"
        :minha-prop-number="123"
        :minha-prop-generic="`Valor ${321}`"
        :minha-prop-validated="5" />
    <my-event />
    <my-emiter
        @simple-event="onSImpleEvent"
        @complex-event="onComplexEvent" />
    <my-prop-sync
        :external-prop="propSync"
        @evento-qualquer="propSync = $event"
        :sync-prop.sync="propSync" />
  </div>
</template>

<script>
import MyBind from '@/components/my-bind.vue';
import MyEvent from '@/components/my-event.vue';
import MyEmiter from '@/components/my-emiter.vue';
import MyPropSync from '@/components/my-prop-sync.vue';

export default {
  name: 'app',
  components: {
    MyBind,
    MyEvent,
    MyEmiter,
    MyPropSync,
  },
  data() {
    return {
      propSync: 'Modifique clicando em dos links',
    };
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
  padding: 0;
  font-family: 'Avenir, Helvetica, Arial, sans-serif'
}

</style>
