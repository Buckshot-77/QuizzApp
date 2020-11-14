<template>
  <div id="app">
    <Header
      :numCorrect="numCorrect"
      :numTotal="numTotal"
    />
    <QuestionBox
      v-if="questions.length"
      :currentQuestion="questions[index]"
      :next="next"
      :increment="increment"
    />
  </div>
</template>

<script>
import Header from './components/Header';
import QuestionBox from './components/QuestionBox';
import fetchQuestions from './utils/fetchQuestions';

export default {
  name: 'App',
  components: {
    Header,
    QuestionBox,
  },
  mounted: async function() {
    this.questions = await fetchQuestions(
      'https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple'
    );
  },
  data() {
    return {
      questions: [],
      index: 0,
      numCorrect: 0,
      numTotal: 0,
    };
  },
  methods: {
    next() {
      if (this.index < this.questions.length - 1) {
        this.index++;
      } else {
        return;
      }
    },
    increment(isCorrect) {
      if (isCorrect) {
        this.numCorrect++;
      }
      this.numTotal++;
    },
  },
};
</script>

<style>
#app {
  margin: 0;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: grid;
}
</style>
