const API_KEY = process.env.REACT_APP_KEY;

const request = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&Language=en-US`,
  fetchNetflixOriginals1: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchNetflixOriginals2: `/discover/tv?api_key=${API_KEY}&with_networks=213&page=2`,
  fetchNetflixOriginals3: `/discover/tv?api_key=${API_KEY}&with_networks=213&page=3`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};
export default request;
