<template>
  <div>

    <section v-for="(item, index) in components" :key="index" v-on="item.events">
      <component
        :is="item.name" 
        v-bind="item.attributes" 
        v-on="item.events"
      />
    </section>

    <section>
      <CardFixed />
    </section>
  </div>
</template>

<script>
import Card from './components/Card.vue'
import Banner from './components/Banner.vue'
import CardFixed from './components/CardFixed'

export default {
  components: {
    Card, Banner, CardFixed
  },
  methods: {
    sum(num1, num2) {
      console.log(`${num1} + ${num2} = ${num1+num2}`)
    },
    changePosition({ name, newPosition }) {
      const actualPosition = this.components.findIndex((item, index) => item.name === name)
      this.components.splice(actualPosition, 1, this.components.splice(newPosition, 1)[0])
    },
  }, 
  created() {
    if (this.$featureFlag.check('first-banner')) {
      this.changePosition({ name: 'Banner', newPosition: 0 });
    }
  },
  data() {
    return {
      components: [
        { 
          name: 'Card',
          events: {
            'clickEvent': (msg) => alert(msg)
          }
        },
        { 
          name: 'Banner',
          attributes: {
            msg: 'Mensagem enviada via props',
          },
          events: {
            'click': () => this.sum(2, 5)
          }
        },
      ]
    }
  }
}
</script>