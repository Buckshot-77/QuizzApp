<template>
  <div>
    <b-nav tabs>
      <b-nav-item id="logo" disabled>Fancy Quizz App</b-nav-item>
      <b-nav-item disabled>Counter: {{counter}}/10</b-nav-item>
      <b-nav-item disabled>Score: {{counter}}/10</b-nav-item>
    </b-nav>
  </div>
</template>

<script>
export default {
  props:{
    counter: Number
  }
}
</script>

<style scoped>
  #logo{
    font-weight: bold;
  }
</style>