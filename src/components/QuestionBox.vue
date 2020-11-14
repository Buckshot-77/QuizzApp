<template>
  <div class="question-box-container">
    <b-jumbotron>
      <template #lead>
        {{ currentQuestion.question }}
      </template>

      <hr class="my-4" />

      <b-list-group class="answer-list">
        <b-list-group-item
          class="answer-alternative"
          v-for="(answer, index) in shuffledAnswers"
          :key="index"
          @click="selectAnswer(index)"
          :class="[selectedIndex === index ? 'selected-answer' : '']"
          >{{ answer }}</b-list-group-item
        >
      </b-list-group>

      <b-button
        variant="primary"
        @click="submitAnswer"
        class="button"
        :disabled="selectedIndex === null"
        >Submit</b-button
      >
      <b-button variant="success" href="#" @click="next" class="button"
        >Next</b-button
      >
    </b-jumbotron>
  </div>
</template>

<script>
import _ from 'lodash';
export default {
  props: {
    currentQuestion: Object,
    next: Function,
    increment: Function
  },
  watch: {
    currentQuestion: {
      immediate: true,
      handler() {
        this.selectedIndex = null;
        this.shuffleAnswers();
      },
    },
  },
  data() {
    return {
      selectedIndex: null,
      shuffledAnswers: [],
      hasAnsweredQuestion: false,
    };
  },
  computed: {
    answers() {
      let answers = [...this.currentQuestion.incorrect_answers];
      answers.push(this.currentQuestion.correct_answer);
      return answers;
    },
  },
  methods: {
    selectAnswer(index) {
      this.selectedIndex = index;
    },
    shuffleAnswers() {
      let answers = [
        ...this.currentQuestion.incorrect_answers,
        this.currentQuestion.correct_answer,
      ];
      this.shuffledAnswers = _.shuffle(answers);
    },
    submitAnswer() {
      let isCorrect = false;
      if (this.selectedIndex === this.correctIndex) {
        isCorrect = true;
      }
      this.increment(isCorrect);
    },
  },
};
</script>

<style scoped>
.question-box-container {
  margin: 30px 30px;
  justify-self: center;
}
.answer-list {
  margin: 10px;
}
.button {
  margin: 0 5px;
}
.answer-alternative:hover {
  cursor: pointer;
  background-color: rgb(24, 173, 173);
  color: ivory;
}

.selected-answer {
  background-color: rgb(24, 173, 173);
  color: ivory;
}

.correct-answer {
  background-color: green;
}

.incorrect-answer {
  background-color: red;
}
</style>
