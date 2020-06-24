<template>
  <div class="banner">
    Banner da pagina<br/> 
    Message: <strong>{{ msg }}</strong>
  </div>
</template>

<script>
export default {
  name: 'banner',
  props: {
    msg: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.banner {
  width: 90%;
  padding: 5%;
  background: rebeccapurple;
  margin-top: 20px;
  box-shadow: 3px 3px 2px #999;
  color: white;
  font: 18px arial;
  text-align: center;
  cursor: pointer;
}
</style>