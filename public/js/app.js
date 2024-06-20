const { createApp,defineComponent, ref } = Vue


createApp({
  components:{Demo},
  setup() {
    const message = ref('Hello vue!')
    return {
      message
    }
  }
}).mount('#app')


const Demo = defineComponent({
  setup(){
    const content = ref('hello')
    const onClick = ()=>{
      content.value = 'world!'
    }
    return {
      content,
      onClick
    }
  },
  template:/*html*/`
    <div @click="onClick">{{content}}</div>
  `
})