<template>
  <div class="card">
    <p> Components Cards <p>
    <div class="card--item">
      Card1
    </div>
    <div class="card--item">
      Card2
    </div>
    <div class="card--item">
      Card3
    </div>
    <button @click="$emit('clickEvent', 'Click in button card!!!')">Click</button>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.card {
  width: 100%;
  margin-top: 20px;
  background: silver;
  height: 210px;
  font-family: Arial, Helvetica, sans-serif;
  box-sizing: border-box;

  &--item {
    display: inline-flex;
    height: 100px;
    width: 30%;
    margin: 10px 1.5%; 
    border: 2px solid #666;
    box-sizing: border-box;
    background:cadetblue;
    text-align: center;
    vertical-align: middle;
  }

  & button {
    float: right;
    padding: 10px 20px;
    margin: 5px 23px;
  }
}
</style>