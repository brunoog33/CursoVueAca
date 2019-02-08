// <div id="hook-arguments-example" v-my-directive:arg.mod1.mod2="message"></div>
export default {
  bind($el, $binding, $node) {
    // Chamado apenas um vez, quando o elemento é criado e a diretiva é vinculada ao elemento
    // Usado principalmente para configurações iniciais da diretiva
    const html = `
    name: ${JSON.stringify($binding.name)} <br>
    value: ${JSON.stringify($binding.value)} <br>
    expression: ${JSON.stringify($binding.expression)} <br>
    arg: ${JSON.stringify($binding.arg)} <br>
    modifiers: ${JSON.stringify($binding.modifiers)} <br>
    vnode keys: ${JSON.stringify(Object.keys($node).join(', '))} <br>
  `;
    $el.innerHTML = html // eslint-disable-line
  },
  inserted() {
    // Chamado após o elemento ter sido inserido dentro de seu nó pai
    // Só garante a presença do nó pai, e necessariamente no DOM
  },
  update() {
    // Chamado quando o elemento sobre alterações
    // Porem antes que os filhos do elemento sofram a alteração
  },
  componentUpdated() {
    // Chamado quando o elemento e seus filhos sofreram uma alteração
  },
  unbind() {
    // Chamado apenas quando a diretiva é desvinculada do elemento
  },
};
