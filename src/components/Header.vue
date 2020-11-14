<template>
  <div>
    <b-nav tabs>
      <b-nav-item id="logo" disabled>Fancy Quizz App</b-nav-item>
      <b-nav-item disabled>Counter: {{ numCorrect }}/{{ numTotal }}</b-nav-item>
    </b-nav>
  </div>
</template>

<script>
export default {
  props: {
    numCorrect: Number,
    numTotal: Number,
  },
};
</script>

<style scoped>
#logo {
  font-weight: bold;
}
</style>
