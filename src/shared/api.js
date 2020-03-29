import fetch from "isomorphic-fetch";

export function fetchPopularRepos(language = "all") {
  const encodedURI = encodeURI(
    `https://api.github.com/search/repositories?q=star:>1+language:${language}&sort=stars&order=desc&type=Repositories`
  );

  return fetch(encodedURI)
    .then(data => data.json())
    .then(response => response.items)
    .catch(err => {
      console.warn(err);
      return null;
    });
}
