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
    <my-condictional />
    <my-hide />
    <my-loop />
    <!--<my-ciclo-de-vida />-->
    <my-ref />
  </div>
</template>

<script>
import MyBind from '@/components/my-bind.vue';
import MyEvent from '@/components/my-event.vue';
import MyEmiter from '@/components/my-emiter.vue';
import MyPropSync from '@/components/my-prop-sync.vue';
import MyCondictional from '@/components/my-condictional.vue';
import MyHide from '@/components/my-hide.vue';
import MyLoop from '@/components/my-loop.vue';
// import MyCicloDeVida from '@/components/my-ciclo-de-vida.vue';
import MyRef from '@/components/my-ref.vue';

export default {
  name: 'app',
  components: {
    MyBind,
    MyEvent,
    MyEmiter,
    MyPropSync,
    MyCondictional,
    MyHide,
    MyLoop,
    // MyCicloDeVida,
    MyRef,
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
