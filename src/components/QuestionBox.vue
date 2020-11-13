<template>
  <div class="question-box-container">
    <b-jumbotron>
      <template #lead>
        {{ currentQuestion.question }}
      </template>

      <hr class="my-4" />

      <p>
        List of answers
      </p>

      <b-button variant="primary" href="#">Submit</b-button>
      <b-button variant="success" href="#" @click="next">Next</b-button>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  props: {
    currentQuestion: Object,
    next: Function,
  },
  computed: {
    answers() {
      let answers = [...this.currentQuestion.incorrect_answers];
      return answers.push(this.currentQuestion.correct_answer);
    },
  },
};
</script>

<style scoped>
  .question-box-container{
    margin-top: 30px;
    justify-self: center;
  }
</style>
