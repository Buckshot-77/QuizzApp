export default async (url) => {
  const apiResponse = await fetch(url, { method: 'get' });
  const responseJSON = await apiResponse.json();

  let results = responseJSON.results;

  results.forEach((result) => {
    result.question = result.question
      .replaceAll('&quot;', '"')
      .replaceAll('&#039;', "'")
      .replaceAll('&ldquo;', '“')
      .replaceAll('&rdquo;', '”')
      .replaceAll('&lsquo;', '‘')
      .replaceAll('&rsquo;', '’')
      .replaceAll('&amp;', '&');

    for (let i = 0; i < result.incorrect_answers.length; i++) {
      result.incorrect_answers[i] = result.incorrect_answers[i]
        .replaceAll('&quot;', '"')
        .replaceAll('&#039;', "'")
        .replaceAll('&ldquo;', '“')
        .replaceAll('&rdquo;', '”')
        .replaceAll('&lsquo;', '‘')
        .replaceAll('&rsquo;', '’')
        .replaceAll('&amp;', '&');
    }

    result.correct_answer = result.correct_answer
      .replaceAll('&quot;', '"')
      .replaceAll('&#039;', "'")
      .replaceAll('&ldquo;', '“')
      .replaceAll('&rdquo;', '”')
      .replaceAll('&lsquo;', '‘')
      .replaceAll('&rsquo;', '’')
      .replaceAll('&amp;', '&');
  });

  return results;
};
