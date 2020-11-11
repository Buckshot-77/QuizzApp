export default async (url) => {
  const apiResponse = await fetch(url, { method: 'get' });
  const responseJSON = await apiResponse.json();

  let results = responseJSON.results;

  results.forEach(result => {
    result.question = result.question
    .replaceAll("&quot;", '"')
    .replaceAll("&#039;", "'")
    .replaceAll("&ldquo;", "“")
    .replaceAll("&rdquo;", "”")
    .replaceAll("&lsquo;", "‘")
    .replaceAll("&rsquo;", "’")
  })

  return results;
};
