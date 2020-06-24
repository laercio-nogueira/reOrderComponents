<template>
  <div class="card">
    <h1> Hi, I'm Fixed Card! </h1>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.card {
  width: 100%;
  margin-top: 20px;
  background:coral;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  height: 120px;
    align-items: center;
  
  & h1 {
    vertical-align: middle;
    text-align: center;
    color: white;
    width: 100%;
  }
}
</style>