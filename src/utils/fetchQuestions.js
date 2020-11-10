export default async (url) => {
  const apiResponse = await fetch(url, { method: 'get' });
  const responseJSON = await apiResponse.json();

  const results = responseJSON.results;

  return results;
};
