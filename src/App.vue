<template>
  <div id="app">
    <Header :counter="index + 1" />
    <b-container class="bv-example-row">
      <b-row>
        <b-col sm="6" offset="3">
          <QuestionBox
            v-if="questions.length"
            :currentQuestion="questions[index]"
            :next="next"
        /></b-col>
      </b-row>
    </b-container>
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
      'https://opentdb.com/api.php?amount=10&category=11&type=multiple'
    );
  },
  data() {
    return {
      questions: [],
      index: 0,
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
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
